import DisplayBest from "@/components/home/DisplayBest";
import Hero from "@/components/home/Hero";
import Map from "@/components/home/Map";
import Provides from "@/components/home/Provides";

export default function Home() {
  return (
    <div className="my-14">
      <Hero />
      <DisplayBest />
      <Map />
      <Provides />
    </div>
  );
}
