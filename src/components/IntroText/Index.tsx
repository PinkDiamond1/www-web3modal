import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Image from "next/image"
import Button from '../Button/Index'
import Text from '../Text/Index'
import s from './styles.module.css'


const buttonContent = (
    <div style={{ display: 'flex', paddingBottom: "4em" }}>
        <Button
            variant="fill"
            color="blue"
            iconRight={
                <Image
                    src="/icons/Chevron.svg"
                    width={6}
                    height={17}
                    alt="arrow right"
                />
            }
            style={{ marginRight: 10 }}
        >
            GET STARTED
        </Button>
        <Button
            variant="fill"
            color="grey"
            iconRight={
                <Image
                    className={s.blackChevron}
                    src="/icons/Chevron.svg"
                    width={6}
                    height={17}
                    alt="arrow right"
                />
            }>
            TRY IT OUT NOW
        </Button>
    </div>
)

const IntroText = () => {
    return (
        <div style={{ padding: '2em' }}>
            <Text variant="heading4" color="white">
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