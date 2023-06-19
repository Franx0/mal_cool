import Separator from '@/components/shared/separator'
import dictionary from '@/languages/es'

import Header from '@/components/header'
import Announcements from '@/components/announcements'
import Contact from '@/components/contact'
import PressRelease from '@/components/pressRelease'
import Meetings from '@/components/meetings'
import Location from '@/components/location'
import News from '@/components/news'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-12 font-mono font-medium">
      {/* Header */}
      <Header dictionary={dictionary.header} />
      {/* Announcements */}
      <Announcements dictionary={dictionary.announcements}/>
      {/* Press release */}
      <PressRelease dictionary={dictionary.pressRelease}/>
      {/* Location */}
      <Location dictionary={dictionary.location}/>
      <Separator />
      {/* Meetings */}
      <Meetings dictionary={dictionary.meetings}/>
      <Separator />
      {/* Contact */}
      <Contact dictionary={dictionary.contact}/>
      <Separator />
      <News dictionary={dictionary.news}/>
    </main>
  )
}
