import { Box } from "@chakra-ui/react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
import style from "./style.module.scss";

interface PostContentProps {
	postHtml: string;
}

export function PostContent({ postHtml }: PostContentProps) {
	useEffect(() => {
		document.querySelectorAll("pre code").forEach((element) => {
			element.classList.add("language-js");
		});
		Prism.highlightAll();
	}, []);

	return (
		<Box
			my="8"
			dangerouslySetInnerHTML={{ __html: postHtml }}
			className={style["post-content"]}
		/>
	);
}
