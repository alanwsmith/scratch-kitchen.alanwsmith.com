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
        description="Learn to program using Scratch"
        image="https://scratch-lab.alanwsmith.com/og-image/main.png"
        title="Scratch Lab"
        type="website"
        url="https://scratch-lab.alanwsmith.com"
      />
      <h1>Welcome To Scratch Lab</h1>
      <p>
        Hi there! I&apos;m Uncle Alan and I&apos;m teaching my niece to become a
        computer genius. You&apos;re welcome to tag along if you&apos;d like to
        become one too.
      </p>
      <p>
        This site is mostely videos. So, check this one out to learn more about
        what&apos;s going on here and see if you&apos;re interested in joining
        in.
      </p>
      <iframe
        src="https://player.vimeo.com/video/702250919?h=81ba484d20"
        width="640"
        height="416"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h3>
        Note: this page is a draft prototype that&apos; under construction. The
        second video is in production and on the way
      </h3>

      <h3>Draft Notes</h3>
      <ul>
        <li>See Grimoire notes for more details</li>
      </ul>

      <h3>Ideas, Drafts, Notes, etc...</h3>
      <ul>
        <li>
          Split things into three types: Ingredients, Concoctions, and Tidbits
        </li>
        <li>
          Ingredients and Concoctions probalby will break down into basic and
          advanced?
        </li>
        <li>
          Ingredients are single, refined examples about one specific thing
        </li>
        <li>Concoctions are combinations of ingredients to make things</li>
        <li>
          Tidbits are little pieces of information about programming and ways to
          think about it
        </li>
      </ul>
    </>
  )
}
