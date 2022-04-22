import CodeBlock from '../components/CodeBlock'
import HeadTag from '../components/HeadTag'

export default function HomePage() {
  const exampleCode = `
const some_var = 'a value'
const some_object = { key: 'value' }
`

  return (
    <>
      <HeadTag
        description=""
        image="https://scratch-lab.alanwsmith.com/og-image/main.png"
        title="Scratch Lab Launcpad "
        type="article"
        url="https://scratch-lab.alanwsmith.com/launchpad"
      />
      <h1>Welcome To Scratch Lab</h1>
      <p>
        Link: <a href="https://scratch.mit.edu">scratch.mit.edu</a>
      </p>
    </>
  )
}
