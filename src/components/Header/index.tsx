import Text from '../Text/Index'
import { animate, timeline } from 'motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import s from './styles.module.css'
import Tag from '../Tag/Index'

const topLine = `#${s.hamburgerTop}`
const botLine = `#${s.hamburgerBottom}`
const header = `#${s.header}`
const menuContent = `.${s.menuContent}`

export default function Header() {
  const [open, setOpen] = useState(false)

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
    timeline([[header, { height: '437px' }, { duration: 0.25, easing: 'ease-in-out' }]])
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
    // timeline([[header, { height: '60px' }, { duration: 0.25, easing: 'ease-in-out' }]])
    // animate(menuContent, { opacity: 0, y: -10 }, { duration: 0.35, easing: 'ease-in-out' })
  }

  useEffect(() => {
    if (open) {
      onOpenMobileMenu()
      console.log('openStatua', open)
    } else {
      console.log('closeStatu', open)
      onMobileMenuClose()
    }
  }, [open])

  return (
    <header id={s.header}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: 10
        }}
      >
        <Link href="/">
          <Text variant="heading5" color="grey">
            Web3Modal
          </Text>
        </Link>
        <div style={{ marginLeft: 16 }}>
          <Tag>2.0.0</Tag>
        </div>
      </div>

      {/* <div id={s.container} className={s.menuContent}>
        <nav>
          <ul>
            {SIDE_BAR_NAVIGATION.map(link => (
              <li key={link.title} className={s.item}>
                <Link href={link.href}>
                  <Button type="button" variant="ghost" color="grey" className={s.desktopLink}>
                    {link.title}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}

      {/* <ul id={s.social} className={s.menuContent}>
        {SOCIAL_ICON.map(link => (
          <li key={link.title}>
            <a href={link.uri} target="_blank" rel="noreferrer">
              <Image
                src={link.image}
                alt={`${link.title} icon`}
                width="24"
                height="24"
                className={s.socialIcon}
              />
            </a>
          </li>
        ))}
      </ul> */}

      <button className={s.hamburger} onClick={onOpenClick}>
        <span id={s.hamburgerTop} />
        <span id={s.hamburgerBottom} />
      </button>
    </header>
  )
}
