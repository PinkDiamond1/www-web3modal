import Link from 'next/link'
import { useRouter } from 'next/router'
import s from '../../styles/Layout.module.css'
import Text from '../Text/Index'
import Tag from '../Tag/Index'
import SocialIcon from '../SocialIcon/Index'
import { SOCIAL_ICON } from '../../data/SOCIAL_ICON'

export default function SideBar() {
  const router = useRouter()

  const menuItems = [
    {
      href: '/',
      title: 'INTRODUCTION'
    },
    {
      href: '/try-it-out',
      title: 'TRY IT OUT'
    },
    {
      href: '/get-started',
      title: 'GET STARTED'
    },

    // ToDo: Add in Nesting + Add in React. 
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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 250 // ToDo: Push up higher
        }}
      >
        <Text variant="heading4" color="grey">
          Web3Modal
        </Text>
        <Tag> 2.0.0</Tag>
      </div>
      <nav style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", width: "10" }}>
        <div>
          <Text variant="heading6" color="grey" className={s.docsHeading}>Docs</Text>
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
        </div>

        <div style={{ paddingBottom: "1.5em" }}>
          <Text variant="heading6" color="grey" className={s.docsHeading}>Communiy</Text>
          <div style={{ display: 'flex', justifyContent: "flex-start", padding: 8 }}>
            {SOCIAL_ICON.map((data) => (
              <SocialIcon image={data.image} uri={data.uri} title={data.title} />
            ))}
          </div>
        </div>

      </nav>
    </aside>
  )
}
