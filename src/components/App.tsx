// START:App
export default function App() {
  return (
    <div className="bg-white">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <Header />
      <main className="pt-24">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LearnMoreSection />
        <ReviewsSection />
        <GettingStartedSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
// END:App
