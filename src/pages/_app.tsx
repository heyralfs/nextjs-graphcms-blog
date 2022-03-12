import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Header } from "../components/Header";
import { SocialLinks } from "../components/FloatingSocialLinks";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Header />
			<SocialLinks />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
