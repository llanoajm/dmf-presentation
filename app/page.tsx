'use client'

import Slideshow from './components/Slideshow'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import SlideRQ from './slides/SlideRQ'
import Slide8 from './slides/Slide8'
import SlideThankYou from './slides/SlideThankYou'

export default function Home() {
  const slides = [
    <Slide1 key="slide1" />,
    <Slide2 key="slide2" />,
    <Slide3 key="slide3" />,
    <Slide4 key="slide4" />,
    <Slide5 key="slide5" />,
    <Slide6 key="slide6" />,
    <Slide7 key="slide7" />,
    <SlideRQ key="slideRQ" />,
    <Slide8 key="slide8" />,
    <SlideThankYou key="slideThankYou" />,
  ]

  return <Slideshow slides={slides} />
}
