import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import RecentWork from "@/components/RecentWork";
import Visit from "@/components/Visit";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

function GoldRule() {
  return <div className="h-px bg-gold/20" />;
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <GoldRule />
        <Services />
        <GoldRule />
        <About />
        <GoldRule />
        <RecentWork />
        <GoldRule />
        <Visit />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
