export default function Separator({displayBorder = true}) {
  return <hr className={`w-full h-px mb-10 ${displayBorder ? 'bg-gray-200' : 'border-t-0'}`} />
}
