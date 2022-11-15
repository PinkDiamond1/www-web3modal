import { SIDEBAR } from '../../data/NAVIGATION'
import { SOCIAL_ICON } from '../../data/SOCIAL_ICON'
import s from '../../styles/Layout.module.css'
import SocialIcon from '../SocialIcon/Index'
import Tag from '../Tag/Index'
import Text from '../Text/Index'
import NavItem from './NavItem'

export default function SideBar() {
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
          justifyContent: 'flex-start'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text variant="heading4" color="white">
            Web3Modal
          </Text>
          <Tag>2.0.0</Tag>
        </div>
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
        <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
          {SIDEBAR.map(({ href, title, nestedNav }) => (
            <NavItem key={title} href={href} title={title} nestedNav={nestedNav} />
          ))}
        </ul>

        {socialContent}
      </nav>
    </aside>
  )
}
