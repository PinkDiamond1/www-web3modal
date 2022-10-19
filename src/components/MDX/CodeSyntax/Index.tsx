import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import s from './styles.module.css'
import Text from '../../Text/Index'
import NextImage from 'next/future/image'

interface CodeSyntaxProps {
  codeString: string
  codeType: string
}

export default function CodeSyntax({ codeString, codeType }: CodeSyntaxProps) {
  const terminalContent = (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <NextImage
        onClick={() => console.log('copied...')}
        src="/icons/Terminal.svg"
        alt={'terminal'}
        width={17}
        height={17}
        style={{ marginRight: 8 }}
      />
      <Text variant="text3" color="grey">
        Terminal
      </Text>
    </div>
  )

  const appContent = (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <NextImage
        onClick={() => console.log('copied...')}
        src="/icons/App.svg"
        alt={'app'}
        width={17}
        height={17}
        style={{ marginRight: 8 }}
      />
      <Text variant="text3" color="grey">
        App
      </Text>
    </div>
  )

  return (
    <div className={s.codeContainer}>
      <div className={s.topCodeSyntax}>
        {codeType === 'terminal' ? terminalContent : appContent}
        <NextImage
          onClick={() => console.log('copied...')}
          src="/icons/ClipBoard.svg"
          alt={'codeSnippet'}
          width={17}
          height={17}
        />
      </div>

      <SyntaxHighlighter
        wrapLongLines={true}
        language="typescript"
        style={dracula}
        customStyle={{
          border: '1px solid #3B4040',
          background: 'linear-gradient(97.02deg, #272A2A 0%, #141414 100%)',
          padding: '15px 20px 15px 20px',
          borderRadius: '0 0px 20px 20px'
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}
