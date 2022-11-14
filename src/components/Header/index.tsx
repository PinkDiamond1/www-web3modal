import { animate, timeline } from 'motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SIDEBAR } from '../../data/NAVIGATION'
import { SOCIAL_ICON } from '../../data/SOCIAL_ICON'
import NavItem from '../layout/NavItem'
import Tag from '../Tag/Index'
import Text from '../Text/Index'
import s from './styles.module.css'

const topLine = `#${s.hamburgerTop}`
const botLine = `#${s.hamburgerBottom}`
const header = `#${s.header}`
const menuContent = `.${s.menuContent}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [trackNestedHeaderOpen, setTrackNestedHeaderOpen] = useState(false)

  function onOpenClick() {
    setOpen(prev => !prev)
  }

  function onOpenMobileMenu() {
    document.getElementsByTagName('html')[0].classList.add('noScroll')
    timeline(
      [
        [topLine, { y: 4.25 }],
        [topLine, { rotate: 45 }]
      ],
      { duration: 0.25, defaultOptions: { easing: 'ease-in-out' } }
    )
    timeline(
      [
        [botLine, { y: -4.25 }],
        [botLine, { rotate: -45 }]
      ],
      { duration: 0.25, defaultOptions: { easing: 'ease-in-out' } }
    )
    timeline([[header, { height: '100vh' }, { duration: 0.25, easing: 'ease-in-out' }]])
    animate(menuContent, { opacity: 1, y: 0 }, { duration: 0.35, easing: 'ease-in-out' })
  }

  function onMobileMenuClose() {
    document.getElementsByTagName('html')[0].classList.remove('noScroll')
    timeline(
      [
        [topLine, { rotate: 0 }],
        [topLine, { y: 0 }]
      ],
      { duration: 0.25, defaultOptions: { easing: 'ease-in-out' } }
    )
    timeline(
      [
        [botLine, { rotate: 0 }],
        [botLine, { y: 0 }]
      ],
      { duration: 0.25, defaultOptions: { easing: 'ease-in-out' } }
    )
    timeline([[header, { height: '55px' }, { duration: 0.2, easing: 'ease-in-out' }]])
    animate(menuContent, { opacity: 0, y: -10 }, { duration: 0.35, easing: 'ease-in-out' })
  }

  useEffect(() => {
    if (open) {
      onOpenMobileMenu()
    } else {
      onMobileMenuClose()
    }
  }, [open, trackNestedHeaderOpen])

  const headerContent = (
    <div className={s.headerContent}>
      <Link href="/">
        <Text variant="heading5" color="grey">
          Web3Modal
        </Text>
      </Link>
      <div style={{ marginLeft: 16 }}>
        <Tag>2.0.0</Tag>
      </div>
    </div>
  )

  const routeContent = (
    <div className={s.menuContent}>
      <nav>
        <ul>
          {SIDEBAR.map(link => (
            <li key={link.title} className={s.item}>
              <NavItem
                href={link.href}
                title={link.title}
                nestedNav={link.nestedNav}
                onOpenClick={onOpenClick}
                setTrackNestedHeaderOpen={setTrackNestedHeaderOpen}
                trackNestedHeaderOpen={trackNestedHeaderOpen}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )

  const socialContent = (
    <div>
      <ul id={s.social} className={s.menuContent}>
        <div className={s.mobileMenuHeaderContent}>
          <Text variant="text3" color="grey">
            Community
          </Text>
        </div>
        {SOCIAL_ICON.map(link => (
          <li key={link.title}>
            <a href={link.uri} target="_blank" rel="noreferrer" className={s.socialIconContainer}>
              <Image
                src={link.image}
                alt={`${link.title} icon`}
                width="24"
                height="24"
                className={link.title === 'Github' ? s.socialIconWhiteTemp : s.socialIcon}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <header id={s.header} className={trackNestedHeaderOpen ? s.headerActive : s.header}>
      {headerContent}
      {routeContent}
      {socialContent}

      <button className={s.hamburger} onClick={onOpenClick}>
        <span id={s.hamburgerTop} />
        <span id={s.hamburgerBottom} />
      </button>
    </header>
  )
}
