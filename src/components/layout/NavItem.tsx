import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import s from '../../styles/Layout.module.css'
import Text from '../Text/Index'
import THINCHEVRON from '../../../public/icons/ThinChevron.svg'
import { isMobile } from '../../utils/Index'
import { animate } from 'motion'

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

// const closedChevron = `.${s.closedChevron}`

export default function NavItem({
  href,
  title,
  nestedNav,
  onOpenClick,
  hooksOpen,
  trackNestedHeaderOpen,
  setTrackNestedHeaderOpen,
  ...props
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
    if (!nestedNav) {
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
              <THINCHEVRON className={!openSideBarMenu ? s.openChevron : s.closedChevron} />
            </div>
          </li>
        </ul>

        <ul style={{ paddingLeft: '1em', margin: 0 }}>
          {openSideBarMenu &&
            nestedNav.map(({ href, title }) => (
              <div
                onClick={() => {
                  onOpenClick
                }}
                key={title}
              >
                <Link href={href}>
                  <a>
                    <li
                      className={
                        checkIfCurrentRoute(href) ? s.sideBarRoutesSelected : s.sideBarRoute
                      }
                    >
                      <Text variant="heading6" color="white" textTransform="capitalize">
                        {title}
                      </Text>
                    </li>
                  </a>
                </Link>
              </div>
            ))}
        </ul>
      </>
    )
  }

  const nonChildren = (
    <Link href={href}>
      <a onClick={onOpenClick}>
        <li className={checkIfCurrentRoute(href) ? s.sideBarRoutesSelected : s.sideBarRoute}>
          <Text variant="heading6" color="white" textTransform={'capitalize'}>
            {title}
          </Text>
        </li>
      </a>
    </Link>
  )

  return (
    <ul style={{ padding: 0, margin: 0, listStyleType: 'none' }} key={title}>
      {nestedNav?.length ? childrenContent() : nonChildren}
    </ul>
  )
}
