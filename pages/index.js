

import styles from '../styles/Home.module.css'
import Layout from '../layouts/layout';
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  
  // const [data, setData] = useState(data);
  return (
    
    <div className={styles.container}>

      <main className={styles.main}>
        
        <h1 key={0}>{ data}</h1>
      </main>

    </div>
  )
}



