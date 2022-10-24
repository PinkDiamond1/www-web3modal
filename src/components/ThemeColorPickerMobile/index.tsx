import { useState } from 'react'
import { ThemeCtrl } from '../../controllers/ThemeCtrl'
import { ACCENT_COLORS, THEME } from '../../data/COLOR_PICKER'
import Button from '../Button/Index'
import { ConfigCtrl } from '@web3modal/core'
import { IProps as TextProps } from '../Text/Index'
import s from './styles.module.css'
import { ConfigOptions, ConnectButton } from '@web3modal/react'
import { chains, providers } from '@web3modal/ethereum'

interface Props {
  currentAccentColor?: string
  setCurrentAccentColor: React.Dispatch<React.SetStateAction<string>>
}

// ToDo: Make it into a Layout Component
export default function ThemePicker({ currentAccentColor, setCurrentAccentColor }: Props) {
  const [theme, setTheme] = useState('light')
  // const [accentColor, setAccentColor] = useState('default')

  const changeTheme = (theme: string) => {
    // setCurrentAccentColor(theme)
    ThemeCtrl.setTheme(theme)
  }

  const modalConfig: ConfigOptions = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    theme: ThemeCtrl.state.theme as ConfigOptions['theme'],
    accentColor: currentAccentColor as ConfigOptions['accentColor'],
    ethereum: {
      appName: 'web3Modal',
      autoConnect: true,
      chains: [chains.mainnet],
      providers: [
        providers.walletConnectProvider({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID! })
      ]
    }
  }

  // console.log(modalConfig)

  const changeAccentColor = (color: string) => {
    // setCurrentAccentColor(theme)
    // setCurrentAccentColor(color)
    ThemeCtrl.setAccentColor(color)

    ConfigCtrl.setConfig({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
      theme: ThemeCtrl.state.theme as ConfigOptions['theme'],
      accentColor: currentAccentColor as ConfigOptions['accentColor'],
      ethereum: {
        appName: 'web3Modal',
        autoConnect: true,
        chains: [chains.mainnet],
        providers: [
          providers.walletConnectProvider({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID! })
        ]
      }
    })
    // console.log('ClientCtrl 1', ConfigCtrl.state.accentColor)
    // Client.setAccentColor(color)
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
        // position: 'relative',
        // top: '-700px',
        // left: '100px',
        display: 'flex',
        flex: 1
        // flexDirection: 'row',
        // flexGrow: 'inherit'
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
          <ConnectButton />

          <div
            style={{ width: 1, height: 24, background: '#3B4040', marginLeft: 16, marginRight: 16 }}
          />

          <div style={{ display: 'flex' }}>
            {ACCENT_COLORS.map(color => (
              <Button
                onClick={() => {
                  // setAccentColor(color.value)
                  changeAccentColor(color.value)
                }}
                key={color.value}
                variant="fill"
                color={buttonColorCheck(color.value) as TextProps['color']}
                // textVariant="text4"
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
