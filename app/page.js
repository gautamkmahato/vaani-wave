import AudioQuote from "./_components/AudioQuote";
import ComparisonTable from "./_components/ComparisonTable";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import LanguageSupport from "./_components/LanguageSupport";
import TextCorrection from "./_components/TextCorrection";
import VoiceGenerator from "./_components/VoiceGenerator";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="mt-[-40px] bg-gradient-to-b from-[#24244b] to-[#090932] overflow-hidden">
        <div className="flex items-center justify-center p-6">
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
    </>
  );
}
