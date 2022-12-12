import { useWeb3ModalTheme } from '@web3modal/react'
import NextImage from 'next/image'
import { ThemeCtrl } from '../../controllers/ThemeCtrl'
import { ACCENT_COLORS, THEME } from '../../data/COLOR_PICKER'
import Button from '../Button/Index'
import Text, { IProps as TextProps } from '../Text/Index'
import s from './styles.module.css'

export default function ColorPickerDesktop() {
  const { theme, setTheme } = useWeb3ModalTheme()

  const changeTheme = (theme: typeof ThemeCtrl.state.theme) => {
    setTheme({ themeMode: theme })
  }

  const changeAccentColor = (color: typeof ThemeCtrl.state.accentColor) => {
    setTheme({ themeColor: color })
  }

  const checkCurrentAccentColor = (color: string) => {
    if (color === theme.themeColor) {
      return true
    } else {
      return false
    }
  }

  const checkCurrentBackground = (background: string) => {
    if (background === theme.themeBackground) {
      return true
    } else {
      return false
    }
  }

  const checkCurrentTheme = (selectedTheme: string) => {
    if (selectedTheme === theme.themeMode) {
      return true
    } else {
      return false
    }
  }

  const lightModeContent = () => {
    return (
      <div>
        <Text variant="text2" color="grey">
          Theme
        </Text>
        <div style={{ display: 'flex', marginTop: '1em' }}>
          {THEME.map(theme => (
            <Button
              onClick={() => changeTheme(theme.value)}
              key={theme.title}
              variant="fill"
              color={checkCurrentTheme(theme.value) ? 'blue' : 'greyNew'}
              className={
                checkCurrentTheme(theme.value) ? s.selectedAccentColor : s.nonSelectedAccentColor
              }
              iconLeft={<NextImage src={theme.icon} width={30} height={30} alt={''} />}
              textVariant="heading6"
            >
              {theme.title}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  const buttonColorCheck = (color: string) => {
    if (color === 'default') {
      return 'blue' as const
    }
    if (color === 'blue') {
      return 'blueNew' as const
    }
    return color
  }

  const accentColorContent = () => {
    return (
      <div style={{ padding: '2em 0' }}>
        <Text variant="text2" color="grey">
          Accent Color
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1em' }}>
          {ACCENT_COLORS.map(color => (
            <Button
              onClick={() => changeAccentColor(color.value as any)}
              key={color.value}
              variant="fill"
              color={buttonColorCheck(color.value) as TextProps['color']}
              textTransform="capitalize"
              textVariant="heading6"
              className={
                checkCurrentAccentColor(color.value)
                  ? s.selectedAccentColor
                  : s.nonSelectedAccentColor
              }
            >
              {color.text}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  const backgroundStyleContent = () => {
    return (
      <div style={{ padding: '2em 0' }}>
        <Text variant="text2" color="grey">
          Background Style
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1em' }}>
          {['gradient', 'themeColor'].map(variant => (
            <Button
              // @ts-expect-error
              onClick={() => setTheme({ themeBackground: variant })}
              key={variant}
              variant="fill"
              // @ts-expect-error
              color={buttonColorCheck(variant === 'gradient' ? 'blackWhite' : theme.themeColor)}
              textTransform="capitalize"
              textVariant="heading6"
              className={
                checkCurrentBackground(variant) ? s.selectedAccentColor : s.nonSelectedAccentColor
              }
            >
              {variant === 'gradient' ? 'Gradient' : 'Color'}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={s.pickerContainer}>
      <div style={{ padding: '5rem 1rem 5rem 1rem' }}>
        {lightModeContent()}
        {accentColorContent()}
        {backgroundStyleContent()}
      </div>
    </div>
  )
}
