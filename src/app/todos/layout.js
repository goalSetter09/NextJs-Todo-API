import Link from 'next/link'
import styles from '../styles/layout.module.css'


export default function Layout(props) {
  return (

    <html>
      <body>
        <h1><Link href="/">Home</Link></h1>
        <h1 className={styles.title}>To Do</h1>
        {props.children}
      </body>
    </html>
  )
}