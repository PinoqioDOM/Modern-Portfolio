import StaggeredMenu from './ui/StaggeredMenu';
import TextType from './ui/TextType';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">      
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        accentColor="purple"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <TextType 
          text={["WELCOME TO MY PORTFOLIO"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={false}
          cursorCharacter="|"
          loop={false}
          className='text-7xl font-black tracking-wider drop-shadow-2xl bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-clip-text text-transparent animate-shimmer bg-[length:300%_auto]'
        />
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse"></div>
        </div>
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </div>
  );
}