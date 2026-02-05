'use client'

import { useState, useEffect } from 'react'
import styles from './presenter.module.css'

// Speaker notes for each slide
const speakerNotes: { [key: number]: string } = {
  1: "Hello ure not supposed to see this.",
  2: "This is the Evergreen. It's one of the largest cargo ships in the world. About four football fields long. Over two hundred thousand tons when fully loaded. On a normal trip through the Suez Canal, it carries everything from grain to electronics to medical supplies. Roughly twelve percent of global trade passes through that canal. And when a ship like this slows down, the world notices. But what's strange is why ships like this slow down.",
  3: "But it's usually not a routing issue. Nor fuel quality. It's not even bad weather. It's slime. Over time, algae, proteins, and microorganisms begin to stick to the hull. Layer by layer, they form what's called biofouling. It looks harmless. But hydrodynamically, it's a disaster. That thin biological film increases drag. And that drag forces ships to burn about ten percent more fuel. Across the global shipping industry, that adds up to roughly thirty billion dollars every year. And shipping is just the beginning. The same fouling processes degrade medical implants, biosensors, filtration membranes, and energy infrastructure. Anywhere biology touches engineered surfaces, it sticks.",
  4: "For decades, one of the best defenses we've had is antifouling polymer coatings — materials designed to resist protein adsorption before organisms can latch on. The problem is, we don't have nearly enough of them. Not because they're impossible to invent, but because discovering them is slow. Polymer discovery happens through massive trial and error. Huge chemical design spaces. Manual experiments. Long delays between decisions and results. Even today, the dominant workflow looks like this: design a batch of materials, test them, wait weeks or months, and repeat.",
  5: "Which brings up a bigger question. Why hasn't artificial intelligence transformed materials discovery the way it transformed software, games, or robotics? The usual answer is that materials are just harder. But I want to argue something else. The bottleneck isn't the model. It's the environment in which it is deployed, the environment it learns from. In domains where AI has made its biggest gains, the environment has three things: fast feedback, clear causality, and full visibility into what's happening. Software has that. Games have that. Materials experiments don't. Actions are slow. Outcomes are noisy. And it's often unclear which decision caused which result.",
  6: "So instead of asking how to build better predictive models, this project asks a different question: What if we redesigned the experimental environment itself? To see what that might look like, it helps to step outside of materials science for a moment. Think about how large language models learn to code. When an LLM writes code, it doesn't just generate text and hope for the best. It interacts with a highly structured environment. The code runs. It compiles—or it doesn't. Tests pass—or they fail. Every action produces immediate, specialized feedback. This is what reinforcement learning from human feedback looks like in practice. Not vague signals. Not delayed rewards. But clear accept or reject signals, embedded directly in the workflow. And crucially, the environment is digital. The model can try something, see what breaks, adjust, and try again. Over and over. Long horizon tasks become learnable because feedback is fast, local, and legible.",
  7: "Materials experiments don't work that way. There's no compile step for chemistry. No unit tests for polymers. And no clean separation between an action and its outcome. Unless we change the interface.",
  8: "This is where digital microfluidics comes in. Digital microfluidics allows experiments to be carried out not in beakers or flasks, but in tiny, isolated droplets. Each droplet can be dispensed, split, merged, and routed—programmatically. In other words, experiments become sequences of discrete actions. Move this droplet. Split it here. Merge these two. Heat. Measure. Observe. Each step produces immediate feedback. Each droplet is isolated. And the full state of the system is visible at all times. This begins to look much less like a traditional wet lab—and much more like a programmable environment.",
  9: "The idea behind this project is to take that seriously. I want to deploy large language models not as predictors of polymer properties, but as planners inside a digital microfluidics environment. The model proposes droplet-level actions. The system executes them. And the model learns from concrete feedback—success, failure, constraint violations, efficiency. Over time, this allows the model to improve at long-horizon experimental planning. The goal isn't to magically automate polymer discovery. It's to build an experimental substrate where learning from interaction is even possible. And if we can do that, then antifouling polymer discovery becomes a downstream application—not a bottleneck.",
  10: "Thank you! Open for questions.",
}

export default function PresenterView() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [time, setTime] = useState(new Date())
  const [lastSync, setLastSync] = useState(Date.now())

  // Listen for slide changes from main window
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'currentSlide' && e.newValue) {
        setCurrentSlide(parseInt(e.newValue))
        setLastSync(Date.now())
      }
    }
    
    // Check for updates (polling as backup)
    const interval = setInterval(() => {
      const slide = localStorage.getItem('currentSlide')
      if (slide) {
        const newSlide = parseInt(slide)
        if (newSlide !== currentSlide) {
          setCurrentSlide(newSlide)
          setLastSync(Date.now())
        }
      }
    }, 100)

    window.addEventListener('storage', handleStorage)
    return () => {
      window.removeEventListener('storage', handleStorage)
      clearInterval(interval)
    }
  }, [currentSlide])

  // Update time (also triggers re-render to update sync status)
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const isSynced = Date.now() - lastSync < 5000

  const totalSlides = Object.keys(speakerNotes).length

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.slideInfo}>
          Slide {currentSlide} of {totalSlides}
        </div>
        <div className={styles.clock}>
          {time.toLocaleTimeString()}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.notesSection}>
          <div className={styles.notesLabel}>Speaker Notes</div>
          <div className={styles.notes}>
            {speakerNotes[currentSlide] || "No notes for this slide."}
          </div>
        </div>

        <div className={styles.navigation}>
          <div className={styles.navLabel}>Quick Nav</div>
          <div className={styles.navGrid}>
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                className={`${styles.navButton} ${currentSlide === i + 1 ? styles.active : ''}`}
                onClick={() => {
                  setCurrentSlide(i + 1)
                  localStorage.setItem('currentSlide', String(i + 1))
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.instructions}>
        <span className={styles.syncDot} style={{ 
          background: isSynced ? '#00c853' : '#ff9800' 
        }}></span>
        {isSynced ? 'Synced' : 'Waiting for main presentation...'} 
        <span className={styles.separator}>•</span>
        Open <code>/</code> fullscreen on projector, keep it focused for clicker
      </div>
    </div>
  )
}
