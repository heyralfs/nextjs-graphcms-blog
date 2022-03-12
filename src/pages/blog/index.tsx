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
import { apolloClient } from "../../services/apolloClient";

type Post = {
	slug: string;
	date: string;
	title: string;
	brief: string;
};

interface HomeProps {
	posts: Post[];
}

export default function Posts({ posts }: HomeProps) {
	return (
		<Box w="100%" maxW={720} py="16" mx="auto">
			<Stack spacing={8}>
				{posts.map((post, i) => {
					return (
						<Box key={post.slug}>
							<Link href={`/blog/${post.slug}`} passHref>
								<ChakraLink mt="4">
									<Text
										fontWeight="bold"
										as="h1"
										fontSize="xl"
									>
										{post.title}
									</Text>
									<Text fontSize="sm" color="gray.400" mt="2">
										{post.date}
									</Text>
									<Text fontSize="sm" mt="2">
										{post.brief}
									</Text>
								</ChakraLink>
							</Link>
							{posts.length - 1 > i && <Divider mt="8" />}
						</Box>
					);
				})}
			</Stack>
		</Box>
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
					brief
				}
			}
		`,
	});

	const { blogPosts: posts } = data;

	return {
		props: { posts },
	};
};
