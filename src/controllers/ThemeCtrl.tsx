import { proxy, subscribe as valtioSub } from 'valtio/vanilla'

// -- initial state ------------------------------------------------ //
export interface ThemeControlState {
  theme: string
  accentColor: string
}

export const initialThemeState = {
  theme: 'dark',
  accentColor: 'default'
}

const countState = proxy({ count: 0 })

const state = proxy<ThemeControlState>(initialThemeState)

// -- controller --------------------------------------------------- //
export const ThemeCtrl = {
  state,
  countState,
  subscribe(callback: (newState: ThemeControlState) => void) {
    return valtioSub(state, () => callback(state))
  },

  setTheme(theme: ThemeControlState['theme']) {
    state.theme = theme
  },

  setAccentColor(accentColor: ThemeControlState['accentColor']) {
    state.accentColor = accentColor
  },

  resetTheme() {
    Object.assign(state, initialThemeState)
  }
}
