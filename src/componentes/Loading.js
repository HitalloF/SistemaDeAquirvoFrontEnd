import React from 'react'
import styles from './styles/Loading.module.css'
import loading from '../img/loading.gif'
export const Loading = () => {
  return (
    <div className={styles.loader_container}>
        <img className={styles.loader} src={loading} />
    </div>
  )
}
export default Loading