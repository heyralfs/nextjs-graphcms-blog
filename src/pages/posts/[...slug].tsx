import { gql } from "@apollo/client";
import { Box, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { apolloClient } from "../../services/apolloClient";

type Post = {
	title: string;
	date: string;
	content: any; // FIXME:
};

interface PostPageProps {
	post: Post;
}

export default function PostPage({ post }: PostPageProps) {
	return (
		<Box w="100%" maxW={720} py="8" m="auto">
			<Text
				fontSize="4xl"
				color="yellow.400"
				fontWeight="bold"
				lineHeight="10"
			>
				{post.title}
			</Text>

			<Text color="gray.400" mt="4">
				{new Date(post.date).toLocaleString("pt-BR", {
					day: "2-digit",
					month: "long",
					year: "numeric",
				})}
			</Text>

			<Box
				my="8"
				dangerouslySetInnerHTML={{ __html: post.content.html }}
			/>
		</Box>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await apolloClient.query({
		query: gql`
			query {
				blogPosts {
					slug
				}
			}
		`,
	});

	const { blogPosts } = data;
	const paths = blogPosts.map((post: { slug: string }) => ({
		params: { slug: [post.slug] },
	}));

	return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
	slug: string[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as IParams;

	const { data } = await apolloClient.query({
		query: gql`
			query Post($slug: String!) {
				blogPosts(where: { slug: $slug }) {
					title
					date
					content {
						html
					}
				}
			}
		`,
		variables: {
			slug: slug[0],
		},
	});

	const { blogPosts: posts } = data;

	return {
		props: { post: posts[0] },
	};
};
