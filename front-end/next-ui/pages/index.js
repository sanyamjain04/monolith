import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Footer} from '../components/footer'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Giganoto - Code | Connect | Contribute</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image src="/main-header.svg" alt="Giganoto main header image" width="304" height="282" />
        <h1>Giganoto</h1>
        <h2>Code 💻 | Connect 🔗 | Contribute 🚀</h2>
        <hr />
      </header>
      <main>
        <button>
          <a href="#">
            {/* ToDo - https://github.com/giganoto-com/monolith/issues/1 */}
            See All Learning Paths
          </a>
        </button>
      </main>
      <Footer />
    </div>
  )
}
