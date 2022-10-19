import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import s from './styles.module.css'
import Text from '../../Text/Index'
import NextImage from 'next/future/image'

interface CodeSyntaxProps {
  codeString: string
  codeType: string
}

export default function InlineCode({ codeString, codeType }: CodeSyntaxProps) {
  return (
    <div className={s.inlineContainer}>
      {/* <div className={s.topCodeSyntax}>{codeString}</div> */}
      <Text variant="text3" color="cyan">
        test
      </Text>
    </div>
  )
}
