import styles from './Slides.module.css'
import Image from 'next/image'

export default function Slide1() {
  return (
    <div className={styles.slide1Wrapper}>
      <div className={styles.imageContainerFull}>
        <Image 
          src="/assets/blob.jpg" 
          alt="Digital Microfluidics"
          width={2048}
          height={672}
          className={styles.heroImage}
          priority
        />
      </div>
      
      <div className={styles.slide1Content}>
        <div className={styles.presenterInfo}>
          <span className={styles.presenter}>Presented by Antonio Llano</span>
          <span className={styles.date}>27/01/2026</span>
        </div>
        
        <div className={styles.titleContainer}>
          <h1 className={styles.slide1Title}>
            Digital Microfluidics for AI-Guided Antifouling Polymer Discovery
          </h1>
          <div className={styles.arrow}>→</div>
        </div>
      </div>
    </div>
  )
}
