import CustomAnalytics from '@/components/shared/customAnalytics'

import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { FunctionComponent } from "react";
import Header from '@/components/header'


const inter = Inter({ subsets: ['latin'] })
const Layout: Function = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={ inter.className }>
      {<CustomAnalytics />}
      <main className="flex flex-col min-h-screen items-center justify-between p-12 font-mono font-medium">
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Layout
