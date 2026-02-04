'use client'

import { useEffect, useState, useRef } from 'react'
import { useSlideContext } from '../components/Slideshow'
import styles from './SlideThankYou.module.css'
import Image from 'next/image'

export default function SlideThankYou() {
  const { setTotalSteps } = useSlideContext()
  const [ascii, setAscii] = useState<string>('')
  const frameRef = useRef<number>(0)
  const angleRef = useRef({ A: 0, B: 0 })

  useEffect(() => {
    setTotalSteps(1)
  }, [setTotalSteps])

  // ASCII sphere
  useEffect(() => {
    const width = 60
    const height = 30
    const chars = '.,-~:;=!*#$@'
    
    const renderFrame = () => {
      const A = angleRef.current.A
      const B = angleRef.current.B
      
      const output: string[] = new Array(width * height).fill(' ')
      const zBuffer: number[] = new Array(width * height).fill(0)
      
      const R = 12
      const K1 = 30
      const K2 = 18
      
      for (let phi = 0; phi < 6.28; phi += 0.06) {
        for (let theta = 0; theta < 3.14; theta += 0.035) {
          const sinPhi = Math.sin(phi)
          const cosPhi = Math.cos(phi)
          const sinTheta = Math.sin(theta)
          const cosTheta = Math.cos(theta)
          const sinA = Math.sin(A)
          const cosA = Math.cos(A)
          const sinB = Math.sin(B)
          const cosB = Math.cos(B)
          
          const x = R * sinTheta * cosPhi
          const y = R * sinTheta * sinPhi
          const z = R * cosTheta
          
          const y1 = y * cosA - z * sinA
          const z1 = y * sinA + z * cosA
          const x2 = x * cosB - y1 * sinB
          const y2 = x * sinB + y1 * cosB
          const z2 = z1
          
          const ooz = 1 / (K1 + z2)
          const xp = Math.floor(width / 2 + K2 * ooz * x2)
          const yp = Math.floor(height / 2 - K2 * ooz * y2 * 0.5)
          
          const nx = sinTheta * cosPhi
          const ny = sinTheta * sinPhi
          const nz = cosTheta
          const ny1 = ny * cosA - nz * sinA
          const nz1 = ny * sinA + nz * cosA
          const nx2 = nx * cosB - ny1 * sinB
          
          const L = nx2 * 0.5 + ny1 * 0.5 + nz1 * 0.7
          
          if (L > 0 && xp >= 0 && xp < width && yp >= 0 && yp < height) {
            const idx = yp * width + xp
            if (ooz > zBuffer[idx]) {
              zBuffer[idx] = ooz
              const luminanceIndex = Math.floor(L * (chars.length - 1))
              output[idx] = chars[Math.min(luminanceIndex, chars.length - 1)]
            }
          }
        }
      }
      
      let result = ''
      for (let j = 0; j < height; j++) {
        for (let i = 0; i < width; i++) {
          result += output[j * width + i]
        }
        result += '\n'
      }
      
      setAscii(result)
      angleRef.current.A += 0.025
      angleRef.current.B += 0.018
      frameRef.current = requestAnimationFrame(renderFrame)
    }
    
    renderFrame()
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  return (
    <div className={styles.slide}>
      {/* Thank you with sphere to the side */}
      <div className={styles.header}>
        <h1 className={styles.thankYou}>Thank you</h1>
        <pre className={styles.asciiSphere}>{ascii}</pre>
      </div>
      
      <Image 
        src="/assets/evergreen_nice.jpeg" 
        alt="Cargo ship in Suez Canal" 
        width={800}
        height={400}
        className={styles.image}
      />
    </div>
  )
}
