import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/TryItOut.module.css";
import { ConnectButton, AccountButton, useAccount } from "@web3modal/react";

const TryItOut: NextPage = () => {
  const { connected } = useAccount();
  const checkeredSVG = (
    <div>
      <foreignObject>
        <Image
          src="/CheckeredRectangle.svg"
          alt="TryBackground"
          width={720}
          height={564}
          style={{ borderRadius: 44 }}
        />
      </foreignObject>
      <div style={{ position: "relative", top: -300, left: 275 }}>
        {!connected ? <ConnectButton /> : <AccountButton />}
      </div>
    </div>
  );

  const headerContent = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Try It Out</h2>
      <p>Copy Code</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div style={{ flex: 1, width: "60%" }}>{headerContent}</div>
        {checkeredSVG}
      </main>
    </div>
  );
};

export default TryItOut;
