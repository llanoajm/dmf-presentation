'use client'

import { useEffect } from 'react'
import { useSlideContext } from '../components/Slideshow'
import styles from './Slide6.module.css'

export default function Slide6() {
  const { animationStep, setTotalSteps } = useSlideContext()

  useEffect(() => {
    setTotalSteps(5)
  }, [setTotalSteps])

  return (
    <div className={styles.slide}>
      {/* Step 0: Title + Software interface visual */}
      <div className={`${styles.titleSection} ${animationStep >= 0 ? styles.visible : ''}`}>
        <h1 className={styles.mainTitle}>The Missing Interface</h1>
      </div>

      {/* Software side - clean interface */}
      <div className={`${styles.softwareSide} ${animationStep >= 0 ? styles.visible : ''} ${animationStep >= 4 ? styles.sidesHide : ''}`}>
        <div className={styles.sideLabel}>SOFTWARE</div>
        <div className={styles.codeBlock}>
          <div className={`${styles.codeLine} ${animationStep >= 0 ? styles.typeIn : ''}`} style={{animationDelay: '0.3s'}}>
            <span className={styles.keyword}>function</span> test() {'{'}
          </div>
          <div className={`${styles.codeLine} ${animationStep >= 0 ? styles.typeIn : ''}`} style={{animationDelay: '0.5s'}}>
            &nbsp;&nbsp;<span className={styles.keyword}>return</span> result;
          </div>
          <div className={`${styles.codeLine} ${animationStep >= 0 ? styles.typeIn : ''}`} style={{animationDelay: '0.7s'}}>
            {'}'}
          </div>
        </div>
        
        {/* Step 1: Compile arrow */}
        <div className={`${styles.compileSection} ${animationStep >= 1 ? styles.visible : ''}`}>
          <div className={styles.compileArrow}>
            <svg viewBox="0 0 60 24" className={styles.arrowSvg}>
              <path d="M0 12 L50 12 M40 4 L52 12 L40 20" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          <div className={styles.compileLabel}>COMPILE</div>
          <div className={styles.instantBadge}>~instant</div>
        </div>

        {/* Result */}
        <div className={`${styles.resultBox} ${animationStep >= 1 ? styles.visible : ''}`}>
          <div className={styles.resultSuccess}>
            <span className={styles.checkIcon}>✓</span>
            <span>Result</span>
          </div>
        </div>

        {/* Step 2: Unit tests */}
        <div className={`${styles.testsSection} ${animationStep >= 2 ? styles.visible : ''}`}>
          <div className={styles.testsTitle}>Unit Tests</div>
          <div className={styles.testResults}>
            <div className={`${styles.testItem} ${styles.testPass}`}>✓ test_1</div>
            <div className={`${styles.testItem} ${styles.testPass}`}>✓ test_2</div>
            <div className={`${styles.testItem} ${styles.testPass}`}>✓ test_3</div>
          </div>
        </div>
      </div>

      {/* Chemistry side - no interface */}
      <div className={`${styles.chemistrySide} ${animationStep >= 0 ? styles.visible : ''} ${animationStep >= 4 ? styles.sidesHide : ''}`}>
        <div className={styles.sideLabel}>CHEMISTRY</div>
        
        {/* Beaker with reaction */}
        <div className={styles.beakerArea}>
          <div className={`${styles.beaker} ${animationStep >= 0 ? styles.beakerAnimate : ''}`}>
            <div className={styles.beakerGlass}>
              <div className={styles.liquid}>
                <div className={styles.bubble} style={{left: '20%', animationDelay: '0s'}}></div>
                <div className={styles.bubble} style={{left: '50%', animationDelay: '0.5s'}}></div>
                <div className={styles.bubble} style={{left: '70%', animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1: No compile - waiting */}
        <div className={`${styles.waitingSection} ${animationStep >= 1 ? styles.visible : ''}`}>
          <div className={styles.waitingArrow}>
            <svg viewBox="0 0 60 24" className={styles.arrowSvg}>
              <path d="M0 12 L50 12 M40 4 L52 12 L40 20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
            </svg>
          </div>
          <div className={styles.noCompileLabel}>NO COMPILE</div>
          <div className={styles.timeBadge}>days...weeks...</div>
        </div>

        {/* Uncertain result */}
        <div className={`${styles.resultBox} ${styles.uncertainResult} ${animationStep >= 1 ? styles.visible : ''}`}>
          <div className={styles.resultUncertain}>
            <span className={styles.questionIcon}>?</span>
            <span>Result</span>
          </div>
        </div>

        {/* Step 2: No unit tests */}
        <div className={`${styles.noTestsSection} ${animationStep >= 2 ? styles.visible : ''}`}>
          <div className={styles.testsTitle}>Unit Tests</div>
          <div className={styles.testResults}>
            <div className={`${styles.testItem} ${styles.testNone}`}>✗ not possible</div>
            <div className={`${styles.testItem} ${styles.testNone}`}>✗ not possible</div>
            <div className={`${styles.testItem} ${styles.testNone}`}>✗ not possible</div>
          </div>
        </div>
      </div>

      {/* Step 3: Tangled causality */}
      <div className={`${styles.causalitySection} ${animationStep >= 3 ? styles.visible : ''} ${animationStep >= 4 ? styles.causalityHide : ''}`}>
        <div className={styles.causalityTitle}>No clean separation between action & outcome</div>
        <div className={styles.tangleVisual}>
          <svg viewBox="0 0 400 120" className={styles.tangleSvg}>
            {/* Action nodes */}
            <circle cx="50" cy="30" r="12" className={styles.actionNode}/>
            <circle cx="50" cy="60" r="12" className={styles.actionNode}/>
            <circle cx="50" cy="90" r="12" className={styles.actionNode}/>
            <text x="50" y="115" className={styles.nodeLabel}>Actions</text>
            
            {/* Outcome nodes */}
            <circle cx="350" cy="30" r="12" className={styles.outcomeNode}/>
            <circle cx="350" cy="60" r="12" className={styles.outcomeNode}/>
            <circle cx="350" cy="90" r="12" className={styles.outcomeNode}/>
            <text x="350" y="115" className={styles.nodeLabel}>Outcomes</text>
            
            {/* Tangled lines */}
            <path d="M62 30 Q150 10, 200 60 T338 90" className={`${styles.tangleLine} ${animationStep >= 3 ? styles.tangleAnimate : ''}`} style={{animationDelay: '0.1s'}}/>
            <path d="M62 60 Q120 90, 200 30 T338 30" className={`${styles.tangleLine} ${animationStep >= 3 ? styles.tangleAnimate : ''}`} style={{animationDelay: '0.3s'}}/>
            <path d="M62 90 Q180 50, 200 80 T338 60" className={`${styles.tangleLine} ${animationStep >= 3 ? styles.tangleAnimate : ''}`} style={{animationDelay: '0.5s'}}/>
            <path d="M62 30 Q100 80, 180 40 T338 60" className={`${styles.tangleLine} ${animationStep >= 3 ? styles.tangleAnimate : ''}`} style={{animationDelay: '0.7s'}}/>
            <path d="M62 60 Q200 100, 280 50 T338 90" className={`${styles.tangleLine} ${animationStep >= 3 ? styles.tangleAnimate : ''}`} style={{animationDelay: '0.9s'}}/>
            
            {/* Question marks in the middle */}
            <text x="200" y="55" className={styles.tangleQuestion}>?</text>
            <text x="170" y="75" className={styles.tangleQuestion}>?</text>
            <text x="230" y="40" className={styles.tangleQuestion}>?</text>
          </svg>
        </div>
      </div>

      {/* Step 4: "Unless we change the interface" */}
      <div className={`${styles.solutionSection} ${animationStep >= 4 ? styles.visible : ''}`}>
        <div className={styles.unlessText}>
          <span className={styles.unless}>Unless</span>
          <span className={styles.weChange}>we change how we control experiments.</span>
        </div>
        
        <div className={`${styles.newInterface} ${animationStep >= 4 ? styles.interfaceReveal : ''}`}>
          <div className={styles.interfaceGlow}></div>
          <div className={styles.interfaceBox}>
            <div className={styles.interfaceIcon}>
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="8" width="40" height="32" rx="4"/>
                <path d="M12 20h8M12 28h12"/>
                <circle cx="36" cy="24" r="6"/>
                <path d="M36 21v6M33 24h6"/>
              </svg>
            </div>
            <div className={styles.interfaceLabel}>Digital Control for Chemistry</div>
          </div>
        </div>
      </div>
    </div>
  )
}
