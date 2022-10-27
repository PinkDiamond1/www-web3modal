import Text, { IProps as TextProps } from '../Text/Index'
import { timeline } from 'motion'
import { useEffect, useState } from 'react'
import s from './styles.module.css'
import NextImage from 'next/future/image'
import { ACCENT_COLORS, THEME } from '../../data/COLOR_PICKER'
import Button from '../Button/Index'
import {
  buttonColorCheck,
  changeAccentColor,
  changeTheme,
  checkCurrentAccentColor,
  checkCurrentTheme
} from '../../utils/ThemeColorPicker'
import { ThemeCtrl } from '../../controllers/ThemeCtrl'

const footer = `#${s.footer}`

export default function MobileTryItOut() {
  const [open, setOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('light')

  function onOpenClick() {
    setOpen(prev => !prev)
  }

  function onOpenMobileMenu() {
    // document.getElementsByTagName('html')[0].classList.add('noScroll')
    timeline([[footer, { height: '100vh' }, { duration: 0.2, easing: 'ease-in-out' }]])
  }

  function onMobileMenuClose() {
    // document.getElementsByTagName('html')[0].classList.remove('noScroll')
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
      <div>
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
              onClick={() => changeAccentColor(color.value)}
              key={color.value}
              variant="fill"
              color={buttonColorCheck(color.value) as TextProps['color']}
              textTransform="capitalize"
              textVariant="heading6"
              // accentButton={true}
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

  const mobileIcon = () => {
    return (
      <div className={s.mobileColorPickerRow}>
        <Button
          onClick={onOpenClick}
          className={s.mobileColorPicker}
          variant={'fill'}
          color={buttonColorCheck(ThemeCtrl.state.accentColor) as TextProps['color']}
        >
          <NextImage
            priority={true}
            alt="mobilePickerIcon"
            src={currentTheme === 'light' ? '../icons/Moon.svg' : '../icons/Light.svg'}
            height={32}
            width={32}
          />
        </Button>
      </div>
    )
  }

  return (
    <div>
      {mobileIcon()}
      {overLayFooterMenu()}
    </div>
  )
}