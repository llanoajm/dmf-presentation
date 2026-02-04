'use client'

import { useEffect } from 'react'
import { useSlideContext } from '../components/Slideshow'
import styles from './SlideFinal.module.css'
import Image from 'next/image'

export default function SlideFinal() {
  const { setTotalSteps } = useSlideContext()

  useEffect(() => {
    setTotalSteps(1)
  }, [setTotalSteps])

  return (
    <div className={styles.slide}>
      {/* Hardware */}
      <div className={styles.hardwareSection}>
        <Image 
          src="/assets/dropbot.png" 
          alt="Dropbot DMF Platform" 
          width={380}
          height={285}
          className={styles.dropbotImage}
        />
        <div className={styles.hardwareLabel}>DropBot DMF Platform</div>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Methods */}
      <div className={styles.methodsSection}>
        <div className={styles.methodsTitle}>AI Stack</div>
        <div className={styles.methodsList}>
          <div className={styles.method}>Reinforcement Learning</div>
          <div className={styles.method}>Supervised Fine-Tuning</div>
        </div>
      </div>

      {/* Logos */}
      <div className={styles.logosSection}>
        <div className={styles.logoItem}>
          <div className={styles.logoText}>Anthropic</div>
        </div>
        <div className={styles.logoDot}></div>
        <div className={styles.logoItem}>
          <div className={styles.logoText}>Qwen</div>
        </div>
        <div className={styles.logoDot}></div>
        <div className={styles.logoItem}>
          <div className={styles.logoText}>Llama</div>
        </div>
      </div>
    </div>
  )
}
