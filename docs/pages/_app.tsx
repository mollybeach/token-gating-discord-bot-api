// path: docs/pages/_app.tsx
import React from "react";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createThirdwebClient } from "thirdweb";
import "../globals.css";
import Header from "../components/Header";

// Initialize the QueryClient for React Query
const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        secretKey={process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY}
        authConfig={{
          authUrl: "/api/auth",
          domain: process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
        }}
      >
        <SessionProvider session={session}>
          <Header />
          <Component {...pageProps} client={client} />
        </SessionProvider>
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
