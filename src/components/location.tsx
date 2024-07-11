import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify'

export default function Header({dictionary}: any) {
  return (
    <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
      <p className="mb-10" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dictionary.text, {
        ALLOWED_TAGS: ["a"],
        ADD_ATTR: ["href", "target"] })}} />
      <Image
        className="w-full md:w-1/2 h-auto m-auto rounded-md"
        src="/images/Map.png"
        alt={"Localización Espacio Mad Cool"}
        width={600}
        height={300}
      />
    </div>
  )
}
