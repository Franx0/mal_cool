export type metadataType = {
  title: string,
  description: string,
  image: string,
  imageAlt: string
}

export default function metadataBuilder(data: metadataType) {
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.image,
          width: 1600,
          height: 1000,
          alt: data.imageAlt,
        },
      ]
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
