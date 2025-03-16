import { Save } from "lucide-react";

export default function TextCorrection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-[68rem] w-full bg-[#17162d] shadow-lg rounded-xl px-6 sm:px-8 py-10 sm:py-12">
        {/* Header Section */} 
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-serif mb-4 max-w-2xl mx-auto">
            Gain full control over how words are said
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Respelling lets you format a word within the Studio text editor that tells the AI exactly what sound each syllable should make.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Full Text Section */}
          <div className="bg-white/10 hover:bg-white/15 rounded-xl p-6">
            <h2 className="text-gray-400 text-sm mb-3">Full text</h2>
            <div className="text-white">
              <span className="text-blue-400">Benjamins</span> be rollin&apos; in with that &apos;yoo my name is&apos; like a broken record. Frequency check?
            </div>
          </div>

          {/* Find Words Section */}
          <div className="bg-white/10 hover:bg-white/15 rounded-xl p-6">
            <h2 className="text-gray-400 text-sm mb-3">Find words</h2>
            <div className="space-y-4">
              {/* Input Field */}
              <span className="block w-full bg-[#1a1b35] text-white rounded-lg p-3 outline-none border border-gray-700 focus:border-purple-500 transition-colors">
                Benjamin
              </span>

              {/* Replace with Label */}
              <div className="text-gray-400 text-sm">Replace with</div>

              {/* Replacement Input */}
              <span className="block w-full bg-[#1a1b35] text-white rounded-lg p-3 outline-none border border-gray-700 focus:border-purple-500 transition-colors">
                Benyamin
              </span>

              {/* Save Button */}
              <div className="flex">
                <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg px-4 py-2 text-sm transition-colors">
                  <Save className="w-4 h-4" />
                  Save to library
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
