import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { NativeBaseProvider } from "native-base";

import Init from "./src/Init";

const queryClient = new QueryClient();

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <Init />
        </NativeBaseProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
