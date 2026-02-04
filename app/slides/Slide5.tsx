'use client'

import { useEffect } from 'react'
import { useSlideContext } from '../components/Slideshow'
import styles from './Slide5.module.css'

export default function Slide5() {
  const { animationStep, setTotalSteps } = useSlideContext()

  useEffect(() => {
    setTotalSteps(6)
  }, [setTotalSteps])

  return (
    <div className={styles.slide}>
      {/* Step 0: Title with AI success domains */}
      <div className={`${styles.titleSection} ${animationStep >= 0 ? styles.visible : ''} ${animationStep >= 2 ? styles.titleMoveUp : ''}`}>
        <h1 className={styles.mainTitle}>Why AI Hasn't Solved Materials</h1>
        <div className={`${styles.aiSuccesses} ${animationStep >= 1 ? styles.successesHide : ''}`}>
          <div className={`${styles.successItem} ${animationStep >= 0 ? styles.successAnim : ''}`} style={{animationDelay: '0.2s'}}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 18l2-2v-4l-2-2M8 18l-2-2v-4l2-2M12 2v4M9 22h6M12 18v4"/>
                <circle cx="12" cy="10" r="4"/>
              </svg>
            </div>
            <span>Robotics</span>
            <span className={styles.checkMark}>✓</span>
          </div>
          <div className={`${styles.successItem} ${animationStep >= 0 ? styles.successAnim : ''}`} style={{animationDelay: '0.4s'}}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <span>Software</span>
            <span className={styles.checkMark}>✓</span>
          </div>
          <div className={`${styles.successItem} ${animationStep >= 0 ? styles.successAnim : ''}`} style={{animationDelay: '0.6s'}}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="3" width="12" height="18" rx="2"/>
                <path d="M8 7h8M8 11h8M8 15h4"/>
                <circle cx="15" cy="15" r="2"/>
              </svg>
            </div>
            <span>Games</span>
            <span className={styles.checkMark}>✓</span>
          </div>
        </div>
      </div>

      {/* Step 1: "Materials are harder" - dismissed */}
      <div className={`${styles.harderSection} ${animationStep >= 1 ? styles.visible : ''} ${animationStep >= 2 ? styles.harderHide : ''}`}>
        <div className={styles.usualAnswer}>
          <span className={styles.usualLabel}>The usual answer:</span>
          <div className={styles.harderText}>
            <span>"Materials are just harder"</span>
            <div className={`${styles.strikethrough} ${animationStep >= 1 ? styles.strikeAnim : ''}`}></div>
          </div>
        </div>
      </div>

      {/* Step 2: Model vs Environment */}
      <div className={`${styles.bottleneckSection} ${animationStep >= 2 ? styles.visible : ''} ${animationStep >= 3 ? styles.bottleneckMoveUp : ''} ${animationStep >= 5 ? styles.bottleneckHide : ''}`}>
        <div className={styles.bottleneckCompare}>
          <div className={styles.notBottleneck}>
            <span className={styles.notLabel}>The bottleneck isn't</span>
            <span className={styles.notValue}>THE MODEL</span>
          </div>
          <div className={styles.isBottleneck}>
            <span className={styles.isLabel}>It's</span>
            <span className={styles.isValue}>THE ENVIRONMENT</span>
          </div>
        </div>
      </div>

      {/* Step 3: Three pillars */}
      <div className={`${styles.pillarsSection} ${animationStep >= 3 ? styles.visible : ''} ${animationStep >= 4 ? styles.pillarsMoveLeft : ''}`}>
        <div className={styles.pillarsTitle}>Where AI succeeds, the environment has:</div>
        <div className={styles.pillars}>
          <div className={`${styles.pillar} ${animationStep >= 3 ? styles.pillarAnim : ''}`} style={{animationDelay: '0.1s'}}>
            <div className={styles.pillarIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className={styles.pillarLabel}>Fast Feedback</span>
          </div>
          <div className={`${styles.pillar} ${animationStep >= 3 ? styles.pillarAnim : ''}`} style={{animationDelay: '0.3s'}}>
            <div className={styles.pillarIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
                <path d="M8 12h8" strokeDasharray="2 2"/>
              </svg>
            </div>
            <span className={styles.pillarLabel}>Clear Causality</span>
          </div>
          <div className={`${styles.pillar} ${animationStep >= 3 ? styles.pillarAnim : ''}`} style={{animationDelay: '0.5s'}}>
            <div className={styles.pillarIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <span className={styles.pillarLabel}>Full Visibility</span>
          </div>
        </div>
      </div>

      {/* Step 3: RL Robot Animation - appears with pillars */}
      <div className={`${styles.rlSection} ${animationStep >= 3 ? styles.visible : ''} ${animationStep >= 4 ? styles.rlMoveRight : ''}`}>
        <div className={styles.rlContainer}>
          <div className={styles.robotArea}>
            <div className={`${styles.robot} ${animationStep >= 3 ? styles.robotAnimate : ''}`}>
              <div className={styles.robotHead}>
                <div className={styles.robotEye}></div>
                <div className={styles.robotEye}></div>
              </div>
              <div className={styles.robotBody}></div>
              <div className={styles.robotArm}></div>
            </div>
            <div className={styles.attempts}>
              <div className={`${styles.attempt} ${styles.attemptFail} ${animationStep >= 3 ? styles.attemptAnim : ''}`} style={{animationDelay: '0.3s'}}>✗</div>
              <div className={`${styles.attempt} ${styles.attemptFail} ${animationStep >= 3 ? styles.attemptAnim : ''}`} style={{animationDelay: '0.8s'}}>✗</div>
              <div className={`${styles.attempt} ${styles.attemptFail} ${animationStep >= 3 ? styles.attemptAnim : ''}`} style={{animationDelay: '1.3s'}}>✗</div>
              <div className={`${styles.attempt} ${styles.attemptSuccess} ${animationStep >= 3 ? styles.attemptAnim : ''}`} style={{animationDelay: '1.8s'}}>✓</div>
            </div>
          </div>
          <div className={styles.lossChart}>
            <div className={styles.chartLabel}>Training Loss</div>
            <div className={styles.chartArea}>
              <svg viewBox="0 0 200 100" className={styles.chartSvg}>
                <path 
                  className={`${styles.lossLine} ${animationStep >= 3 ? styles.lossAnimate : ''}`}
                  d="M 10 20 Q 30 25, 50 40 T 90 50 T 130 65 T 170 80 L 190 85"
                  fill="none"
                  stroke="#3498db"
                  strokeWidth="3"
                />
                <line x1="10" y1="10" x2="10" y2="90" stroke="#ccc" strokeWidth="1"/>
                <line x1="10" y1="90" x2="195" y2="90" stroke="#ccc" strokeWidth="1"/>
              </svg>
              <div className={styles.chartLabels}>
                <span>High</span>
                <span>Low</span>
              </div>
            </div>
            <div className={styles.feedbackLabel}>Fast feedback → Rapid learning</div>
          </div>
        </div>
      </div>

      {/* Step 4: Software & Games have it */}
      <div className={`${styles.comparisonSection} ${animationStep >= 4 ? styles.visible : ''}`}>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonHeader}></div>
          <div className={styles.comparisonHeader}>Fast</div>
          <div className={styles.comparisonHeader}>Clear</div>
          <div className={styles.comparisonHeader}>Visible</div>
          
          <div className={`${styles.comparisonRow} ${animationStep >= 4 ? styles.rowAnim : ''}`} style={{animationDelay: '0.1s'}}>
            <span className={styles.domainName}>Software</span>
            <span className={styles.checkGreen}>✓</span>
            <span className={styles.checkGreen}>✓</span>
            <span className={styles.checkGreen}>✓</span>
          </div>
          
          <div className={`${styles.comparisonRow} ${animationStep >= 4 ? styles.rowAnim : ''}`} style={{animationDelay: '0.2s'}}>
            <span className={styles.domainName}>Games</span>
            <span className={styles.checkGreen}>✓</span>
            <span className={styles.checkGreen}>✓</span>
            <span className={styles.checkGreen}>✓</span>
          </div>
          
          {/* Step 5: Materials row */}
          <div className={`${styles.comparisonRow} ${styles.materialsRow} ${animationStep >= 5 ? styles.rowAnim : ''}`}>
            <span className={styles.domainName}>Materials</span>
            <span className={styles.crossRed}>✗</span>
            <span className={styles.crossRed}>✗</span>
            <span className={styles.crossRed}>✗</span>
          </div>
        </div>
        
        </div>

      {/* Step 5: Materials problems - positioned below title, horizontal */}
      <div className={`${styles.materialsProblems} ${animationStep >= 5 ? styles.visible : ''}`}>
        <div className={`${styles.problem} ${animationStep >= 5 ? styles.problemAnim : ''}`} style={{animationDelay: '0.2s'}}>
          <span className={styles.problemLabel}>SLOW</span>
          <span className={styles.problemDesc}>Actions take days/weeks</span>
        </div>
        <div className={`${styles.problem} ${animationStep >= 5 ? styles.problemAnim : ''}`} style={{animationDelay: '0.4s'}}>
          <span className={styles.problemLabel}>NOISY</span>
          <span className={styles.problemDesc}>Outcomes vary unpredictably</span>
        </div>
        <div className={`${styles.problem} ${animationStep >= 5 ? styles.problemAnim : ''}`} style={{animationDelay: '0.6s'}}>
          <span className={styles.problemLabel}>UNCLEAR</span>
          <span className={styles.problemDesc}>Which decision caused what?</span>
        </div>
      </div>
    </div>
  )
}
