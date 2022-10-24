import Button from '../Button/Index'
import Text from '../Text/Index'
import s from './styles.module.css'
import Link from 'next/link'
import CHEVRON from '../../../public/icons/Chevron.svg'

const buttonContent = (
  <div className={s.buttonContent}>
    <Link href="get-started">
      <div>
        <Button
          variant="fill"
          color="blue"
          iconRight={<CHEVRON width={7} height={12} className={s.whiteChevron} />}
          style={{ marginRight: 10 }}
        >
          GET STARTED
        </Button>
      </div>
    </Link>

    <Link href="try-it-out">
      <div>
        <Button
          variant="fill"
          color="grey"
          iconRight={<CHEVRON width={7} height={12} className={s.blackChevron} />}
        >
          TRY IT OUT NOW
        </Button>
      </div>
    </Link>
  </div>
)

const IntroText = () => {
  return (
    <div className={s.introTextContainer}>
      <Text variant={'heading4'} color="white">
        Web3Modal is an elegantly simple yet powerful library that helps you manage your multi-chain
        wallet connection flows, all in one place.
        <Text as="span" color="grey" variant="heading4">
          {''} Designed with both developers and end users in mind, it is easy to integrate and
          customize, bringing to life a sleek and unique experience.
        </Text>
      </Text>
      {buttonContent}
    </div>
  )
}

export default IntroText
