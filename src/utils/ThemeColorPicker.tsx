import { ThemeCtrl } from '../controllers/ThemeCtrl'

export const changeTheme = (theme: typeof ThemeCtrl.state.theme) => {
  ThemeCtrl.setTheme(theme)
}

export const changeAccentColor = (color: typeof ThemeCtrl.state.accentColor) => {
  ThemeCtrl.setAccentColor(color)
}

export const checkCurrentAccentColor = (color: string) => {
  if (color === ThemeCtrl.state.accentColor) {
    return true
  } else {
    return false
  }
}

export const checkCurrentTheme = (theme: string) => {
  if (theme === ThemeCtrl.state.theme) {
    return true
  } else {
    return false
  }
}

export const buttonColorCheck = (color: string) => {
  if (color === 'default') {
    return 'blue' as const
  }
  if (color === 'blue') {
    return 'blueNew' as const
  }
  return color
}
