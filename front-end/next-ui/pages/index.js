import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Giganoto - Code | Connect | Contribute</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image src="/main-header.svg" alt="Giganoto main header image" width="460" height="427" />
        <h1>Giganoto</h1>
        <h2>Code 💻 | Connect 🔗 | Contribute 🚀</h2>
        <h3>
            <a href="https://github.com/giganoto-com/monolith">
              Contribute to this source code 
              <Image src="https://github.githubassets.com/images/icons/emoji/octocat.png" width="28" height="28" />
            </a>
        </h3>
        <hr />
      </header>
      <main className={styles.main}>
        <button>
          <a href="#">
            {/* ToDo - https://github.com/giganoto-com/monolith/issues/1 */}
            See All Learning Paths
          </a>
        </button>
      </main>
    </div>
  )
}
