'use client'

import { useEffect } from 'react'
import { useSlideContext } from '../components/Slideshow'
import styles from './SlideRQ.module.css'

export default function SlideRQ() {
  const { setTotalSteps } = useSlideContext()

  useEffect(() => {
    setTotalSteps(1)
  }, [setTotalSteps])

  return (
    <div className={styles.slide}>
      <div className={styles.content}>
        <div className={styles.label}>Research Question</div>
        <div className={styles.question}>
          How could digital microfluidics alter the structure of experimental feedback and decision-making in antifouling polymer discovery, and how do these changes improve the feasibility and effectiveness of AI-guided experimental planning?
        </div>
      </div>
    </div>
  )
}
