import Link from 'next/link'
import { useRouter } from 'next/router'
import s from '../../styles/Layout.module.css'
import Text from '../Text/Index'
import Tag from '../Tag/Index'
import SocialIcon from '../SocialIcon/Index'
import { SOCIAL_ICON } from '../../data/SOCIAL_ICON'
import { SIDE_BAR_NAVIGATION } from '../../data/NAVIGATION'
import NavItem from './NavItem'

export default function SideBar() {
  const router = useRouter()

  const checkIfCurrentRoute = (href: string) => {
    if (href === router.pathname) {
      return true
    } else {
      return false
    }
  }

  const socialContent = (
    <div style={{ paddingBottom: '1.5em' }}>
      <Text variant="heading6" color="grey" className={s.docsHeading}>
        Community
      </Text>
      <div style={{ display: 'flex', justifyContent: 'flex-start', padding: 8, fill: 'white' }}>
        {SOCIAL_ICON.map(data => (
          <div key={data.title}>
            <SocialIcon image={data.image} uri={data.uri} title={data.title} />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <aside className={s.sidebarContainerTwo}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text variant="heading4" color="white">
          Web3Modal
        </Text>
        <Tag>2.0.0</Tag>
      </div>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          marginTop: '2.5em'
        }}
      >
        <div className={s.docsHeading}>
          <Text variant="text3" color="grey">
            Docs
          </Text>
          <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
            {SIDE_BAR_NAVIGATION.map(({ href, title, nestedNav }) => (
              <NavItem key={title} href={href} title={title} nestedNav={nestedNav} />
            ))}
          </ul>
        </div>
        {socialContent}
      </nav>
    </aside>
  )
}
