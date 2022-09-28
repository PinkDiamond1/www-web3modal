import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Layout.module.css";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <SideBar />
        <main className={styles.mainContainer}>{children}</main>
      </div>
    </div>
  );
}
