import Link from 'next/link'
import THINCHEVRON from '../../../public/icons/ThinChevron.svg'
import useConditionalValue from '../../hooks/useConditionalValue'
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: 4
                }}
              >
                <THINCHEVRON className={s.chevronImagePrevious} />
                <Text variant="text3" color="grey">
                  PREVIOUS
                </Text>
              </div>
              <Text variant="heading6" color="white">
                {previousRouteName}
              </Text>
            </button>
          </Link>
        )}

        {nextRoute && nextRouteName && (
          <Link href={nextRoute}>
            <button className={`${s.button} ${s.buttonRight}`}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: 4
                }}
              >
                <Text variant="text3" color="grey">
                  NEXT
                </Text>
                <THINCHEVRON className={s.chevronImage} />
              </div>

              <Text variant="heading6" color="white">
                {nextRouteName}
              </Text>
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
