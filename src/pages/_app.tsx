import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ConfigOptions } from "@web3modal/react";
import { Web3ModalProvider } from "@web3modal/react";
import Layout from "../components/layout/Layout";

const config: ConfigOptions = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

// const Layout: React.FC = () => {
//   return (
//     <>
//       <div className="sidebar-container">
//         <header>Next.js sidebar menu</header>
//       </div>
//       <div>{props.children}</div>
//     </>
//   );
// };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ModalProvider config={config}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ModalProvider>
  );
}

export default MyApp;
