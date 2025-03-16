import vaani from '../../public/assets/vaani.png';
import play from '../../public/assets/play.png';
import labs from '../../public/assets/11labs.png';
import amazon from '../../public/assets/amazon.png';
import Image from 'next/image';

const ttsPlatforms = [
  {
    name: "Vaaniwave AI",
    logo: vaani,
    voices: "100+",
    minutes: "Unlimited (Self-hosted)",
    pricing: "Self-hosted / Custom",
    speed: "Fast",
    languages: "50+",
    pros: ["Self-hosted", "Realistic voices", "No API limits"],
  },
  {
    name: "ElevenLabs",
    logo: labs,
    voices: "90+",
    minutes: "10,000+ (Paid)",
    pricing: "$5 - $330/month",
    speed: "Fast",
    languages: "30+",
    pros: ["High-quality voices", "Custom voice cloning"],
  },
  {
    name: "Play.ht",
    logo: play,
    voices: "800+",
    minutes: "3000+ (Paid)",
    pricing: "$31 - $99/month",
    speed: "Medium",
    languages: "140+",
    pros: ["Large voice library", "Ultra-realistic AI voices"],
  },
  {
    name: "Amazon Polly",
    logo: amazon,
    voices: "50+",
    minutes: "Pay per usage",
    pricing: "$4 per 1M chars",
    speed: "Medium",
    languages: "30+",
    pros: ["Low cost", "Cloud-based"],
  },
];

export default function ComparisonTable() {
  return (
    <div className="text-white flex flex-col rounded-lg shadow-lg items-center p-6 mb-24 mt-12 w-full " style={{ backgroundColor: '#090932' }}>
      <h1 className="text-3xl md:text-4xl font-serif text-center mb-6">
        Compare Vaaniwave AI with Top TTS Platforms
      </h1>

      {/* Desktop Table View */}
      <div className="hidden md:block w-full max-w-6xl overflow-x-auto">
        <table className="w-full border border-gray-700 text-left">
          <thead>
            <tr style={{ backgroundColor: '#232249' }}>
              <th className="p-4 border border-gray-700">Platform</th>
              <th className="p-4 border border-gray-700">Voices</th>
              <th className="p-4 border border-gray-700">Minutes</th>
              <th className="p-4 border border-gray-700">Pricing</th>
              <th className="p-4 border border-gray-700">Speed</th>
              <th className="p-4 border border-gray-700">Languages</th>
              <th className="p-4 border border-gray-700">Pros</th>
            </tr>
          </thead>
          <tbody>
            {ttsPlatforms.map((platform, index) => (
              <tr key={index} className="border border-gray-700" style={{ backgroundColor: '#17162d' }}>
                <td className="p-6 flex items-center gap-3">
                  <Image src={platform.logo} alt={platform.name} className="w-8 h-8 rounded-full" />
                  <span className="font-semibold">{platform.name}</span>
                </td>
                <td className="p-4 border border-gray-700">{platform.voices}</td>
                <td className="p-4 border border-gray-700">{platform.minutes}</td>
                <td className="p-4 border border-gray-700">{platform.pricing}</td>
                <td className="p-4 border border-gray-700">{platform.speed}</td>
                <td className="p-4 border border-gray-700">{platform.languages}</td>
                <td className="p-4 border border-gray-700">{platform.pros.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-6 w-full max-w-6xl">
        {ttsPlatforms.map((platform, index) => (
          <div key={index} className="bg-[#17162d] p-5 rounded-lg shadow-md border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <Image src={platform.logo} alt={platform.name} className="w-10 h-10 rounded-full" />
              <h2 className="text-xl font-semibold">{platform.name}</h2>
            </div>
            <p><strong>Voices:</strong> {platform.voices}</p>
            <p><strong>Minutes:</strong> {platform.minutes}</p>
            <p><strong>Pricing:</strong> {platform.pricing}</p>
            <p><strong>Speed:</strong> {platform.speed}</p>
            <p><strong>Languages:</strong> {platform.languages}</p>
            <p><strong>Pros:</strong> {platform.pros.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
