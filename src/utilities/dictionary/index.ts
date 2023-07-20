import _dictionary from '@/languages/es'

export type Meta = {
  title: string,
  description: string,
  author: string,
  site: string,
  keywords: string,
  logoUrl: string,
}

export type Header = {
  title: string,
}

export type Contact = {
  text: string,
  follow: string,
  telegram: string,
  facebook: string,
  twitter: string,
}

export type Meetings = {
  description: string,
  all: any,
}

export type PressRelease = {
  description: string,
  pressNoteUrl: string,
  exportUrl: string,
  exportTitle: string,
  exportText: string,
  download: string,
}

export type Location = {
  text: string,
}

export type News = {
  title: string,
}

export type Posts = {
  title: string,
}

export type Dictionary = {
  meta: Meta,
  header: Header,
  announcements: Array<any>,
  contact: Contact,
  meetings: Meetings,
  pressRelease: PressRelease,
  location: Location,
  news: News,
  posts: Posts
}

const dictionarySearcher = function(key: string) {
  return _dictionary[key.toString() as keyof Dictionary]
};

export default dictionarySearcher;
