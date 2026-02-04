'use client'

import { useEffect } from 'react'
import { useSlideContext } from '../components/Slideshow'
import styles from './Slide3.module.css'

export default function Slide3() {
  const { animationStep, setTotalSteps } = useSlideContext()

  useEffect(() => {
    setTotalSteps(6)
  }, [setTotalSteps])

  return (
    <div className={styles.slide}>
      {/* Step 0-1: Globe with ships colliding, then rain */}
      <div className={`${styles.globeSection} ${animationStep >= 0 ? styles.visible : ''} ${animationStep >= 2 ? styles.globeHide : ''}`}>
        <div className={styles.globe}>
          <div className={styles.globeSphere}>
            {/* Grid lines */}
            <div className={styles.gridLines}></div>
            {/* Continents simplified */}
            <div className={styles.continent1}></div>
            <div className={styles.continent2}></div>
          </div>
          
          {/* Route lines */}
          <svg className={styles.routes} viewBox="0 0 200 200">
            <path className={styles.route} d="M 30 100 Q 100 60 170 90" />
            <path className={styles.route} d="M 40 140 Q 100 120 160 130" />
            <path className={styles.route} d="M 50 70 Q 100 90 150 60" />
          </svg>
          
          {/* Ships */}
          <div className={`${styles.ship1} ${animationStep >= 0 ? styles.ship1Anim : ''}`}>
            <div className={styles.shipIcon}>🚢</div>
          </div>
          <div className={`${styles.ship2} ${animationStep >= 0 ? styles.ship2Anim : ''} ${animationStep >= 1 ? styles.ship2Hide : ''}`}>
            <div className={styles.shipIcon}>🚢</div>
          </div>
          
          {/* Collision exclamation */}
          <div className={`${styles.exclamation} ${animationStep >= 0 ? styles.exclamationAnim : ''} ${animationStep >= 1 ? styles.exclamationHide : ''}`}>
            !
          </div>
          
          {/* Rain effect - Step 1 */}
          <div className={`${styles.rainContainer} ${animationStep >= 1 ? styles.visible : ''} ${animationStep >= 2 ? styles.rainHide : ''}`}>
            {[...Array(20)].map((_, i) => (
              <div key={i} className={styles.raindrop} style={{
                left: `${10 + (i * 4)}%`,
                animationDelay: `${i * 0.1}s`
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Labels */}
        <div className={`${styles.notLabel} ${animationStep === 0 ? styles.visible : ''}`}>
          Not a routing issue
        </div>
        <div className={`${styles.notLabel} ${animationStep === 1 ? styles.visible : ''}`}>
          Not bad weather
        </div>
      </div>

      {/* Step 2: Underwater view of hull with fouling */}
      <div className={`${styles.underwaterView} ${animationStep >= 2 ? styles.visible : ''} ${animationStep >= 3 ? styles.moveLeft : ''} ${animationStep >= 5 ? styles.hideUnderwater : ''}`}>
        {/* Water background */}
        <div className={styles.waterBg}>
          {/* Light rays */}
          <div className={styles.lightRays}></div>
          
          {/* Bubbles */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.bubble} style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
              width: `${6 + (i % 3) * 4}px`,
              height: `${6 + (i % 3) * 4}px`,
            }}></div>
          ))}
        </div>
        
        {/* Hull from below - curved perspective */}
        <div className={styles.hullUnderside}>
          <div className={styles.hullCurve}></div>
          
          {/* Slime layer */}
          <div className={`${styles.slimeLayer} ${animationStep >= 2 ? styles.slimeSpread : ''}`}></div>
          
          {/* Fouling organisms hanging down */}
          <div className={styles.foulingOrganisms}>
            {/* Barnacle clusters */}
            <div className={`${styles.barnacleCluster} ${animationStep >= 2 ? styles.clusterGrow : ''}`} style={{left: '8%', animationDelay: '0.3s'}}>
              <div className={styles.barnacle1}></div>
              <div className={styles.barnacle2}></div>
              <div className={styles.barnacle3}></div>
            </div>
            <div className={`${styles.barnacleCluster} ${animationStep >= 2 ? styles.clusterGrow : ''}`} style={{left: '35%', animationDelay: '0.5s'}}>
              <div className={styles.barnacle1}></div>
              <div className={styles.barnacle2}></div>
            </div>
            <div className={`${styles.barnacleCluster} ${animationStep >= 2 ? styles.clusterGrow : ''}`} style={{left: '70%', animationDelay: '0.4s'}}>
              <div className={styles.barnacle1}></div>
              <div className={styles.barnacle2}></div>
              <div className={styles.barnacle3}></div>
            </div>
            
            {/* Seaweed/algae strands */}
            <div className={`${styles.seaweedStrand} ${animationStep >= 2 ? styles.seaweedSway : ''}`} style={{left: '20%', animationDelay: '0.2s'}}></div>
            <div className={`${styles.seaweedStrand} ${animationStep >= 2 ? styles.seaweedSway : ''}`} style={{left: '50%', animationDelay: '0.4s'}}></div>
            <div className={`${styles.seaweedStrand} ${animationStep >= 2 ? styles.seaweedSway : ''}`} style={{left: '80%', animationDelay: '0.6s'}}></div>
            
            {/* Mussels */}
            <div className={`${styles.mussel} ${animationStep >= 2 ? styles.musselGrow : ''}`} style={{left: '28%', animationDelay: '0.5s'}}></div>
            <div className={`${styles.mussel} ${animationStep >= 2 ? styles.musselGrow : ''}`} style={{left: '60%', animationDelay: '0.7s'}}></div>
            <div className={`${styles.mussel} ${animationStep >= 2 ? styles.musselGrow : ''}`} style={{left: '88%', animationDelay: '0.6s'}}></div>
          </div>
        </div>
        
        <div className={styles.zoomLabel}>It's slime.</div>
      </div>

      {/* Step 3: Biofouling info */}
      <div className={`${styles.infoSection} ${animationStep >= 3 ? styles.visible : ''}`}>
        <h2 className={styles.infoTitle}>Biofouling</h2>
        <p className={styles.infoDesc}>
          Algae, proteins, and microorganisms accumulate on the hull, layer by layer.
        </p>
        <div className={styles.statRow}>
          <div className={`${styles.stat} ${animationStep >= 3 ? styles.statAnim : ''}`}>
            <span className={styles.statNumber}>+10%</span>
            <span className={styles.statLabel}>fuel consumption</span>
          </div>
        </div>
      </div>

      {/* Step 4: $30B stat */}
      <div className={`${styles.costSection} ${animationStep >= 4 ? styles.visible : ''} ${animationStep >= 5 ? styles.costMoveLeft : ''}`}>
        <div className={styles.costNumber}>$30B</div>
        <div className={styles.costLabel}>annual cost to global shipping</div>
      </div>

      {/* Step 5: Other applications */}
      <div className={`${styles.applicationsSection} ${animationStep >= 5 ? styles.visible : ''}`}>
        <div className={styles.appTitle}>Fouling affects more than ships</div>
        <div className={styles.appGrid}>
          <div className={`${styles.appItem} ${animationStep >= 5 ? styles.appAnim1 : ''}`}>
            <div className={styles.appIconCircle}>
              <svg className={styles.appIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <span className={styles.appLabel}>Medical Implants</span>
          </div>
          <div className={`${styles.appItem} ${animationStep >= 5 ? styles.appAnim2 : ''}`}>
            <div className={styles.appIconCircle}>
              <svg className={styles.appIcon} viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <path d="M6 18a8 8 0 0 1 12 0M4 20a10 10 0 0 1 16 0M8 16a6 6 0 0 1 8 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className={styles.appLabel}>Biosensors</span>
          </div>
          <div className={`${styles.appItem} ${animationStep >= 5 ? styles.appAnim3 : ''}`}>
            <div className={styles.appIconCircle}>
              <svg className={styles.appIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 4h10M9 4v8l-4 7a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 19l-4-7V4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M8 16h8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className={styles.appLabel}>Filtration Membranes</span>
          </div>
          <div className={`${styles.appItem} ${animationStep >= 5 ? styles.appAnim4 : ''}`}>
            <div className={styles.appIconCircle}>
              <svg className={styles.appIcon} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.appLabel}>Energy Infrastructure</span>
          </div>
        </div>
        <div className={styles.tagline}>
          Anywhere biology touches engineered surfaces, it sticks.
        </div>
      </div>
    </div>
  )
}
