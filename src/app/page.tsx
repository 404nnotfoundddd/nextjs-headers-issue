import { headers } from 'next/headers'

const Home = () => {
  const headerList = headers()
  const pathname = headerList.get('x-current-path')!
  console.log(`pathname: ${pathname ?? 'no pathname info'}`)

  return (
    <div className="text-white">
      Hpome page athname: {pathname ?? 'no pathname info'}
    </div>
  )
}

export default Home
