import Link from 'next/link'
import { useRouter } from 'next/router'
import { title } from 'process'
import { ReactNode, useState } from 'react'
import s from '../../styles/Layout.module.css'
import Header from '../Header'
import SideBar from './SideBar'
import Text from '../Text/Index'
import THINCHEVRON from '../../../public/icons/ThinChevron.svg'

interface Props {
  nestedNav:
    | {
        href: string
        title: string
      }[]
    | undefined
  href: string
  title: string
}

export default function NavItem({ href, title, nestedNav, ...props }: Props) {
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
        <li
          className={checkIfCurrentRoute(href) ? s.sideBarRoutesSelected : s.sideBarRoute}
          onClick={() => setOpenSideBarMenu(!openSideBarMenu)}
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
        <ul style={{ paddingLeft: '1em', margin: 0 }}>
          {openSideBarMenu &&
            nestedNav.map(({ href, title }) => (
              <Link href={href} key={title}>
                <li
                  className={checkIfCurrentRoute(href) ? s.sideBarRoutesSelected : s.sideBarRoute}
                >
                  <Text variant="heading6" color="white" textTransform="capitalize">
                    {title}
                  </Text>
                </li>
              </Link>
            ))}
        </ul>
      </>
    )
  }

  const nonChildren = (
    <Link href={href}>
      <li className={checkIfCurrentRoute(href) ? s.sideBarRoutesSelected : s.sideBarRoute}>
        <Text variant="heading6" color="white" textTransform={'capitalize'}>
          {title}
        </Text>
      </li>
    </Link>
  )

  return <div key={title}>{nestedNav ? childrenContent() : nonChildren}</div>
}
