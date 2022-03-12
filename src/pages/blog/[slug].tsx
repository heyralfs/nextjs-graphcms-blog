import { GetStaticPaths, GetStaticProps } from "next";
import { ReactNode, useEffect } from "react";
import { gql } from "@apollo/client";
import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ParsedUrlQuery } from "querystring";
import { highlightAll } from "highlight.js";

import { apolloClient } from "../../services/apolloClient";

// import "highlight.js/styles/codepen-embed.css";
// import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/styles/tomorrow-night-bright.css";
import ReactMarkdown from "react-markdown";
import { CodeViewer } from "../../components/CodeViewer";

type CodeElement = {
	props: { className: string; children: string };
};

type Post = {
	title: string;
	date: string;
	markdown: string;
};

interface PostPageProps {
	post: Post;
}

export default function PostPage({ post }: PostPageProps) {
	const { colorMode } = useColorMode();

	useEffect(() => {
		highlightAll();
	}, [colorMode]);

	return (
		<Box
			w="100%"
			maxW={720}
			py="8"
			px="4"
			m="auto"
			className="post-content"
		>
			<Text
				as="h1"
				fontSize="5xl"
				// color={titleColor}
				fontWeight="bold"
				lineHeight="1"
			>
				{post.title}
			</Text>

			<Text color="gray.400" mt="4">
				{new Date(post.date).toLocaleString("en-US", {
					day: "2-digit",
					month: "long",
					year: "numeric",
				})}
			</Text>

			<ReactMarkdown
				children={post.markdown}
				components={{
					pre: ({ children }) => (
						<CodeViewer
							code={children[0] as ReactNode & CodeElement}
						/>
					),
				}}
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
		params: { slug: post.slug },
	}));

	return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as IParams;

	const { data } = await apolloClient.query({
		query: gql`
			query Post($slug: String!) {
				blogPosts(where: { slug: $slug }) {
					title
					date
					markdown
				}
			}
		`,
		variables: {
			slug,
		},
	});

	const { blogPosts: posts } = data;

	return {
		props: { post: posts[0] },
	};
};
