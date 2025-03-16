import AudioQuote from "./_components/AudioQuote";
import ComparisonTable from "./_components/ComparisonTable";
import Hero from "./_components/Hero";
import VoiceGenerator from "./_components/VoiceGenerator";


export default function Home() {
  return (
    <>
      <Hero />
      <div
                className="mt-[-40px] bg-gradient-to-b from-[#24244b] to-[#090932]"
              >
              <div className="flex items-center justify-center p-6">
                  <div className="w-full max-w-6xl  p-6 rounded-2xl">
                  {/* Two-column grid */}
                  <div className="grid grid-cols-10 gap-4">
                      {/* Left Column (70%) */}
                      <div className="col-span-6">
                      <VoiceGenerator />
                      </div>
      
                      {/* Right Column (30%) */}
                      <div className="col-span-4 flex flex-col justify-between">
                      <AudioQuote />
                      </div>
                  </div>
                  </div>
              </div>
            </div>
      <ComparisonTable />
    </>
  );
}
