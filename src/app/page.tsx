import DisplayBest from "@/components/home/DisplayBest";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Map from "@/components/home/Map";
import Provides from "@/components/home/Provides";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />



      <div className="my-14">

        <Hero />
        <DisplayBest />
        <Map />
        <Provides />
      </div>
      <Footer />
    </>
  );
}
