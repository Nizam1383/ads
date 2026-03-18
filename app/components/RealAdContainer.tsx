'use client';

import { useRef, useMemo } from 'react';
import Script from 'next/script';

interface RealAdContainerProps {
  adType: 'banner-468x60' | 'banner-300x250' | 'skyscraper-160x300' | 'skyscraper-160x600' | 'container' | 'direct-link' | 'large-banner' | 'mobile-banner' | 'mobile-banner-320x50' | 'leaderboard-728x90';
  onClick: () => void;
  className?: string;
  title?: string;
}

export default function RealAdContainer({ adType, onClick, className = '', title }: RealAdContainerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  
  // Generate stable ID for each ad instance using adType
  const adId = useMemo(() => `${adType}-${Date.now().toString(36)}`, []);

  const handleAdClick = () => {
    onClick();
  };

  const renderAd = () => {
    switch (adType) {
      case 'banner-468x60':
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-blue-600 px-4 py-2 text-center">
                <span className="text-xs text-white font-medium uppercase tracking-wide">{title}</span>
              </div>
            )}
            <div className="p-3">
              <div className="w-full min-h-[60px] bg-slate-900 rounded border border-slate-700 flex items-center justify-center overflow-hidden hover:bg-slate-800 transition-colors">
                <Script id={`banner-468x60-${adId}`}>
                  {`
                    atOptions = {
                      'key' : 'a1bc5a1e59c5468243f3048190ac9fa9',
                      'format' : 'iframe',
                      'height' : 60,
                      'width' : 468,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script src="https://www.highperformanceformat.com/a1bc5a1e59c5468243f3048190ac9fa9/invoke.js" />
              </div>
            </div>
          </div>
        );

      case 'banner-300x250':
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300 ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-purple-600 px-4 py-2 text-center">
                <span className="text-xs text-white font-medium uppercase tracking-wide">{title}</span>
              </div>
            )}
            <div className="p-3">
              <div className="w-full min-h-[250px] bg-slate-900 rounded border border-slate-700 flex items-center justify-center overflow-hidden hover:bg-slate-800 transition-colors">
                <Script id={`banner-300x250-${adId}`}>
                  {`
                    atOptions = {
                      'key' : 'a388ca2af8457b290856c125811ac381',
                      'format' : 'iframe',
                      'height' : 250,
                      'width' : 300,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script src="https://www.highperformanceformat.com/a388ca2af8457b290856c125811ac381/invoke.js" />
              </div>
            </div>
          </div>
        );

      case 'skyscraper-160x300':
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-green-600 px-3 py-2 text-center">
                <span className="text-xs text-white font-medium uppercase tracking-wide">{title}</span>
              </div>
            )}
            <div className="p-3">
              <div className="w-full min-h-[300px] bg-slate-900 rounded border border-slate-700 flex items-center justify-center overflow-hidden hover:bg-slate-800 transition-colors">
                <Script id={`skyscraper-160x300-${adId}`}>
                  {`
                    atOptions = {
                      'key' : '74fecf5727a3b75fdd3fa5f6dfd32702',
                      'format' : 'iframe',
                      'height' : 300,
                      'width' : 160,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script src="https://www.highperformanceformat.com/74fecf5727a3b75fdd3fa5f6dfd32702/invoke.js" />
              </div>
            </div>
          </div>
        );

      case 'skyscraper-160x600':
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-indigo-500 transition-all duration-300 ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-indigo-600 px-3 py-2 text-center">
                <span className="text-xs text-white font-medium uppercase tracking-wide">{title}</span>
              </div>
            )}
            <div className="p-3">
              <div className="w-full min-h-[600px] bg-slate-900 rounded border border-slate-700 flex items-center justify-center overflow-hidden hover:bg-slate-800 transition-colors">
                <Script id={`skyscraper-160x600-${adId}`}>
                  {`
                    atOptions = {
                      'key' : '5c47052fe2ed147e484f0f8f22a195a2',
                      'format' : 'iframe',
                      'height' : 600,
                      'width' : 160,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script src="https://www.highperformanceformat.com/5c47052fe2ed147e484f0f8f22a195a2/invoke.js" />
              </div>
            </div>
          </div>
        );

      case 'mobile-banner-320x50':
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition-all duration-300 ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-cyan-600 px-4 py-2 text-center">
                <span className="text-xs text-white font-medium uppercase tracking-wide">{title}</span>
              </div>
            )}
            <div className="p-3">
              <div className="w-full min-h-[50px] bg-slate-900 rounded border border-slate-700 flex items-center justify-center overflow-hidden hover:bg-slate-800 transition-colors">
                <Script id={`mobile-banner-320x50-${adId}`}>
                  {`
                    atOptions = {
                      'key' : 'ce20dc930600898be06db897979ab284',
                      'format' : 'iframe',
                      'height' : 50,
                      'width' : 320,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script src="https://www.highperformanceformat.com/ce20dc930600898be06db897979ab284/invoke.js" />
              </div>
            </div>
          </div>
        );

      case 'leaderboard-728x90':
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-yellow-500 transition-all duration-300 ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-yellow-600 px-4 py-2 text-center">
                <span className="text-xs text-white font-medium uppercase tracking-wide">{title}</span>
              </div>
            )}
            <div className="p-3">
              <div className="w-full min-h-[90px] bg-slate-900 rounded border border-slate-700 flex items-center justify-center overflow-hidden hover:bg-slate-800 transition-colors">
                <Script id={`leaderboard-728x90-${adId}`}>
                  {`
                    atOptions = {
                      'key' : '92c8efaac9aec6de86f242bd4cf5e90b',
                      'format' : 'iframe',
                      'height' : 90,
                      'width' : 728,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script src="https://www.highperformanceformat.com/92c8efaac9aec6de86f242bd4cf5e90b/invoke.js" />
              </div>
            </div>
          </div>
        );

      case 'container':
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-emerald-500 transition-all duration-300 ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-emerald-600 px-4 py-2 text-center">
                <span className="text-xs text-white font-medium uppercase tracking-wide">{title}</span>
              </div>
            )}
            <div className="p-3">
              <div className="w-full min-h-[200px] bg-slate-900 rounded border border-slate-700 flex items-center justify-center overflow-hidden hover:bg-slate-800 transition-colors">
                <Script 
                  async 
                  data-cfasync="false" 
                  src="https://pl28938658.effectivegatecpm.com/5e73c74d0f8ac206ea5b9830785fb1ac/invoke.js"
                />
                <div id="container-5e73c74d0f8ac206ea5b9830785fb1ac" className="w-full h-full"></div>
              </div>
            </div>
          </div>
        );

      case 'direct-link':
        return (
          <div className={`bg-pink-600 rounded-lg overflow-hidden cursor-pointer hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`} onClick={handleAdClick}>
            <div className="p-6 text-white text-center relative">
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-2xl font-bold mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Exclusive Premium Access
                </div>
                <p className="mb-4 text-sm opacity-90">Unlock premium features and exclusive content</p>
                <a 
                  href="https://www.effectivegatecpm.com/x5kjfdhe?key=2d99602e86ebc798fcb36d0c2c1d0cb4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-6 py-3 rounded-full inline-block font-bold text-sm hover:bg-gray-100 transition-all transform hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAdClick();
                  }}
                >
                  Get Premium Access →
                </a>
              </div>
            </div>
          </div>
        );

      case 'large-banner':
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300 ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-orange-600 px-3 py-1 text-center">
                <span className="text-xs text-white font-medium uppercase tracking-wide">{title}</span>
              </div>
            )}
            <div className="p-3">
              <div className="w-full min-h-[100px] bg-slate-900 rounded border border-slate-700 flex items-center justify-center overflow-hidden hover:bg-slate-800 transition-colors">
                <Script id={`large-banner-${adId}`}>
                  {`
                    atOptions = {
                      'key' : 'a1bc5a1e59c5468243f3048190ac9fa9',
                      'format' : 'iframe',
                      'height' : 90,
                      'width' : 728,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script src="https://www.highperformanceformat.com/a1bc5a1e59c5468243f3048190ac9fa9/invoke.js" />
              </div>
            </div>
          </div>
        );

      case 'mobile-banner':
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-teal-500 transition-all duration-300 ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-teal-600 px-3 py-1 text-center">
                <span className="text-xs text-white font-medium uppercase tracking-wide">{title}</span>
              </div>
            )}
            <div className="p-2">
              <div className="w-full min-h-[50px] bg-slate-900 rounded border border-slate-700 flex items-center justify-center overflow-hidden hover:bg-slate-800 transition-colors">
                <Script id={`mobile-banner-${adId}`}>
                  {`
                    atOptions = {
                      'key' : 'a1bc5a1e59c5468243f3048190ac9fa9',
                      'format' : 'iframe',
                      'height' : 50,
                      'width' : 320,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script src="https://www.highperformanceformat.com/a1bc5a1e59c5468243f3048190ac9fa9/invoke.js" />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`bg-slate-800 border border-slate-700 rounded-lg p-4 ${className}`}>
            <div className="text-center text-gray-400 text-sm">Advertisement</div>
          </div>
        );
    }
  };

  return <div ref={adRef} className="w-full">{renderAd()}</div>;
}