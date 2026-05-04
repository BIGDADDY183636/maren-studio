import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import RecentWork from "@/components/RecentWork";
import Visit from "@/components/Visit";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <RecentWork />
        <Visit />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
