import Head from "next/head";
import styles from "../styles/Home.module.css";



export default function Home({users}) {
  console.log(users);
  return (
    <>
      <Head>
        <title>My NextJS Home</title>
        <meta name="keywords" content="Test meta" />
      </Head>
      <div>this is home page</div>
      
    </>
  );
}
