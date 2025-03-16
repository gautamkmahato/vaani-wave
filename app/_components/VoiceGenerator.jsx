import { ChevronDown, Globe, User } from "lucide-react";

export default function VoiceGenerator() {
  return (
    <div className="bg-gradient-to-br from-[#17162d] to-[#232249] flex rounded-xl shadow-lg p-4 md:p-6">
      <div className="w-full space-y-6 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#17162d] to-[#232249] backdrop-blur-xl relative">
        {/* Voice Type Input */}
        <textarea
          className="w-full p-4 bg-white/10 hover:bg-white/15 min-h-12 resize-none text-white rounded-lg text-sm md:text-base"
          placeholder="Type here..."
          wrap="soft"
        />

        {/* Dropdown Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Voice Selection Dropdown */}
          <button className="w-full md:w-auto flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-white">Sebastian</span>
            </div>
            <ChevronDown className="w-5 h-5 text-white" />
          </button>

          {/* Language Dropdown */}
          <button className="w-full md:w-auto flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-white" />
              <span className="text-white">Generate Audio</span>
            </div>
          </button>
        </div>

        {/* Title and Description */}
        <div className="space-y-2 pt-4 text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Create with the most powerful AI Voice Generator
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Control the tone, emotion, punctuation, dialect, and emphasis to convey your message using AI voices any way
            you like.
          </p>
        </div>

        {/* Stars Background Effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
