import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import CreatePizza from "~/components/pizza/create-pizza";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Night!</title>
        <meta
          name="description"
          content="Collaberate with your friends and family to decide what pizza to make or order"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-3xl">Pizza Night</h1>
        <div className="flex flex-col items-center gap-2">
          <AuthShowcase />
          <CreatePizza />
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl ">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
