import Head from 'next/head'
import { Feed, Header, Login, RightSidebar, Sidebar } from "../components/index";
import { getSession } from "next-auth/react";

export default function Home({ session }) {
  if (!session) return <Login/>
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="bg-gray-100 flex">
        <Sidebar/>
        <Feed/>
        <RightSidebar/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  };
}
