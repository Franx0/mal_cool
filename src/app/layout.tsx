import dictionarySearcher from '@/utilities/dictionary'
import metadataBuilder from '@/utilities/metadata'
export async function generateMetadata(): Promise<any> {
  const { title, description, logoUrl }: any = dictionarySearcher("meta");

  return metadataBuilder({
    title: title,
    description: description,
    image: logoUrl,
    imageAlt: 'Stop Espacio Mad Cool'
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
