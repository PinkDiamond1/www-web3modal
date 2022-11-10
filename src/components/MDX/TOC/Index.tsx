import { ReactNode, useState } from 'react'
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import Text from '../../Text/Index'
import s from './styles.module.css'

interface Props {
  children?: ReactNode
  data?: any
}

export default function MDXToCSection({ data }: Props) {
  const [activeId, setActiveId] = useState()
  useIntersectionObserver(setActiveId)

  return (
    <div className={s.navContainer}>
      <nav className={s.container}>
        <div style={{ marginBottom: 20 }}>
          <Text variant="heading6" color="white">
            On This Page
          </Text>
        </div>

        <ul className={s.li}>
          {data.map((data: { title: string; id: string }) => (
            <li key={data.title} className={data.id === activeId ? s.active : s.nonActive}>
              <a
                href={`#${data.id}`}
                onClick={e => {
                  e.preventDefault()
                  document.querySelector(`#${data.id}`)!.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
              >
                <Text variant="text3" color={data.id === activeId ? 'blue' : 'grey'}>
                  {data.title}
                </Text>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
