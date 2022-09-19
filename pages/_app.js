import { useCreateStore, Provider } from '../lib/store';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  const createStore = useCreateStore(pageProps.initialZustandState);
  return (
    <Provider createStore={createStore}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
