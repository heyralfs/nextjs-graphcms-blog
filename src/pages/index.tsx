import {
	Box,
	Divider,
	Flex,
	Stack,
	Text,
	Link as ChakraLink,
} from "@chakra-ui/react";

import Link from "next/link";

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
			justify="center"
			direction="column"
		>
			<Text fontSize="2xl" mb={4}>
				Hello world
			</Text>
			<Link href="/blog" passHref>
				<ChakraLink>Go to blog</ChakraLink>
			</Link>
		</Flex>
	);
}
