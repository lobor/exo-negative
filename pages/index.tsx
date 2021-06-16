import Head from "next/head";
import styles from "../styles/Home.module.css";
import useAxios from "axios-hooks";
import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasChange, setHasChange] = useState(false);
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: '/api/checkModel',
      method: 'POST'
    },
    { manual: true }
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Exo negative</title>
        <meta name="description" content="Exo on classifaction sentences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Exo negative sentences</h1>
        <br />
        <br />
        <br />
        <br />
        <div>
          <input
            ref={inputRef}
            type="text"
            name="sentence"
            placeholder="Enter your sentence"
            className={styles.input}
            onChange={() => {
              if (!hasChange) {
                setHasChange(true);
              }
            }}
          />
          <button
            type="button"
            onClick={() => {
              if (inputRef.current) {
                setHasChange(false);
                refetch({ data: { sentence: inputRef.current.value } });
              }
            }}
            className={styles.button}
            disabled={loading}
          >
            Check
          </button>
        </div>
        <div>
          {loading && <div>Loading...</div>}
          {!hasChange && !loading && data && <div>{data.result}</div>}
        </div>
      </main>
    </div>
  );
}
