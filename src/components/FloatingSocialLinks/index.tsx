import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { RoudedIconLink } from "./RoudedIconLink";
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export function SocialLinks() {
	const bg = useColorModeValue("gray.800", "whiteAlpha.900");
	return (
		<Box
			bg={bg}
			p="1"
			borderRadius="20"
			display="inline-block"
			position="fixed"
			left="4"
			top="50%"
			style={{
				transform: "translateY(-50%)",
			}}
		>
			<Stack spacing="2">
				<RoudedIconLink
					icon={RiGithubLine}
					url="https://github.com/heyralfs"
				/>
				<RoudedIconLink
					icon={RiLinkedinFill}
					url="https://linkedin.com/in/ralf-o"
				/>
				<RoudedIconLink
					icon={FaTelegramPlane}
					url="https://t.me/heyralfs"
				/>
				<RoudedIconLink
					icon={FaWhatsapp}
					url="https://api.whatsapp.com/send?phone=5531994665145&text=Hey%2C%20Ralfs!"
				/>
			</Stack>
		</Box>
	);
}
