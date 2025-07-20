import { headers } from 'next/headers';
import Script from 'next/script';

import Layout from '@/app/layouts'
import Separator from '@/components/shared/separator'

import Announcements from '@/components/announcements'
import Contact from '@/components/contact'
import VideoRelease from '@/components/videoRelease'
import Meetings from '@/components/meetings'
import Location from '@/components/location'
import News from '@/components/news'
import Posts from '@/components/posts'
import dictionarySearcher from '@/utilities/dictionary'

export default async function Home() {
  const nonce: string = (await headers()).get("x-nonce") || "";

  return (
    <Layout nonce={nonce}>
      {/* Video viewer */}
      <VideoRelease dictionary={dictionarySearcher("videos")} />
      {/* Announcements */}
      <Announcements announcements={dictionarySearcher("announcements")} />
      {/* Posts */}
      <Posts dictionary={dictionarySearcher("posts")} />
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
