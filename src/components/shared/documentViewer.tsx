type Props = {
  url: string,
  className?: string,
}

export default function DocumentViewer(props: Props) {
  return (
    <object
      type="application/pdf"
      data={props.url}
      className={props.className}
    ></object>
  )
};
