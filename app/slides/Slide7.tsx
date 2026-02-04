'use client'

import { useEffect } from 'react'
import { useSlideContext } from '../components/Slideshow'
import styles from './Slide7.module.css'

export default function Slide7() {
  const { animationStep, setTotalSteps } = useSlideContext()

  useEffect(() => {
    setTotalSteps(5)
  }, [setTotalSteps])

  return (
    <div className={styles.slide}>
      {/* Step 0: Title */}
      <div className={`${styles.titleSection} ${animationStep >= 0 ? styles.visible : ''}`}>
        <h1 className={styles.mainTitle}>Digital Microfluidics</h1>
        <div className={styles.subtitle}>Programmable Experiments</div>
      </div>

      {/* Step 0: Traditional lab - fades out */}
      <div className={`${styles.traditionalLab} ${animationStep >= 0 ? styles.visible : ''} ${animationStep >= 1 ? styles.labFadeOut : ''}`}>
        <div className={styles.labLabel}>Traditional Lab</div>
        <div className={styles.labEquipment}>
          {/* Beaker */}
          <div className={styles.beaker}>
            <div className={styles.beakerGlass}>
              <div className={styles.beakerLiquid}></div>
            </div>
            <div className={styles.beakerBase}></div>
          </div>
          {/* Flask */}
          <div className={styles.flask}>
            <div className={styles.flaskNeck}></div>
            <div className={styles.flaskBody}>
              <div className={styles.flaskLiquid}></div>
            </div>
          </div>
          {/* Test tube */}
          <div className={styles.testTube}>
            <div className={styles.tubeLiquid}></div>
          </div>
        </div>
        <div className={`${styles.crossOut} ${animationStep >= 1 ? styles.crossAnim : ''}`}>
          <svg viewBox="0 0 100 100">
            <line x1="10" y1="10" x2="90" y2="90" stroke="#e74c3c" strokeWidth="6" strokeLinecap="round"/>
            <line x1="90" y1="10" x2="10" y2="90" stroke="#e74c3c" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Step 1: Microfluidic chip visual */}
      <div className={`${styles.chipSection} ${animationStep >= 1 ? styles.visible : ''} ${animationStep >= 3 ? styles.chipMoveLeft : ''}`}>
        <div className={styles.chip}>
          <div className={styles.chipSurface}>
            {/* Grid of electrodes */}
            <div className={styles.electrodeGrid}>
              {[...Array(64)].map((_, i) => (
                <div key={i} className={styles.electrode}></div>
              ))}
            </div>
            
            {/* Animated droplets */}
            <div className={`${styles.droplet} ${styles.droplet1} ${animationStep >= 2 ? styles.dropletAnimate1 : ''}`}></div>
            <div className={`${styles.droplet} ${styles.droplet2} ${animationStep >= 2 ? styles.dropletAnimate2 : ''}`}></div>
            <div className={`${styles.droplet} ${styles.droplet3} ${animationStep >= 2 ? styles.dropletAnimate3 : ''}`}></div>
          </div>
          <div className={styles.chipLabel}>DMF Chip</div>
        </div>
      </div>

      {/* Step 2: Droplet operations */}
      <div className={`${styles.operationsSection} ${animationStep >= 2 ? styles.visible : ''} ${animationStep >= 3 ? styles.operationsHide : ''}`}>
        <div className={styles.operationsTitle}>Droplet Operations</div>
        <div className={styles.operations}>
          <div className={`${styles.operation} ${animationStep >= 2 ? styles.opAnim : ''}`} style={{animationDelay: '0.1s'}}>
            <div className={styles.opVisual}>
              <div className={styles.opDroplet}></div>
              <svg className={styles.opArrow} viewBox="0 0 40 20">
                <path d="M5 10 L30 10 M25 5 L32 10 L25 15" stroke="#0066FF" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className={styles.opLabel}>Move</span>
          </div>
          <div className={`${styles.operation} ${animationStep >= 2 ? styles.opAnim : ''}`} style={{animationDelay: '0.3s'}}>
            <div className={styles.opVisual}>
              <div className={styles.opDroplet}></div>
              <svg className={styles.opSplit} viewBox="0 0 40 30">
                <path d="M20 5 L10 25 M20 5 L30 25" stroke="#0066FF" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className={styles.opLabel}>Split</span>
          </div>
          <div className={`${styles.operation} ${animationStep >= 2 ? styles.opAnim : ''}`} style={{animationDelay: '0.5s'}}>
            <div className={styles.opVisual}>
              <div className={styles.opDropletSmall} style={{left: '5px'}}></div>
              <div className={styles.opDropletSmall} style={{right: '5px'}}></div>
              <svg className={styles.opMerge} viewBox="0 0 40 30">
                <path d="M10 5 L20 25 M30 5 L20 25" stroke="#0066FF" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className={styles.opLabel}>Merge</span>
          </div>
          <div className={`${styles.operation} ${animationStep >= 2 ? styles.opAnim : ''}`} style={{animationDelay: '0.7s'}}>
            <div className={styles.opVisual}>
              <div className={styles.opDroplet}></div>
              <div className={styles.heatWaves}>
                <div className={styles.heatWave}></div>
                <div className={styles.heatWave}></div>
              </div>
            </div>
            <span className={styles.opLabel}>Heat</span>
          </div>
        </div>
      </div>

      {/* Step 3: Code-like commands - appears with benefits */}
      <div className={`${styles.codeSection} ${animationStep >= 3 ? styles.visible : ''} ${animationStep >= 4 ? styles.codeMoveRight : ''}`}>
        <div className={styles.codeTitle}>Experiments as Code</div>
        <div className={styles.codeBlock}>
          <div className={`${styles.codeLine} ${animationStep >= 3 ? styles.codeTypeIn : ''}`} style={{animationDelay: '0.1s'}}>
            <span className={styles.lineNum}>1</span>
            <span className={styles.func}>move</span>(<span className={styles.arg}>droplet_A</span>, <span className={styles.arg}>position_3</span>)
          </div>
          <div className={`${styles.codeLine} ${animationStep >= 3 ? styles.codeTypeIn : ''}`} style={{animationDelay: '0.3s'}}>
            <span className={styles.lineNum}>2</span>
            <span className={styles.func}>split</span>(<span className={styles.arg}>droplet_A</span>)
          </div>
          <div className={`${styles.codeLine} ${animationStep >= 3 ? styles.codeTypeIn : ''}`} style={{animationDelay: '0.5s'}}>
            <span className={styles.lineNum}>3</span>
            <span className={styles.func}>merge</span>(<span className={styles.arg}>droplet_A1</span>, <span className={styles.arg}>droplet_B</span>)
          </div>
          <div className={`${styles.codeLine} ${animationStep >= 3 ? styles.codeTypeIn : ''}`} style={{animationDelay: '0.7s'}}>
            <span className={styles.lineNum}>4</span>
            <span className={styles.func}>heat</span>(<span className={styles.arg}>merged</span>, <span className={styles.num}>65</span>)
          </div>
          <div className={`${styles.codeLine} ${animationStep >= 3 ? styles.codeTypeIn : ''}`} style={{animationDelay: '0.9s'}}>
            <span className={styles.lineNum}>5</span>
            <span className={styles.func}>measure</span>(<span className={styles.arg}>merged</span>)
          </div>
        </div>
      </div>

      {/* Step 3: Three benefits */}
      <div className={`${styles.benefitsSection} ${animationStep >= 3 ? styles.visible : ''}`}>
        <div className={`${styles.benefit} ${animationStep >= 3 ? styles.benefitAnim : ''}`} style={{animationDelay: '0.1s'}}>
          <div className={styles.benefitIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div className={styles.benefitText}>
            <span className={styles.benefitTitle}>Immediate Feedback</span>
            <span className={styles.benefitDesc}>Each step produces instant results</span>
          </div>
        </div>
        <div className={`${styles.benefit} ${animationStep >= 3 ? styles.benefitAnim : ''}`} style={{animationDelay: '0.3s'}}>
          <div className={styles.benefitIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="4"/>
            </svg>
          </div>
          <div className={styles.benefitText}>
            <span className={styles.benefitTitle}>Isolated Droplets</span>
            <span className={styles.benefitDesc}>Each droplet is independent</span>
          </div>
        </div>
        <div className={`${styles.benefit} ${animationStep >= 3 ? styles.benefitAnim : ''}`} style={{animationDelay: '0.5s'}}>
          <div className={styles.benefitIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <div className={styles.benefitText}>
            <span className={styles.benefitTitle}>Full Visibility</span>
            <span className={styles.benefitDesc}>Complete system state observable</span>
          </div>
        </div>
      </div>

      {/* Step 4: Transformation */}
      <div className={`${styles.transformSection} ${animationStep >= 4 ? styles.visible : ''}`}>
        <div className={styles.transformContainer}>
          <div className={styles.fromState}>
            <span className={styles.stateLabel}>Wet Lab</span>
            <div className={styles.stateIcon}>🧪</div>
          </div>
          <div className={`${styles.transformArrow} ${animationStep >= 4 ? styles.arrowAnim : ''}`}>
            <svg viewBox="0 0 120 40">
              <path d="M10 20 L100 20 M90 10 L105 20 L90 30" stroke="#0066FF" strokeWidth="4" fill="none"/>
            </svg>
          </div>
          <div className={styles.toState}>
            <span className={styles.stateLabel}>Programmable Environment</span>
            <div className={styles.stateIcon}>💻</div>
          </div>
        </div>
      </div>
    </div>
  )
}
