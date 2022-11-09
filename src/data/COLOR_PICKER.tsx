export const THEME = [
  {
    value: 'light' as const,
    title: 'Light',
    icon: '/icons/Moon.svg',
    variant: 'fill',
    color: 'blue' as const
  },
  {
    value: 'dark' as const,
    title: 'Dark',
    variant: 'fill',
    icon: '/icons/Light.svg',
    color: 'grey' as const
  }
]
export const ACCENT_COLORS = [
  { value: 'default' as const, text: 'Default' },
  { value: 'magenta' as const, text: 'Magenta' },
  { value: 'blue' as const, text: 'Blue' },
  { value: 'orange' as const, text: 'Orange' },
  { value: 'green' as const, text: 'Green' },
  { value: 'purple' as const, text: 'Purple' },
  { value: 'teal' as const, text: 'Teal' }
  //ToDo: Add black and white theme once better design
  // { value: 'blackWhite', text: 'Black and White' }
]
