import { headers } from 'next/headers'

const About = () => {
  const headerList = headers()
  const pathname = headerList.get('x-current-path')!
  console.log(`pathname: ${pathname ?? 'no pathname info'}`)

  return (
    <div className="text-white">pathname: {pathname ?? 'no pathname info'}</div>
  )
}

export default About
