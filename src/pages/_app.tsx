import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Header } from "../components/Header";
import { SocialLinks } from "../components/FloatingSocialLinks";
import { Footer } from "../components/Footer";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<NextNProgress options={{ showSpinner: false }} />
			<Header />
			<SocialLinks />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
