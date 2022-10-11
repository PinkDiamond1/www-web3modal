import { useEffect, useState } from 'react'
import { ThemeCtrl } from '../../controllers/ThemeCtrl'
import { ACCENT_COLORS, THEME } from '../../data/COLOR_PICKER'
import Button from '../Button/Index'
import Text, { IProps as TextProps } from '../Text/Index'

// ToDo: Make it into a Layout Component
export default function ColorPickerDesktop() {
  // const [lightMode, setLightMode] = useState('false')

  const changeTheme = (theme: string) => {
    ThemeCtrl.setTheme(theme)
  }

  const changeAccentColor = (color: string) => {
    ThemeCtrl.setAccentColor(color)
  }

  const lightModeContent = () => {
    return (
      <div>
        <Text variant="text2" color="white">
          Theme
        </Text>
        <div style={{ display: 'flex', marginTop: '1em' }}>
          {THEME.map(theme => (
            <Button
              onClick={() => changeTheme(theme.value)}
              key={theme.title}
              variant="fill"
              color={theme.color}
              style={{
                marginRight: '1em'
              }}
              textVariant="text4"
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
        <Text variant="text2" color="white">
          Accent Color
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1em' }}>
          {ACCENT_COLORS.map(color => (
            <Button
              onClick={() => changeAccentColor(color.value)}
              key={color.value}
              variant="fill"
              color={buttonColorCheck(color.value) as TextProps['color']}
              textVariant="text4"
              style={{ marginRight: 10, marginTop: 8 }}
            >
              {color.text}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        width: '25%',
        alignSelf: 'stretch',
        flexDirection: 'column',
        flexGrow: 'inherit',
        background: '#171717',
        borderLeft: '1px solid #2D2D2D'
      }}
    >
      <div style={{ padding: '5rem 1rem 5rem 1rem' }}>
        {lightModeContent()}
        {accentColorContent()}
      </div>
    </div>
  )
}
