import {
	Box,
	Button,
	Divider,
	Flex,
	Icon,
	Link as ChakraLink,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function Header() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Box>
				<Flex
					w="100%"
					as="header"
					maxW={1480}
					h="16"
					mx="auto"
					align="center"
					justify="space-between"
					px="6"
					mt="2"
				>
					<Link href="/" passHref>
						<ChakraLink _hover={{ textDecoration: "none" }}>
							<Text fontSize="lg">{"<Hey, Ralfs! 🙋‍♂️/>"}</Text>
						</ChakraLink>
					</Link>

					<Button
						onClick={toggleColorMode}
						bg="none"
						_hover={{ bg: "none" }}
						title={
							colorMode === "light"
								? "Turn on dark theme"
								: "Turn on light theme"
						}
					>
						<Icon
							as={
								colorMode === "light" ? MdDarkMode : MdLightMode
							}
						/>
					</Button>
				</Flex>
			</Box>
			<Divider />
		</>
	);
}
