import './globals.css'
import { Lexend_Deca } from 'next/font/google'
import Image from "next/image"
import miku_Image from './024.jpg'

const fontSans = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-sans'
})


export const metadata = {
  title: '前端动画学习',
  description: '前端动画学习',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh'>
      <body className={`${fontSans.variable} antialiased font-sans`}>
        <div className="fixed inset-0 z-0">
          <Image
            src={miku_Image}
            alt=''
            fill
            priority
            className='object-cover object-center blur-sm scale-110'
          />
        </div>
        <main className='relative z-10'>{children}</main>
      </body>
    </html>
  )
}
