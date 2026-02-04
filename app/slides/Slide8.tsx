'use client'

import { useEffect } from 'react'
import { useSlideContext } from '../components/Slideshow'
import styles from './Slide8.module.css'
import Image from 'next/image'

export default function Slide8() {
  const { animationStep, setTotalSteps } = useSlideContext()

  useEffect(() => {
    setTotalSteps(5)
  }, [setTotalSteps])

  return (
    <div className={styles.slide}>
      {/* Title - always visible */}
      <div className={`${styles.titleSection} ${animationStep >= 0 ? styles.visible : ''}`}>
        <h1 className={styles.mainTitle}>Methodology</h1>
      </div>

      {/* Step 0: GIF centered as hero */}
      <div className={`${styles.gifContainer} ${animationStep >= 0 ? styles.visible : ''} ${animationStep >= 1 ? styles.gifShrink : ''} ${animationStep >= 4 ? styles.hideAll : ''}`}>
        <Image 
          src="/assets/droplet.gif" 
          alt="Digital Microfluidics" 
          width={420}
          height={420}
          className={styles.dropletGif}
          unoptimized
        />
        <div className={styles.gifLabel}>LLM-controlled droplet experiments</div>
      </div>

      {/* Step 1: The core loop - appears below GIF */}
      <div className={`${styles.loopSection} ${animationStep >= 1 ? styles.visible : ''} ${animationStep >= 4 ? styles.hideAll : ''}`}>
        <div className={styles.loopFlow}>
          <div className={`${styles.loopItem} ${animationStep >= 1 ? styles.loopAnim : ''}`} style={{animationDelay: '0s'}}>
            <span className={styles.loopNum}>1</span>
            <span className={styles.loopText}>Model proposes actions</span>
          </div>
          <div className={`${styles.loopDivider} ${animationStep >= 1 ? styles.dividerAnim : ''}`} style={{animationDelay: '0.2s'}}>→</div>
          <div className={`${styles.loopItem} ${animationStep >= 1 ? styles.loopAnim : ''}`} style={{animationDelay: '0.3s'}}>
            <span className={styles.loopNum}>2</span>
            <span className={styles.loopText}>System executes</span>
          </div>
          <div className={`${styles.loopDivider} ${animationStep >= 1 ? styles.dividerAnim : ''}`} style={{animationDelay: '0.5s'}}>→</div>
          <div className={`${styles.loopItem} ${animationStep >= 1 ? styles.loopAnim : ''}`} style={{animationDelay: '0.6s'}}>
            <span className={styles.loopNum}>3</span>
            <span className={styles.loopText}>Model learns from feedback</span>
          </div>
        </div>
        <div className={`${styles.loopReturn} ${animationStep >= 1 ? styles.returnAnim : ''}`}>
          <svg viewBox="0 0 400 30">
            <path d="M 380 5 C 395 15, 395 25, 380 25 L 20 25 C 5 25, 5 15, 15 10" 
                  fill="none" stroke="#0066FF" strokeWidth="2" strokeDasharray="6,4"/>
            <polygon points="10,5 20,10 15,15" fill="#0066FF"/>
          </svg>
        </div>
      </div>

      {/* Step 2: The real goal */}
      <div className={`${styles.goalSection} ${animationStep >= 2 ? styles.visible : ''} ${animationStep >= 4 ? styles.hideAll : ''}`}>
        <div className={styles.goalCard}>
          <div className={styles.goalHeader}>The Goal</div>
          <div className={styles.goalContent}>
            <div className={styles.notGoal}>
              <span className={styles.strikeThrough}>"Automate polymer discovery"</span>
            </div>
            <div className={styles.yesGoal}>
              Build a substrate where <span className={styles.emphasis}>learning from interaction</span> is possible
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Downstream */}
      <div className={`${styles.downstreamSection} ${animationStep >= 3 ? styles.visible : ''} ${animationStep >= 4 ? styles.hideAll : ''}`}>
        <div className={styles.downstreamContent}>
          <span className={styles.downstreamText}>Explore downstream application for</span>
          <span className={styles.downstreamHighlight}>Antifouling polymers</span>
        </div>
      </div>

      {/* Step 4: Tech Stack - replaces everything */}
      <div className={`${styles.techStackSection} ${animationStep >= 4 ? styles.visible : ''}`}>
        {/* Hardware */}
        <div className={styles.hardwareSection}>
          <Image 
            src="/assets/dropbot.png" 
            alt="Dropbot DMF Platform" 
            width={340}
            height={255}
            className={styles.dropbotImage}
          />
          <div className={styles.hardwareLabel}>DropBot DMF Platform</div>
        </div>

        {/* Divider */}
        <div className={styles.techDivider}></div>

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
          <div className={styles.logoText}>Anthropic</div>
          <div className={styles.logoDot}></div>
          <div className={styles.logoText}>Qwen</div>
          <div className={styles.logoDot}></div>
          <div className={styles.logoText}>Llama</div>
        </div>
      </div>
    </div>
  )
}
