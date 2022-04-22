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
        Hi there! My name is Alan and I happen to have a wonderful niece
        who&apos;s asked me to help her become a computer genius. Drawing on my
        thirty years of experience in the world of computers, I&apos;m building
        this site to do just that. But, we&apos;re not selfish. You&apos;re
        welcome to join us if you&apos;d like to come along for the ride and
        become a computer genius too.
      </p>
      <p>
        This site is mostely videos. So, check this one out to learn more about
        what&apos;s going on here and see if you&apos;re interested in joining
        in.
      </p>
      <p>TODO: Make the video that goes here. Key points:</p>
      <ul>
        <li>
          The site is free and always will be. (Figure out how detailed to get
          about open source)
        </li>
        <li>There are no ads on the site.</li>
        <li>
          The computer industry has been great to me and this is an effort to
          pay it forward. I&apos;m able to pay for the site myself so
          that&apos;s what I&apos;m doing
        </li>
        <li>
          This isn&apos;t a class or a bootcamp or a workshop. It&apos;s more
          like a garage where your excentric uncle is showing you how to use
          power tools
        </li>
        <li>
          Scratch is for kids in the same way a Pixar movie is. Which is to say,
          it&apos;s not just for kids at all. It&apos;s setup perfectly to show
          folks anywhere from seven to seventy how to program.{' '}
        </li>
        <li>See Grimoire notes for more details</li>
        <li>
          As the certified expert, I hearby give you permission to play around
          with every single piece of Scratch and break it all with the guarantee
          that the safety bumpers it has will prevent you from doing anything to
          break your computer or anything else other than whatever the specific
          things is that you&apos;re workign on and we can always get that
          working again with a little effort.
        </li>
      </ul>
    </>
  )
}
