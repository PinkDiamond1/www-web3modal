import Text from '../Text/Index'
import { animate, timeline } from 'motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import s from './styles.module.css'
import Tag from '../Tag/Index'
import { SIDE_BAR_NAVIGATION } from '../../data/NAVIGATION'
import { SOCIAL_ICON } from '../../data/SOCIAL_ICON'
import NextImage from 'next/future/image'
import NavItem from '../layout/NavItem'

const topLine = `#${s.hamburgerTop}`
const botLine = `#${s.hamburgerBottom}`
const footer = `#${s.footer}`
const menuContent = `.${s.menuContent}`

export default function MobileTryItOut() {
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
    timeline([[footer, { height: '100vh' }, { duration: 0.25, easing: 'ease-in-out' }]])
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
    timeline([[footer, { height: '55px' }, { duration: 0.25, easing: 'ease-in-out' }]])
    animate(menuContent, { opacity: 0, y: -10 }, { duration: 0.35, easing: 'ease-in-out' })
  }

  // useEffect(() => {
  //   if (open) {
  //     onOpenMobileMenu()
  //   } else {
  //     onMobileMenuClose()
  //   }
  // }, [open])

  const headerContent = (
    <div className={s.headerContent}>
      <Link href="/">
        <div>
          <Text variant="heading5" color="grey">
            Mobile Picker
          </Text>
        </div>
      </Link>
    </div>
  )

  const routeContent = (
    <div className={s.menuContent}>
      <nav>
        {/* <ul>
          <div className={s.mobileMenuHeaderContent}>
            <Text variant="text3" color="grey">
              Docs
            </Text>
          </div>

          {SIDE_BAR_NAVIGATION.map(link => (
            <li key={link.title} className={s.item}>
              <Link href={link.href} key={link.title}>
                <>
                  <NavItem
                    href={link.href}
                    title={link.title}
                    nestedNav={link.nestedNav}
                    onOpenClick={onOpenClick}
                  />
                </>
              </Link>
            </li>
          ))}
        </ul> */}
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
              <NextImage
                src={link.image}
                alt={`${link.title} icon`}
                width="24"
                height="24"
                className={s.socialIcon}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div>
      {/* {headerContent}
      {routeContent}
      {socialContent} */}

      <div className={s.mobileColorPickerRow}>
        <button onClick={() => console.log('Color Picker Clicked')} className={s.mobileColorPicker}>
          <NextImage
            priority={true}
            alt="lightIcon"
            src={'../icons/LightIcon.svg'}
            height={32}
            width={32}
          />
        </button>
      </div>
    </div>
  )
}
