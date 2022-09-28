import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Layout.module.css";

export default function SideBar() {
  const menuItems = [
    {
      href: "/",
      title: "Introduction",
    },
    {
      href: "/get-started",
      title: "Get started",
    },
    {
      href: "/try-it-out",
      title: "Try It Out",
    },
  ];
  return (
    <aside className={styles.sidebarContainerTwo}>
      <h2>Web3 Modal</h2>
      <nav>
        <h1>Docs</h1>
        <ul>
          {menuItems.map(({ href, title }) => (
            <li key={title}>
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
