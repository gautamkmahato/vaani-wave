import Image from 'next/image';
import React from 'react';

const LanguageSupport = () => {
  const languages = [
    { code: 'en-US', name: 'English - USA', flag: 'https://flagcdn.com/w320/us.png' },
    { code: 'en-GB', name: 'English - UK', flag: 'https://flagcdn.com/w320/gb.png' },
    { code: 'pt', name: 'Portuguese', flag: 'https://flagcdn.com/w320/pt.png' },
    { code: 'zh', name: 'Chinese', flag: 'https://flagcdn.com/w320/cn.png' },
    { code: 'es', name: 'Spanish', flag: 'https://flagcdn.com/w320/es.png' },
    { code: 'fr', name: 'French', flag: 'https://flagcdn.com/w320/fr.png' },
    { code: 'de', name: 'German', flag: 'https://flagcdn.com/w320/de.png' },
    { code: 'ja', name: 'Japanese', flag: 'https://flagcdn.com/w320/jp.png' },
    { code: 'ru', name: 'Russian', flag: 'https://flagcdn.com/w320/ru.png' },
    { code: 'ar', name: 'Arabic', flag: 'https://flagcdn.com/w320/ae.png' },
    { code: 'ko', name: 'Korean', flag: 'https://flagcdn.com/w320/kr.png' },
    { code: 'id', name: 'Indonesian', flag: 'https://flagcdn.com/w320/id.png' },
    { code: 'it', name: 'Italian', flag: 'https://flagcdn.com/w320/it.png' },
    { code: 'nl', name: 'Dutch', flag: 'https://flagcdn.com/w320/nl.png' },
    { code: 'pl', name: 'Polish', flag: 'https://flagcdn.com/w320/pl.png' },
    { code: 'sr', name: 'Serbian', flag: 'https://flagcdn.com/w320/rs.png' },
  ];

  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="w-full max-w-[68rem] rounded-lg bg-[#090932] flex flex-col items-center text-center p-6 shadow-lg">
        {/* Title and Description */}
        <div className="space-y-4 mb-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Support in 29 Languages
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
            We support 29 languages and diverse accents—just select your preferred accent 
            and enter text in your language.
          </p>
        </div>

        {/* Language Grid (Responsive) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-6 w-full justify-center">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="group flex items-center justify-start p-2 rounded-lg border border-gray-600 bg-white/10 hover:bg-white/15 transition-colors duration-200 w-full"
              aria-label={`Select ${lang.name}`}
            >
              {/* Flag Image */}
              <Image 
                src={lang.flag} 
                alt={`${lang.name} flag`} 
                width={32} 
                height={20} 
                className="w-6 h-6 mr-2 rounded shadow"
              />

              {/* Language Name */}
              <span className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                {lang.name.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSupport;
