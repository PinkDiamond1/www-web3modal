import { useEffect, useState } from 'react'
import { ThemeCtrl } from '../../controllers/ThemeCtrl'
import { ACCENT_COLORS, THEME } from '../../data/COLOR_PICKER'
import Button from '../Button/Index'
import Text, { IProps as TextProps } from '../Text/Index'
import s from './styles.module.css'

// ToDo: Make it into a Layout Component
export default function ThemePicker({
  currentAccentColor,
  setCurrentAccentColor,
  currentTheme,
  setCurrentTheme
}) {
  const changeTheme = (theme: string) => {
    setCurrentAccentColor(theme)
    ThemeCtrl.setTheme(theme)
  }

  const changeAccentColor = (color: string) => {
    setCurrentAccentColor(color)
    ThemeCtrl.setAccentColor(color)
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

  return (
    <div
      style={{
        position: 'relative',
        top: '-700px',
        left: '200px',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexGrow: 'inherit'
      }}
    >
      <div style={{ padding: '1em' }}>
        <div className={s.themePickerContainer}>
          <div
            style={{
              display: 'flex',
              border: '2px solid rgba(241, 243, 243, 1)',
              borderRadius: 32
            }}
          >
            {THEME.map(theme => (
              <Button
                onClick={() => changeTheme(theme.value)}
                key={theme.title}
                variant="fill"
                color={theme.color}
                accentButton={true}
                textVariant="text4"
              >
                I
              </Button>
            ))}
          </div>

          <div
            style={{ width: 1, height: 24, background: '#3B4040', marginLeft: 16, marginRight: 16 }}
          />

          <div style={{ display: 'flex' }}>
            {ACCENT_COLORS.map(color => (
              <Button
                onClick={() => changeAccentColor(color.value)}
                key={color.value}
                variant="fill"
                color={buttonColorCheck(color.value) as TextProps['color']}
                textVariant="text4"
                accentButton={true}
              />
            ))}
          </div>
          <div style={{ width: 1, height: 24, background: '#3B4040', marginRight: 16 }} />
        </div>
      </div>
    </div>
  )
}
