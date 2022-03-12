import { Flex, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface RoudedIconProps {
	icon: IconType;
	url: string;
}
export function RoudedIconLink({ icon, url }: RoudedIconProps) {
	const contrast = useColorModeValue("gray.800", "whiteAlpha.900");
	const mainColor = useColorModeValue("whiteAlpha.900", "gray.800");

	return (
		<Link href={url} target="_blank">
			<Flex
				borderRadius="50%"
				bg={mainColor}
				w="6"
				h="6"
				align="center"
				justify="center"
			>
				<Icon as={icon} color={contrast} />
			</Flex>
		</Link>
	);
}
