import { timeline } from 'motion'
import NextImage from 'next/image'
import { useEffect, useState } from 'react'
import { ACCENT_COLORS, THEME } from '../../data/COLOR_PICKER'
import {
  buttonColorCheck,
  changeAccentColor,
  changeTheme,
  checkCurrentAccentColor,
  checkCurrentTheme
} from '../../utils/ThemeColorPicker'
import Button from '../Button/Index'
import Text, { IProps as TextProps } from '../Text/Index'
import s from './styles.module.css'

const footer = `#${s.footer}`

export default function MobileTryItOut() {
  const [open, setOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('light')

  function onOpenClick() {
    setOpen(prev => !prev)
  }

  function onOpenMobileMenu() {
    timeline([[footer, { height: '103vh' }, { duration: 0.2, easing: 'ease-in-out' }]])
  }

  function onMobileMenuClose() {
    timeline([[footer, { height: '0vh' }, { duration: 0.2, easing: 'ease-in-out' }]])
  }

  useEffect(() => {
    if (open) {
      onOpenMobileMenu()
    } else {
      onMobileMenuClose()
    }
  }, [open])

  const lightModeContent = () => {
    return (
      <div style={{ padding: '2em 0' }}>
        <Text variant="text2" color="grey">
          Theme
        </Text>
        <div style={{ display: 'flex', marginTop: '1em' }}>
          {THEME.map(theme => (
            <Button
              onClick={() => {
                setCurrentTheme(theme.value)
                changeTheme(theme.value)
              }}
              key={theme.title}
              variant="fill"
              color={checkCurrentTheme(theme.value) ? 'blue' : 'greyNew'}
              className={
                checkCurrentTheme(theme.value) ? s.selectedThemeColor : s.nonSelectedThemeColor
              }
              iconLeft={<NextImage src={theme.icon} width={24} height={24} alt={''} />}
              textVariant="heading6"
            >
              {theme.title}
            </Button>
          ))}
        </div>
      </div>
    )
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

  const overLayFooterMenu = () => {
    return (
      <footer className={s.mobileOverlay} id={s.footer}>
        {lightModeContent()}
        {accentColorContent()}
      </footer>
    )
  }

  return <div>{overLayFooterMenu()}</div>
}
