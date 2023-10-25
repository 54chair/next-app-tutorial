import Link from 'next/link'

export const metadata = {
  title: 'About | こっしー',
}

export default function Page() {
  return (
    <>
      <h1>about</h1>
      <p><Link href="/">ホーム</Link></p>
    </>
  )
}