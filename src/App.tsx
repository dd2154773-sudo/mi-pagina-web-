import React, { useState, useEffect } from 'react';
import { ScreenId } from './types';
import { GothicHeader } from './components/GothicHeader';
import { GothicNavbar } from './components/GothicNavbar';
import { AboutScreen } from './components/AboutScreen';
import { HomeScreen } from './components/HomeScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { MotherhoodScreen } from './components/MotherhoodScreen';
import { ContactScreen } from './components/ContactScreen';

export default function App() {
  // Default to 'sobre-mi' to match the user's uploaded reference screen exactly on first view
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('sobre-mi');

  useEffect(() => {
    // Scroll to top whenever screen changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  return (
    <div className="min-h-screen w-full bg-[#131316] text-[#e5e1e6] flex flex-col items-center justify-start antialiased selection:bg-[#800020] selection:text-[#ffdada] pb-safe">
      {/* Container wrapper for ultra-wide screens to maintain elegant mobile/tablet proportions */}
      <div className="w-full max-w-md min-h-screen bg-[#131316] flex flex-col relative shadow-[0_0_50px_rgba(0,0,0,0.9)] border-x border-[#584141]/20">
        {/* Fixed Gothic Header */}
        <GothicHeader
          currentScreen={currentScreen}
          onNavigate={(screen) => setCurrentScreen(screen)}
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full pt-16 pb-20">
          {currentScreen === 'sobre-mi' && (
            <AboutScreen onNavigate={(screen) => setCurrentScreen(screen)} />
          )}
          {currentScreen === 'inicio' && (
            <HomeScreen onNavigate={(screen) => setCurrentScreen(screen)} />
          )}
          {currentScreen === 'proyectos-y-codigo' && <ProjectsScreen />}
          {currentScreen === 'maternidad-y-vida' && <MotherhoodScreen />}
          {currentScreen === 'contacto' && <ContactScreen />}
        </main>

        {/* Fixed Gothic Bottom Navigation */}
        <GothicNavbar
          currentScreen={currentScreen}
          onNavigate={(screen) => setCurrentScreen(screen)}
        />
      </div>
    </div>
  );
}
