import styles from './page.module.css';
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <h1 className={styles.siteTitle}>こっしー</h1>
      <Image src="/next.svg"
        width={150}
        height={60}
        alt="Next.js"
      />
      <p><Link href="about">about</Link></p>
    </>
  )
}