import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { ConnectButton } from "@web3modal/react";

const TryItOut: NextPage = () => {
  const checkeredSVG = (
    <Image
      src="/CheckeredRectangle.svg"
      alt="TryBackground"
      width={500}
      height={500}
    />
  );

  const headerContent = <h3>TryItOut</h3>;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {headerContent}
        {checkeredSVG}
        <ConnectButton />
      </main>
    </div>
  );
};

export default TryItOut;
