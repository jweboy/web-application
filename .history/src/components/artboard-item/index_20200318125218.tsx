import React from 'react'
import styles from './index.less';

const ArtBoardItem = () => {
  return (
    <div className={styles['ardboard-item']}>
      <div className={styles.content}>
        <img className={styles.image} src="http://assets.jweboy.com/pet-miniprogram/wx9bf5585b9cac9dbd.o6zAJs2GR8amheA-RJHJZsQCKvFE.1U2XjvRYFMmf569c9a4ac38cda35deb873d83bd54c77.jpg" />
      </div>
      <div className={styles.title}>
        <span className={styles.name}></span>
      </div>
    </div>
  )
}

export default ArtBoardItem
