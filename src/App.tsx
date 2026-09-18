import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { WineVault } from './components/WineVault';
import { TasteFinder } from './components/TasteFinder';
import { MembershipSection } from './components/MembershipSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { WineEvent } from './data/events';
import { MembershipTier } from './data/membership';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<WineEvent | null>(null);
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);

  const handleOpenGeneralApply = () => {
    setSelectedEvent(null);
    setSelectedTier(null);
    setModalOpen(true);
  };

  const handleSelectEvent = (event: WineEvent) => {
    setSelectedEvent(event);
    setSelectedTier(null);
    setModalOpen(true);
  };

  const handleSelectTier = (tier: MembershipTier) => {
    setSelectedTier(tier);
    setSelectedEvent(null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
    setSelectedTier(null);
  };

  return (
    <div className="min-h-screen bg-velvet-950 text-neutral-200 selection:bg-gold-500 selection:text-wine-950 relative">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={handleOpenGeneralApply} />

      {/* Hero Section */}
      <main>
        <Hero onOpenApplyModal={handleOpenGeneralApply} />

        {/* About Section: Caroline Skovholt & The Story of 66° Cuvée */}
        <AboutSection onOpenApplyModal={handleOpenGeneralApply} />

        {/* Upcoming Wine Tastings & Events */}
        <EventsSection onSelectEvent={handleSelectEvent} />

        {/* Caroline's Wine Vault & Tasting Notes */}
        <WineVault />

        {/* Interactive "Find your wine style" Sommelier Quiz */}
        <TasteFinder onOpenApplyModal={handleOpenGeneralApply} />

        {/* Membership Tiers & Privileges */}
        <MembershipSection onSelectTier={handleSelectTier} />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Application & Registration Modal */}
      <ApplicationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialEvent={selectedEvent}
        initialTier={selectedTier}
      />
    </div>
  );
};

export default App;
