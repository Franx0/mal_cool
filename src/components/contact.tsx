export default function Contact({dictionary}: any) {
  return (
    <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify"
         dangerouslySetInnerHTML={{ __html: dictionary.text }}
    ></div>
  )
}
