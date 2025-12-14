import StaggeredMenu from './ui/StaggeredMenu';

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
      {/* Fixed Menu - doesn't affect layout */}
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
      
      {/* Hero Content - centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-black text-white tracking-widest mb-4 drop-shadow-2xl">
          WELCOME TO MY PORTFOLIO
        </h1>
        <p className="text-normal text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,1)] font-medium">
          Tornike Alkhanishvili • Modern, Growth-Oriented Frontend Developer
        </p>
      </div>
    </div>
  );
}