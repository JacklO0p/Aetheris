import FirstSection from "@/components/template/home/first-section";
import MainSection from "@/components/template/home/main-section";

export default function Home() {
  return (
    <div
      id="HomePage"
      className="w-full h-screen container mx-auto px-8 bg-white text-black "
    >
      <FirstSection />
      <MainSection />
    </div>
  );
}
