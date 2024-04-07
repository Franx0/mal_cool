import { headers } from 'next/headers';
import Script from 'next/script';

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
  const nonce: string = headers().get("x-nonce") || "";

  return (
    <Layout nonce={nonce}>
      {/* Announcements */}
      <Announcements announcements={dictionarySearcher("announcements")} />
      {/* Press release */}
      <PressRelease dictionary={dictionarySearcher("pressRelease")} />
      {/* Posts */}
      {/* <Posts dictionary={dictionarySearcher("posts")} /> */}
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
