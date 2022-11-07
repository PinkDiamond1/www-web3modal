import { Web3Button } from '@web3modal/react'
import { ThemeCtrl } from '../../controllers/ThemeCtrl'
import { ACCENT_COLORS, THEME } from '../../data/COLOR_PICKER'
import Button from '../Button/Index'
import { IProps as TextProps } from '../Text/Index'
import s from './styles.module.css'

interface Props {
  currentAccentColor?: string
  setCurrentAccentColor: React.Dispatch<React.SetStateAction<string>>
}

export default function ThemePicker({ currentAccentColor, setCurrentAccentColor }: Props) {
  const changeTheme = (theme: string) => {
    ThemeCtrl.setTheme(theme)
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
        display: 'flex',
        flex: 1
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
                accentButton
              ></Button>
            ))}
          </div>
          <Web3Button />

          <div
            style={{ width: 1, height: 24, background: '#3B4040', marginLeft: 16, marginRight: 16 }}
          />

          <div style={{ display: 'flex' }}>
            {ACCENT_COLORS.map(color => (
              <Button
                key={color.value}
                variant="fill"
                color={buttonColorCheck(color.value) as TextProps['color']}
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
