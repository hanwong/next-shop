import Link from "next/link";

export default props => (
  <Link href={`/post?id=${props.id}`} as={`/post/${props.id}`}>
    <a>{props.title}</a>
  </Link>
);
