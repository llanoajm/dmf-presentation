'use client'

import { useState, useEffect, useRef, ReactNode, createContext, useContext } from 'react'
import styles from './Slideshow.module.css'

// Context to share animation step with slides
interface SlideContextType {
  animationStep: number
  totalSteps: number
  setTotalSteps: (steps: number) => void
}

export const SlideContext = createContext<SlideContextType>({
  animationStep: 0,
  totalSteps: 1,
  setTotalSteps: () => {},
})

export const useSlideContext = () => useContext(SlideContext)

interface SlideshowProps {
  slides: ReactNode[]
}

export default function Slideshow({ slides }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animationStep, setAnimationStep] = useState(0)
  const [totalSteps, setTotalSteps] = useState(1)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const lastAdvanceRef = useRef(0)

  // Reset animation step when slide changes
  // Note: totalSteps is set by each slide's useEffect, don't reset it here
  useEffect(() => {
    setAnimationStep(0)
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isAdvanceKey = e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' '
      const isBackKey = e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp'

      // Prevent default behavior for presentation keys
      if (isAdvanceKey || isBackKey) {
        e.preventDefault()
      }

      if (isTransitioning) return

      // Debounce rapid repeat from clickers/keydown auto-repeat
      if (isAdvanceKey || isBackKey) {
        const now = Date.now()
        if (now - lastAdvanceRef.current < 250) return
        lastAdvanceRef.current = now
      }

      // Next: Right Arrow, Down Arrow, Page Down, Space
      if (isAdvanceKey) {
        // If there are more animation steps, advance animation
        if (animationStep < totalSteps - 1) {
          setAnimationStep(prev => prev + 1)
        } 
        // Otherwise, go to next slide
        else if (currentSlide < slides.length - 1) {
          setDirection('forward')
          setIsTransitioning(true)
          setTimeout(() => {
            setCurrentSlide(prev => prev + 1)
            setIsTransitioning(false)
          }, 50)
        }
      }
      
      // Previous: Left Arrow, Up Arrow, Page Up
      if (isBackKey) {
        // If we're past step 0, go back an animation step
        if (animationStep > 0) {
          setAnimationStep(prev => prev - 1)
        }
        // Otherwise, go to previous slide
        else if (currentSlide > 0) {
          setDirection('backward')
          setIsTransitioning(true)
          setTimeout(() => {
            setCurrentSlide(prev => prev - 1)
            setIsTransitioning(false)
          }, 50)
        }
      }

      // Home key - go to first slide
      if (e.key === 'Home') {
        setDirection('backward')
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSlide(0)
          setIsTransitioning(false)
        }, 50)
      }

      // End key - go to last slide
      if (e.key === 'End') {
        setDirection('forward')
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSlide(slides.length - 1)
          setIsTransitioning(false)
        }, 50)
      }

      // Escape key - exit fullscreen
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen()
        }
      }

      // F key - toggle fullscreen
      if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen()
        } else {
          document.exitFullscreen()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, slides.length, isTransitioning, animationStep, totalSteps])

  return (
    <SlideContext.Provider value={{ animationStep, totalSteps, setTotalSteps }}>
      <div className={styles.container}>
        <div className={styles.slideContainer}>
          <div 
            className={`${styles.slide} ${isTransitioning ? styles.transitioning : ''} ${
              direction === 'forward' ? styles.slideForward : styles.slideBackward
            }`}
          >
            {slides[currentSlide]}
          </div>
        </div>
        
        {/* Slide counter */}
        <div className={styles.counter}>
          {currentSlide + 1}
        </div>
      </div>
    </SlideContext.Provider>
  )
}
