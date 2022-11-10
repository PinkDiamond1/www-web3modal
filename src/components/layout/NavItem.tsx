import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import THINCHEVRON from '../../../public/icons/ThinChevron.svg'
import s from '../../styles/Layout.module.css'
import Text from '../Text/Index'

interface Props {
  nestedNav:
    | {
        href: string
        title: string
      }[]
    | undefined
  href: string
  title: string
  onOpenClick?: () => void
  hooksOpen?: boolean
  setTrackNestedHeaderOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined
  trackNestedHeaderOpen?: boolean
}

export default function NavItem({
  href,
  title,
  nestedNav,
  onOpenClick,
  trackNestedHeaderOpen,
  setTrackNestedHeaderOpen
}: Props) {
  const router = useRouter()
  const [openSideBarMenu, setOpenSideBarMenu] = useState(false)

  const checkIfCurrentRoute = (href: string) => {
    if (href === router.pathname) {
      return true
    } else {
      return false
    }
  }

  const childrenContent = () => {
    if (!nestedNav?.length) {
      return null
    }

    return (
      <>
        <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
          <li
            className={checkIfCurrentRoute(href) ? s.sideBarRoutesSelected : s.sideBarRoute}
            onClick={() => {
              setOpenSideBarMenu(!openSideBarMenu)
              setTrackNestedHeaderOpen?.(!trackNestedHeaderOpen)
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1
              }}
            >
              <Text variant="heading6" color="white" textTransform="capitalize">
                {title}
              </Text>
              <div className={s.safariChevron}>
                <THINCHEVRON className={!openSideBarMenu ? s.openChevron : s.closedChevron} />
              </div>
            </div>
          </li>
        </ul>

        <ul style={{ paddingLeft: '1em', margin: 0 }}>
          {openSideBarMenu &&
            nestedNav.map(({ href, title }) => {
              return (
                <a
                  onClick={() => {
                    onOpenClick?.()
                    console.log('closing...')
                    setTrackNestedHeaderOpen?.(!trackNestedHeaderOpen)
                  }}
                  key={title}
                >
                  <Link href={href}>
                    <li
                      className={
                        checkIfCurrentRoute(href) ? s.sideBarRoutesSelected : s.sideBarRoute
                      }
                    >
                      <Text variant="heading6" color="white" textTransform="capitalize">
                        {title}
                      </Text>
                    </li>
                  </Link>
                </a>
              )
            })}
        </ul>
      </>
    )
  }

  const nonChildren = (
    <Link href={href} legacyBehavior>
      <li
        onClick={onOpenClick}
        className={checkIfCurrentRoute(href) ? s.sideBarRoutesSelected : s.sideBarRoute}
      >
        <Text variant="heading6" color="white" textTransform={'capitalize'}>
          {title}
        </Text>
      </li>
    </Link>
  )

  return (
    <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }} key={title}>
      {nestedNav?.length ? childrenContent() : nonChildren}
    </ul>
  )
}
