import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { store } from "redux/store";
import type { AppProps } from "next/app";
import "styles/global.css";
import "styles/global.css";
import "styles/spinner_ripple.css";
import "@near-wallet-selector/modal-ui/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</Provider>
	);
}
