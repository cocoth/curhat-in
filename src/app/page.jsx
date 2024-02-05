import Navbar from "@/components/navbar/Navbar";
import LandingPage from "@/components/pages/LandingPage";
import Image from "next/image";
import '@/css/style.css'
import IntroductionPage from "@/components/pages/IntroductionPage";

export default function Home() {
  return (
    <main>
      <section className="main-bg">
        <div >
          <Navbar />
        </div>
        <div>
          <LandingPage />
        </div>
      </section>
      <section>
        <IntroductionPage/>
      </section>

    </main>
  );
}
