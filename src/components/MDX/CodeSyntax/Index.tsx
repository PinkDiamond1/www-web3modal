import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface CodeSyntaxProps {
  codeString: string
}

export default function CodeSyntax({ codeString }: CodeSyntaxProps) {
  return (
    <SyntaxHighlighter
      wrapLongLines={true}
      language="typescript"
      style={docco}
      customStyle={{
        color: 'white',
        background: 'linear-gradient(97.02deg, #272A2A 0%, #141414 100%)',
        padding: '15px 20px 15px 20px',
        borderRadius: '0 0px 20px 20px'
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}
