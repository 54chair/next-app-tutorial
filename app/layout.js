import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'こっしー',
  description: 'こっしーの公式サイトです',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className={'container'}>
          {children}
        </div>
      </body>
    </html>
  )
}
