'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RealAdContainer from './components/RealAdContainer';

export default function Home() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(20);
  const [adClicked, setAdClicked] = useState(false);
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && adClicked) {
      setCanProceed(true);
    }
  }, [timeLeft, adClicked]);

  const handleAdClick = () => {
    setAdClicked(true);
  };

  const handleNext = () => {
    if (canProceed) {
      router.push('/step2');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">🔐 Link Gateway</h1>
            <p className="text-gray-600 mt-1">Step 1 of 3 - Please wait and click any ad below</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Top Banner Ad */}
        <div className="mb-4">
          <RealAdContainer 
            adType="large-banner" 
            onClick={handleAdClick}
            title="Advertisement"
          />
        </div>

        {/* Timer and Progress */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-indigo-600">{timeLeft}s</div>
              <div className="text-sm text-gray-600">
                {timeLeft === 0 && !adClicked && (
                  <span className="text-red-600 font-medium">⚠️ Please click any ad to continue</span>
                )}
                {adClicked && timeLeft === 0 && (
                  <span className="text-green-600 font-medium">✅ Ready to proceed!</span>
                )}
                {timeLeft > 0 && (
                  <span>Wait for timer + click any ad</span>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Progress: 33%</div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-1000" 
              style={{ width: `${((20 - timeLeft) / 20) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-4 mb-4">
          {/* Left Sidebar */}
          <div className="lg:col-span-2">
            <RealAdContainer 
              adType="skyscraper-160x300" 
              onClick={handleAdClick}
              title="Sponsored"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-8">
            {/* Ad Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <RealAdContainer 
                adType="banner-300x250" 
                onClick={handleAdClick}
                title="Advertisement"
              />
              <RealAdContainer 
                adType="banner-300x250" 
                onClick={handleAdClick}
                title="Advertisement"
              />
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">📋 How it works:</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span className="text-gray-700">Wait 20 seconds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span className="text-gray-700">Click any ad</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span className="text-gray-700">Continue to next step</span>
                </div>
              </div>
            </div>

            {/* Direct Link Ad */}
            <RealAdContainer 
              adType="direct-link" 
              onClick={handleAdClick}
            />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <RealAdContainer 
                adType="skyscraper-160x300" 
                onClick={handleAdClick}
                title="Sponsored"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <RealAdContainer 
            adType="container" 
            onClick={handleAdClick}
            title="Sponsored Content"
          />
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="font-semibold text-gray-800 mb-2">💡 Why ads?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Ads help us provide free access to content. Your clicks support our service.
            </p>
            <div className="text-xs text-gray-500">
              Step 1 of 3 • 2 more steps to unlock your content
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              canProceed
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canProceed ? '→ Continue to Step 2' : 'Please wait and click an ad'}
          </button>
        </div>

        {/* Mobile Banner for smaller screens */}
        <div className="mt-4 md:hidden">
          <RealAdContainer 
            adType="mobile-banner" 
            onClick={handleAdClick}
            title="Advertisement"
          />
        </div>
      </div>
    </div>
  );
}