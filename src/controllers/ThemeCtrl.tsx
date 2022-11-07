import { proxy, subscribe as valtioSub } from 'valtio/vanilla'

// -- initial state ------------------------------------------------ //
export interface ThemeControlState {
  theme: 'dark' | 'light'
  accentColor:
    | 'blackWhite'
    | 'blue'
    | 'default'
    | 'green'
    | 'magenta'
    | 'orange'
    | 'purple'
    | 'teal'
}

export const initialThemeState = {
  theme: 'light' as const,
  accentColor: 'default' as const
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
