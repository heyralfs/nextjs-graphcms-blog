import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

export const theme = extendTheme({
	initialColorMode: "dark",
	useSystemColorMode: false,

	fonts: {
		heading: "Roboto",
		body: "Roboto",
	},

	styles: {
		global: (props: Dict<any> | StyleFunctionProps) => ({
			/**
			 * Post content styling
			 */
			".post-content": {
				"h1,h2,h3,h4": {
					color: mode("cyan.700", "cyan.300")(props),
					fontWeight: "bold",
					my: "4",
				},
				h1: {
					fontSize: "4xl",
				},
				h2: {
					fontSize: "3xl",
				},
				h3: {
					fontSize: "2xl",
				},
				h4: {
					fontSize: "xl",
				},
				"p,blockquote,ul li,a": {
					fontSize: "lg",
					lineHeight: "taller",
					textAlign: "justify",
				},
				a: {
					color: mode("cyan.700", "cyan.300")(props),
					"&:hover": {
						textDecoration: "underline",
					},
				},
				"ul,ol,p": {
					my: "6",
				},
				li: {
					my: "4",
				},
				blockquote: {
					fontStyle: "italic",
					my: "6",
					mx: 0,
					py: 0,
					px: 6,
					borderLeft: mode(
						"5px solid var(--chakra-colors-cyan-700)",
						"5px solid var(--chakra-colors-cyan-300)"
					)(props),
				},
				strong: {
					fontW: "bold",
				},
				code: {
					bg: mode("gray.300", "gray.700")(props),
					p: "1",
					fontSize: "md",
				},
				"pre code": {
					bg: "gray.700",
					p: "3",
					borderRadius: "2",
				},
			},

			/**
			 * TEST:
			 * HighLightJS custom styling
			 */
			// ".hljs-tag": {
			// 	color: "blue",
			// },
		}),
	},
});
