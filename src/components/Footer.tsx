import { Flex, Divider, Text, HStack, Stack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiChakraui, SiGraphql, SiNextdotjs } from "react-icons/si";

export function Footer() {
	return (
		<>
			<Divider />
			<Flex
				as="footer"
				w="100%"
				h="128px"
				maxW={1480}
				mx="auto"
				mb="2"
				align="center"
				justify="center"
			>
				<Stack spacing="4" align="center">
					<Text fontSize="sm">Made with ❤️ and</Text>
					<HStack spacing="4">
						<Icon as={SiNextdotjs} fontSize="xl" title="Next.JS" />
						<Icon as={FaReact} fontSize="xl" title="ReactJS" />
						<Icon as={SiChakraui} fontSize="xl" title="ChakraUI" />
						<Icon as={SiGraphql} fontSize="xl" title="GraphQL" />
					</HStack>
				</Stack>
			</Flex>
		</>
	);
}
