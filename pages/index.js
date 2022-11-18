import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import SeeSaw from "../components/SeeSaw";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Eat Money</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full flex flex-col justify-start items-center">
        <div className="flex flex-row justify-center items-center">
          <button
            className="w-[10rem] h-12 bg-bg1"
            onClick={() => {
              router.push("/HomePage");
            }}
          >
            Enter Dapp
          </button>

          <button
            className="w-[10rem] h-12 bg-bg1"
            onClick={() => {
              router.push("/Restaurant");
            }}
          >
            Enter Restaurant
          </button>
        </div>
        <SeeSaw />
      </div>
    </div>
  );
}
