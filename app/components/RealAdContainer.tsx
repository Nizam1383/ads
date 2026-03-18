'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface RealAdContainerProps {
  adType: 'banner-468x60' | 'banner-300x250' | 'skyscraper-160x300' | 'container' | 'direct-link';
  onClick: () => void;
  className?: string;
}

export default function RealAdContainer({ adType, onClick, className = '' }: RealAdContainerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  const handleAdClick = () => {
    onClick();
  };

  const renderAd = () => {
    switch (adType) {
      case 'banner-468x60':
        return (
          <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`} onClick={handleAdClick}>
            <div className="text-center mb-2">
              <span className="text-xs text-gray-500">Advertisement</span>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[468px] h-[60px] bg-gray-100 rounded flex items-center justify-center">
                <Script id="banner-468x60">
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
          <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`} onClick={handleAdClick}>
            <div className="text-center mb-2">
              <span className="text-xs text-gray-500">Advertisement</span>
            </div>
            <div className="flex justify-center">
              <div className="w-[300px] h-[250px] bg-gray-100 rounded flex items-center justify-center">
                <Script id="banner-300x250">
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
          <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`} onClick={handleAdClick}>
            <div className="text-center mb-2">
              <span className="text-xs text-gray-500">Advertisement</span>
            </div>
            <div className="flex justify-center">
              <div className="w-[160px] h-[300px] bg-gray-100 rounded flex items-center justify-center">
                <Script id="skyscraper-160x300">
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

      case 'container':
        return (
          <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`} onClick={handleAdClick}>
            <div className="text-center mb-2">
              <span className="text-xs text-gray-500">Sponsored Content</span>
            </div>
            <div className="min-h-[200px] bg-gray-50 rounded flex items-center justify-center">
              <Script 
                async 
                data-cfasync="false" 
                src="https://pl28938658.effectivegatecpm.com/5e73c74d0f8ac206ea5b9830785fb1ac/invoke.js"
              />
              <div id="container-5e73c74d0f8ac206ea5b9830785fb1ac"></div>
            </div>
          </div>
        );

      case 'direct-link':
        return (
          <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`} onClick={handleAdClick}>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all">
                <div className="text-2xl font-bold mb-2">🎯 Special Offer!</div>
                <p className="mb-4">Click here for exclusive deals and offers</p>
                <a 
                  href="https://www.effectivegatecpm.com/x5kjfdhe?key=2d99602e86ebc798fcb36d0c2c1d0cb4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-full inline-block font-bold hover:bg-gray-100 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAdClick();
                  }}
                >
                  Click Here Now!
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Sponsored Link</p>
          </div>
        );

      default:
        return (
          <div className={`bg-gray-100 rounded-lg p-4 ${className}`}>
            <div className="text-center text-gray-500">Ad Placeholder</div>
          </div>
        );
    }
  };

  return <div ref={adRef}>{renderAd()}</div>;
}