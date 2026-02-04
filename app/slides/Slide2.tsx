'use client'

import { useEffect } from 'react'
import { useSlideContext } from '../components/Slideshow'
import Image from 'next/image'
import styles from './Slide2.module.css'

export default function Slide2() {
  const { animationStep, setTotalSteps } = useSlideContext()

  useEffect(() => {
    setTotalSteps(5)
  }, [setTotalSteps])

  return (
    <div className={styles.slide}>
      {/* Step 3: Suez Canal - centered above ship */}
      <div className={`${styles.suezSection} ${animationStep >= 3 ? styles.visible : ''} ${animationStep >= 4 ? styles.moveLeft : ''}`}>
        <div className={styles.suezLabel}>SUEZ CANAL</div>
        <div className={styles.canalGraphic}>
          <div className={styles.mediterranean}>
            <span className={styles.seaLabel}>Mediterranean</span>
          </div>
          <div className={styles.canal}>
            <div className={styles.canalWater}></div>
            <div className={`${styles.shipIcon} ${animationStep >= 3 ? styles.shipIconAnim : ''}`}>
              <div className={styles.miniShip}></div>
            </div>
          </div>
          <div className={styles.redSea}>
            <span className={styles.seaLabel}>Red Sea</span>
          </div>
        </div>
      </div>

      {/* Step 0: Ship silhouette appears */}
      <div className={`${styles.shipContainer} ${animationStep >= 0 ? styles.visible : ''} ${animationStep >= 4 ? styles.moveLeft : ''}`}>
        <div className={styles.shipName}>EVERGREEN</div>
        <div className={styles.ship}>
          <div className={styles.hull}></div>
          <div className={styles.bridge}></div>
          <div className={styles.containers}>
            {[...Array(24)].map((_, i) => (
              <div key={i} className={styles.container} style={{ 
                animationDelay: `${0.5 + i * 0.03}s`,
                background: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'][i % 6]
              }}></div>
            ))}
          </div>
        </div>
        <div className={styles.waterLine}></div>
      </div>

      {/* Step 1: Size comparison - football fields */}
      <div className={`${styles.sizeComparison} ${animationStep >= 1 ? styles.visible : ''} ${animationStep >= 4 ? styles.moveLeft : ''}`}>
        <div className={styles.fieldsRow}>
          <div className={`${styles.footballField} ${animationStep >= 1 ? styles.fieldAnim : ''}`} style={{animationDelay: '0.1s'}}></div>
          <div className={`${styles.footballField} ${animationStep >= 1 ? styles.fieldAnim : ''}`} style={{animationDelay: '0.2s'}}></div>
          <div className={`${styles.footballField} ${animationStep >= 1 ? styles.fieldAnim : ''}`} style={{animationDelay: '0.3s'}}></div>
          <div className={`${styles.footballField} ${animationStep >= 1 ? styles.fieldAnim : ''}`} style={{animationDelay: '0.4s'}}></div>
        </div>
        <span className={styles.sizeLabel}>400m</span>
      </div>

      {/* Step 2: Weight stat - hide when newspaper appears */}
      <div className={`${styles.weightStat} ${animationStep >= 2 && animationStep < 4 ? styles.visible : ''}`}>
        <span className={styles.weightNumber}>200,000</span>
        <span className={styles.weightUnit}>tonnes</span>
      </div>

      {/* Step 3: 12% global trade - hide when newspaper appears */}
      <div className={`${styles.tradeStat} ${animationStep >= 3 && animationStep < 4 ? styles.visible : ''}`}>
        <span className={styles.tradePercent}>12%</span>
        <span className={styles.tradeLabel}>of global trade</span>
      </div>

      {/* Step 4: Newspaper */}
      <div className={`${styles.newspaperSection} ${animationStep >= 4 ? styles.visible : ''}`}>
        <div className={styles.newspaperWrapper}>
          <Image 
            src="/assets/newspaper.jpg" 
            alt="Wall Street Journal - Ship Wedged In Suez Canal"
            width={600}
            height={700}
            className={styles.newspaperImage}
            priority
          />
        </div>
      </div>
    </div>
  )
}
