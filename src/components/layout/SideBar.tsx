import Link from 'next/link'
import { useRouter } from 'next/router'
import s from '../../styles/Layout.module.css'
import Text from '../Text/Index'
import Tag from '../Tag/Index'

export default function SideBar() {
  const router = useRouter()

  const menuItems = [
    {
      href: '/',
      title: 'INTRODUCTION'
    },
    {
      href: '/get-started',
      title: 'GET STARTED'
    },
    {
      href: '/try-it-out',
      title: 'TRY IT OUT'
    }
    // {
    //   href: '/guide',
    //   title: 'GUIDE'
    // }
  ]

  const checkIfCurrentRoute = (href: string) => {
    if (href === router.pathname) {
      return true
    } else {
      return false
    }
  }

  return (
    <aside className={s.sidebarContainerTwo}>
      <div
        style={{
          border: '1px solid redf',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 250 // ToDo: Push up higher
        }}
      >
        <Text variant="heading4" color="white">
          Web3Modal
        </Text>
        <Tag> 2.0.0</Tag>
      </div>
      <nav>
        <h4 style={{ padding: '0.25em 0 0em' }}>Docs</h4>
        <ul style={{ padding: 0, margin: 0 }}>
          {menuItems.map(({ href, title }) => (
            <li
              key={title}
              className={checkIfCurrentRoute(href) ? s.sideBarRoutesSelected : s.sideBarRoute}
            >
              <Link href={href} style={{}}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
