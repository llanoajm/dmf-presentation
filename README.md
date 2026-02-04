# Custom Presentation Slideshow

A professional presentation slideshow built with Next.js that works with presentation clickers!

## Features

- 🎯 **Clicker Support** - Works with any standard presentation clicker
- ⌨️ **Keyboard Navigation** - Arrow keys, Space, Page Up/Down, Home/End
- 🎨 **PowerPoint-like Transitions** - Smooth slide animations
- 🖥️ **Fullscreen Mode** - Press 'F' to enter/exit fullscreen
- 💎 **Fully Customizable** - Easy to modify and personalize

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Press 'F' to enter fullscreen mode for your presentation

## Keyboard Controls

- **→ / Space / Page Down**: Next slide
- **← / Page Up**: Previous slide
- **Home**: Go to first slide
- **End**: Go to last slide
- **F**: Toggle fullscreen
- **ESC**: Exit fullscreen

## Adding More Slides

1. Create a new slide component in `app/slides/` (e.g., `Slide3.tsx`)
2. Import and add it to the slides array in `app/page.tsx`

Example:
```typescript
import Slide3 from './slides/Slide3'

const slides = [
  <Slide1 key="slide1" />,
  <Slide2 key="slide2" />,
  <Slide3 key="slide3" />, // Your new slide
]
```

## Customization

- **Colors**: Edit `app/components/Slideshow.module.css` for background gradients
- **Slide Styling**: Edit `app/slides/Slides.module.css` for slide content styling
- **Transitions**: Modify animations in `Slideshow.module.css`

## Building for Production

```bash
npm run build
npm start
```

Enjoy your presentation! 🚀
