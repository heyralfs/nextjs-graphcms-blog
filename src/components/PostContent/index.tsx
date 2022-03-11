import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { highlightAll } from "highlight.js";
import ReactMarkdown from "react-markdown";

import style from "./style.module.scss";
// import "highlight.js/styles/codepen-embed.css";
// import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/styles/tomorrow-night-bright.css";
import { CodeViewer } from "../CodeViewer";

type CodeElement = {
	props: { className: string; children: string };
};

interface PostContentProps {
	postMarkdown: string;
}

export function PostContent({ postMarkdown }: PostContentProps) {
	useEffect(() => {
		highlightAll();
	}, []);

	return (
		<ReactMarkdown
			className={style["post-content"]}
			children={postMarkdown}
			components={{
				pre: ({ children }) => (
					<CodeViewer code={children[0] as ReactNode & CodeElement} />
				),
			}}
		/>
	);
}
