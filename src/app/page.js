import Banner from "@/components/share/Banner/Banner";
import ads1 from "@/asset/ads1.jpg";
import Title from "@/components/share/Title/Title";
import Whoarewe from "@/components/share/HomeSection/Whoarewe/Whoarewe";
import DiscoverComfort from "@/components/share/HomeSection/DiscoverComfort/DiscoverComfort";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner src={ads1} />
      <Whoarewe />
      <DiscoverComfort />
    </div>
  );
}
