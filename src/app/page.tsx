import Layout from '@/app/layouts'
import Separator from '@/components/shared/separator'

import Announcements from '@/components/announcements'
import Contact from '@/components/contact'
import PressRelease from '@/components/pressRelease'
import Meetings from '@/components/meetings'
import Location from '@/components/location'
import News from '@/components/news'
import Posts from '@/components/posts'
import dictionarySearcher from '@/utilities/dictionary'

export default function Home() {
  return (
    <Layout>
      {/* Announcements */}
      <Announcements dictionary={dictionarySearcher("announcements")} />
      {/* Posts */}
      <Posts dictionary={dictionarySearcher("posts")} />
      {/* Press release */}
      <PressRelease dictionary={dictionarySearcher("pressRelease")} />
      {/* Location */}
      <Location dictionary={dictionarySearcher("location")} />
      <Separator />
      {/* Meetings */}
      <Meetings dictionary={dictionarySearcher("meetings")} />
      <Separator />
      {/* Contact */}
      <Contact dictionary={dictionarySearcher("contact")} />
      <Separator />
      <News dictionary={dictionarySearcher("news")} />
    </Layout>
  )
}
