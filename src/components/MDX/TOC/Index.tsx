import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import Text from '../../Text/Index'
import s from './styles.module.css'

interface Props {
  children?: ReactNode
  data?: any
}

export default function MDXToCSection({ children, data, ...props }: Props) {
  const [activeId, setActiveId] = useState()
  useIntersectionObserver(setActiveId)

  return (
    <nav className={s.container}>
      <div style={{ borderLeft: '1px solid white', paddingLeft: '1em', marginLeft: '-1em' }}>
        <Text variant="heading6" color="white">
          On this Page
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
  )
}
