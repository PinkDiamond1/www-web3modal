export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return Boolean(
      window.matchMedia('(pointer:coarse)').matches ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)
    )
  }
}

export const mobileImageCheck = () => {
  if (window.innerWidth < 500 && window.innerWidth > 400) {
    return 430
  }
}
