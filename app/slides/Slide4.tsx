'use client'

import { useEffect } from 'react'
import { useSlideContext } from '../components/Slideshow'
import styles from './Slide4.module.css'

export default function Slide4() {
  const { animationStep, setTotalSteps } = useSlideContext()

  useEffect(() => {
    setTotalSteps(6)
  }, [setTotalSteps])

  return (
    <div className={styles.slide}>
      {/* Step 0: Shield/coating visual */}
      <div className={`${styles.shieldSection} ${animationStep >= 0 ? styles.visible : ''} ${animationStep >= 2 ? styles.shieldMoveLeft : ''} ${animationStep >= 3 ? styles.shieldHide : ''}`}>
        <div className={styles.shieldVisual}>
          <div className={styles.surface}></div>
          <div className={styles.coating}>
            <span className={styles.coatingLabel}>POLYMER COATING</span>
          </div>
          {/* Proteins bouncing off */}
          <div className={`${styles.proteins} ${animationStep >= 1 ? styles.proteinsAnimate : ''}`}>
            <div className={styles.protein} style={{left: '20%', animationDelay: '0s'}}></div>
            <div className={styles.protein} style={{left: '40%', animationDelay: '0.3s'}}></div>
            <div className={styles.protein} style={{left: '60%', animationDelay: '0.6s'}}></div>
            <div className={styles.protein} style={{left: '80%', animationDelay: '0.2s'}}></div>
          </div>
        </div>
        <div className={styles.shieldTitle}>Antifouling Polymers</div>
        <div className={`${styles.shieldDesc} ${animationStep >= 1 ? styles.visible : ''}`}>
          Resist protein adsorption before organisms can latch on
        </div>
      </div>

      {/* Step 2: "Not enough" scarcity - appears on right */}
      <div className={`${styles.scarcitySection} ${animationStep >= 2 ? styles.visible : ''} ${animationStep >= 3 ? styles.scarcityHide : ''}`}>
        <div className={styles.scarcityVisual}>
          <div className={styles.vialRow}>
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`${styles.vial} ${i < 2 ? styles.vialFilled : styles.vialEmpty}`}>
                <div className={styles.vialLiquid}></div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.scarcityLabel}>We don't have nearly enough</div>
      </div>

      {/* Step 3: "Discovery is slow" */}
      <div className={`${styles.slowSection} ${animationStep >= 3 ? styles.visible : ''} ${animationStep >= 4 ? styles.slowMoveUp : ''}`}>
        <div className={styles.hourglassContainer}>
          <div className={styles.hourglass}>
            <div className={styles.hourglassTop}></div>
            <div className={styles.hourglassNeck}></div>
            <div className={styles.hourglassBottom}>
              <div className={`${styles.sand} ${animationStep >= 3 ? styles.sandFall : ''}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.slowText}>
          <span className={styles.slowLabel}>Discovery is</span>
          <span className={styles.slowEmphasis}>SLOW</span>
        </div>
      </div>

      {/* Step 4: Trial and error grid */}
      <div className={`${styles.trialSection} ${animationStep >= 4 ? styles.visible : ''} ${animationStep >= 5 ? styles.trialMoveLeft : ''}`}>
        <div className={styles.trialTitle}>Massive Trial & Error</div>
        <div className={styles.experimentGrid}>
          {[...Array(24)].map((_, i) => (
            <div 
              key={i} 
              className={`${styles.experiment} ${animationStep >= 4 ? styles.experimentAnim : ''}`}
              style={{
                animationDelay: `${0.02 * i}s`,
                background: i % 7 === 0 ? '#27ae60' : i % 5 === 0 ? '#e74c3c' : '#ddd'
              }}
            >
              {i % 7 === 0 ? '✓' : i % 5 === 0 ? '✗' : '?'}
            </div>
          ))}
        </div>
        <div className={styles.trialLabel}>Huge chemical design spaces</div>
      </div>

      {/* Step 5: Workflow cycle */}
      <div className={`${styles.workflowSection} ${animationStep >= 5 ? styles.visible : ''}`}>
        <div className={styles.workflowTitle}>The Dominant Workflow</div>
        <div className={styles.cycleContainer}>
          <div className={styles.cycleStep} style={{animationDelay: '0s'}}>
            <div className={styles.cycleIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <span className={styles.cycleLabel}>Design</span>
          </div>
          <div className={styles.cycleArrow}>→</div>
          <div className={styles.cycleStep} style={{animationDelay: '0.2s'}}>
            <div className={styles.cycleIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
                <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
                <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
                <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
                <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
                <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
              </svg>
            </div>
            <span className={styles.cycleLabel}>Test</span>
          </div>
          <div className={styles.cycleArrow}>→</div>
          <div className={styles.cycleStep} style={{animationDelay: '0.4s'}}>
            <div className={`${styles.cycleIcon} ${styles.waitIcon}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <span className={styles.cycleLabel}>Wait</span>
            <span className={styles.waitTime}>weeks/months</span>
          </div>
          <div className={styles.cycleArrow}>→</div>
          <div className={styles.cycleStep} style={{animationDelay: '0.6s'}}>
            <div className={styles.cycleIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 1l4 4-4 4"/>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                <path d="M7 23l-4-4 4-4"/>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
              </svg>
            </div>
            <span className={styles.cycleLabel}>Repeat</span>
          </div>
        </div>
        <div className={`${styles.loopIndicator} ${animationStep >= 5 ? styles.loopAnim : ''}`}>
          <svg viewBox="0 0 200 60" className={styles.loopArrow}>
            <path d="M 180 30 C 180 50, 100 55, 20 30" fill="none" stroke="#e74c3c" strokeWidth="2" strokeDasharray="5,5"/>
            <polygon points="15,25 25,30 15,35" fill="#e74c3c"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
