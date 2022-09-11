import React from 'react'
import styles from './Loading.module.css'

const Loading = ({isLoaded}) => {
  return (
    <div className={styles.loaderContainer} style={{display : isLoaded ? 'block' : 'none'}}>
        <span className={styles.loader}></span>
    </div>
  )
}

export default Loading