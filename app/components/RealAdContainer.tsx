'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface RealAdContainerProps {
  adType: 'banner-468x60' | 'banner-300x250' | 'skyscraper-160x300' | 'container' | 'direct-link' | 'large-banner' | 'mobile-banner';
  onClick: () => void;
  className?: string;
  title?: string;
}

export default function RealAdContainer({ adType, onClick, className = '', title }: RealAdContainerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  const handleAdClick = () => {
    onClick();
  };

  const renderAd = () => {
    switch (adType) {
      case 'banner-468x60':
        return (
          <div className={`bg-gray-50 border border-gray-200 rounded-md overflow-hidden ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-gray-100 px-3 py-1 text-center border-b border-gray-200">
                <span className="text-xs text-gray-600 font-medium">{title}</span>
              </div>
            )}
            <div className="p-2">
              <div className="w-full min-h-[60px] bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden">
                <Script id={`banner-468x60-${Math.random()}`}>
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
          <div className={`bg-gray-50 border border-gray-200 rounded-md overflow-hidden ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-gray-100 px-3 py-1 text-center border-b border-gray-200">
                <span className="text-xs text-gray-600 font-medium">{title}</span>
              </div>
            )}
            <div className="p-2">
              <div className="w-full min-h-[250px] bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden">
                <Script id={`banner-300x250-${Math.random()}`}>
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
          <div className={`bg-gray-50 border border-gray-200 rounded-md overflow-hidden ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-gray-100 px-2 py-1 text-center border-b border-gray-200">
                <span className="text-xs text-gray-600 font-medium">{title}</span>
              </div>
            )}
            <div className="p-2">
              <div className="w-full min-h-[300px] bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden">
                <Script id={`skyscraper-160x300-${Math.random()}`}>
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
          <div className={`bg-gray-50 border border-gray-200 rounded-md overflow-hidden ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-gray-100 px-3 py-1 text-center border-b border-gray-200">
                <span className="text-xs text-gray-600 font-medium">{title}</span>
              </div>
            )}
            <div className="p-2">
              <div className="w-full min-h-[200px] bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden">
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
          <div className={`bg-gradient-to-r from-blue-500 to-purple-600 rounded-md overflow-hidden cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all ${className}`} onClick={handleAdClick}>
            <div className="p-4 text-white text-center">
              <div className="text-xl font-bold mb-2">🎯 Exclusive Offer!</div>
              <p className="mb-3 text-sm opacity-90">Click here for special deals</p>
              <a 
                href="https://www.effectivegatecpm.com/x5kjfdhe?key=2d99602e86ebc798fcb36d0c2c1d0cb4"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-4 py-2 rounded-full inline-block font-bold text-sm hover:bg-gray-100 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAdClick();
                }}
              >
                Click Now!
              </a>
            </div>
          </div>
        );

      case 'large-banner':
        return (
          <div className={`bg-gray-50 border border-gray-200 rounded-md overflow-hidden ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-gray-100 px-3 py-1 text-center border-b border-gray-200">
                <span className="text-xs text-gray-600 font-medium">{title}</span>
              </div>
            )}
            <div className="p-3">
              <div className="w-full min-h-[100px] bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden">
                <Script id={`large-banner-${Math.random()}`}>
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
          <div className={`bg-gray-50 border border-gray-200 rounded-md overflow-hidden ${className}`} onClick={handleAdClick}>
            {title && (
              <div className="bg-gray-100 px-3 py-1 text-center border-b border-gray-200">
                <span className="text-xs text-gray-600 font-medium">{title}</span>
              </div>
            )}
            <div className="p-2">
              <div className="w-full min-h-[50px] bg-white rounded border border-gray-100 flex items-center justify-center overflow-hidden">
                <Script id={`mobile-banner-${Math.random()}`}>
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
          <div className={`bg-gray-100 border border-gray-200 rounded-md p-4 ${className}`}>
            <div className="text-center text-gray-500 text-sm">Advertisement</div>
          </div>
        );
    }
  };

  return <div ref={adRef} className="w-full">{renderAd()}</div>;
}