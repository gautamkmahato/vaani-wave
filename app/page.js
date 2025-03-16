import Link from "next/link";
import AudioQuote from "./_components/AudioQuote";
import ComparisonTable from "./_components/ComparisonTable";
import FeatureList from "./_components/FeatureList";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import LanguageSupport from "./_components/LanguageSupport";
import TextCorrection from "./_components/TextCorrection";
import VoiceGenerator from "./_components/VoiceGenerator";
import Pricing from "./_components/Pricing";
import FAQSection from "./_components/FAQSection";
import Footer from "./_components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="mt-[-40px] bg-gradient-to-b from-[#24244b] to-[#090932] overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-6xl p-6 rounded-2xl mx-auto">
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
              {/* Left Column (Voice Generator) - 100% on small, 60% on medium+ */}
              <div className="md:col-span-6 w-full">
                <VoiceGenerator />
              </div>

              {/* Right Column (Audio Quote) - 100% on small, 40% on medium+ */}
              <div className="md:col-span-4 w-full">
                <AudioQuote />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ComparisonTable />
      <LanguageSupport />
      <TextCorrection />

      <div className="mt-[-40px] bg-gradient-to-b from-[#090932] to-[#24244b]">
        <div className="flex items-center justify-center mt-12">
          <div className="w-full max-w-6xl p-6 rounded-2xl">
            {/* Responsive Two-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column (Text Section) */}
              <div className="flex justify-center">
                <div className="bg-[#17162d] rounded-lg shadow-lg flex items-center justify-center px-6 md:px-8 py-16 md:py-20 w-full">
                  <div className="max-w-4xl w-full text-center">
                    <h1 className="text-white text-3xl md:text-4xl font-serif mb-4 max-w-2xl mx-auto">
                      AI Voice that aligns with your brand identity
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-7">
                      Change the emotion of your stories by introducing the real-sounding voices with the pace, emotion, and pausing you want it to speak in.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/" className="bg-[#423de3] hover:bg-[#3b37cc] text-white rounded-lg px-6 py-3 text-sm transition-colors shadow-lg text-center">
                        Generate for Free
                      </Link>
                      <Link href="/" className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-6 py-3 text-sm transition-colors shadow-lg text-center">
                        Playground
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Feature List) */}
              <div className="flex flex-col justify-center">
                <FeatureList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pricing />
      <FAQSection />
      <Footer />

    </>
  );
}
