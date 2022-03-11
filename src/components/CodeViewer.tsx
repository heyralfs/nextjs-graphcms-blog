import { Box, Icon } from "@chakra-ui/react";
import { ReactNode } from "react-markdown/lib/react-markdown";
import { MdContentCopy, MdOutlineCheckCircleOutline } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";

type CodeElement = {
	props: {
		className: string;
		children: string;
	};
};

interface CodeViewerProps {
	code: ReactNode & CodeElement;
}

export function CodeViewer({ code }: CodeViewerProps) {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			setTimeout(() => setCopied(false), 1000);
		}
	}, [copied]);

	return (
		<Box as="pre" position="relative">
			<Box as="button" position="absolute" right="4" top="4">
				<CopyToClipboard
					text={code.props.children}
					onCopy={() => setCopied(true)}
				>
					<Icon
						as={
							copied ? MdOutlineCheckCircleOutline : MdContentCopy
						}
						fontSize="15"
						cursor="pointer"
						title={copied ? "Copied!" : "Copy to clipboard"}
						color="cyan.300"
					/>
				</CopyToClipboard>
			</Box>
			{code}
		</Box>
	);
}
