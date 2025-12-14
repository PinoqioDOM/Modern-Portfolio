import LiquidEther from './components/ui/LiquidEther';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <Hero />
      </div>
    </div>
  )
}

export default App