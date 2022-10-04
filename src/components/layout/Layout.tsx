import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import styles from '../../styles/Layout.module.css'
import SideBar from './SideBar'

interface Props {
  children?: ReactNode
}

export default function Layout({ children, ...props }: Props) {
  const router = useRouter()

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <SideBar />
        <main className={styles.mainContainer}>{children}</main>
      </div>
    </div >
  )
}
