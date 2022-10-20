import { ReactNode } from 'react'
import s from '../../styles/Layout.module.css'
import Header from '../Header'
import SideBar from './SideBar'

interface Props {
  children?: ReactNode
}

export default function Layout({ children, ...props }: Props) {
  return (
    <div style={{ width: '100vw' }}>
      <Header />
      <div className={s.sidebar}>
        <div className={s.sidebarContainer}>
          <SideBar />
          <main className={s.mainContainer}>{children}</main>
        </div>
      </div>
    </div>
  )
}
