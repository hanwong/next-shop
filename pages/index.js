import Head from "next/head";
import PostLink from "../components/PostLink";

export default () => (
  <div>
    <Head>
      <title>Home | Nomad Store</title>
    </Head>
    <h1>Posts:</h1>
    <ul>
      <li>
        <PostLink title={"Something"} />
      </li>
      <li>
        <PostLink title={"Something else"} />
      </li>
    </ul>
  </div>
);
