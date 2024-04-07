import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify'

export default function Header({dictionary}: any) {
  return (
    <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
      <p className="mb-10" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dictionary.text)}} />
      <Image
        src="/images/Map.png"
        className="m-auto rounded-md"
        alt={"Localización Espacio Mad Cool"}
        width={600}
        height={300}
      />
    </div>
  )
}
