import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImageGallery from "@/components/ImageGallery";
import YouTube from "@/components/YouTube";
import Donation from "@/components/Donation";
import Volunteer from "@/components/Volunteer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <ImageGallery />
      <YouTube />
      <Donation />
      <Volunteer />
      <Footer />
    </main>
  );
}
