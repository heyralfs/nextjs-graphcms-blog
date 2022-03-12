import { gql } from "@apollo/client";
import {
	Box,
	Divider,
	Flex,
	Stack,
	Text,
	Link as ChakraLink,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { apolloClient } from "../services/apolloClient";

type Post = {
	slug: string;
	date: string;
	title: string;
};

interface HomeProps {
	posts: Post[];
}

export default function Home({ posts }: HomeProps) {
	return (
		<Flex
			w="100%"
			h={"calc(100vh - 64px)"}
			align="center"
			justify="space-evenly"
			direction="column"
		>
			<Text fontSize="2xl">Hello world</Text>

			<Stack spacing={8}>
				{posts.map((post) => {
					return (
						<Box key={post.slug}>
							<Link href={`/posts/${post.slug}`} passHref>
								<ChakraLink mt="4">
									<Text fontWeight="bold">{post.title}</Text>
									<Text fontSize="sm" color="gray.400" mt="2">
										{post.date}
									</Text>
								</ChakraLink>
							</Link>
							<Divider mt="8" />
						</Box>
					);
				})}
			</Stack>
		</Flex>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await apolloClient.query({
		query: gql`
			query {
				blogPosts {
					slug
					title
					date
				}
			}
		`,
	});

	const { blogPosts: posts } = data;

	return {
		props: { posts },
	};
};
