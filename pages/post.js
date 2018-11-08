import Head from "next/head";
import { withRouter } from "next/router";

const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Nomad Store</title>
    </Head>
    <h1>{props.title}</h1>
    <p>lalalalalala</p>
  </div>
);

Post.getInitialProps = async () => {
  return { title: "Lolololololo" };
};

export default withRouter(Post);
