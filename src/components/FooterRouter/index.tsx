import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import useConditionalValue from '../../hooks/useConditionalValue'
import Button from '../Button/Index'
import Text from '../Text/Index'
import s from './styles.module.css'

interface FooterRouteProps {
  previousRoute?: string
  previousRouteName?: string
  nextRoute?: string
  nextRouteName?: string
  padding: string
}

export default function FooterRouter({
  previousRoute,
  previousRouteName,
  nextRoute,
  nextRouteName,
  padding
}: FooterRouteProps) {
  const routeLayout = useConditionalValue(
    [s.containerNextOnly, s.containerPrevOnly, s.container],
    [
      nextRoute !== '' && !previousRoute,
      previousRoute !== '' && !nextRoute,
      previousRoute !== '' && nextRoute !== ''
    ]
  )

  const paddingWidth = useConditionalValue(
    [s.mdPadding, s.lgPadding],
    [padding === 'md', padding === 'lg']
  )

  return (
    <div className={paddingWidth}>
      <div className={routeLayout}>
        {previousRoute && previousRouteName && (
          <Link href={previousRoute}>
            <button className={`${s.button} ${s.buttonLeft}`}>
              <Text variant="text3" color="grey" className={s.noMargin}>
                Previous
              </Text>
              <Text variant="heading6" color="white" capitalized={true}>
                {previousRouteName}
              </Text>
            </button>
          </Link>
        )}

        {nextRoute && nextRouteName && (
          <Link href={nextRoute}>
            <button className={`${s.button} ${s.buttonRight}`}>
              <Text variant="text3" color="grey">
                Next
              </Text>
              <Text variant="heading6" color="white" capitalized={true}>
                {nextRouteName}
              </Text>
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
