type Props = {
  url: string,
  text: string,
  className?: string,
}

export default function VideoViewer(props: Props) {
  return (
    <iframe width="560" height="315" src={props.url} title={props.text} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
};
