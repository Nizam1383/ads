'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import RealAdContainer from '../components/RealAdContainer';

export default function Step3() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);
  const [adClicked, setAdClicked] = useState(false);
  
  // Calculate canProceed based on current state
  const canProceed = useMemo(() => {
    return timeLeft === 0 && adClicked;
  }, [timeLeft, adClicked]);

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

  const handleAdClick = () => {
    setAdClicked(true);
  };

  const handleNext = () => {
    if (canProceed) {
      router.push('/unlock');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">🔐 Link Gateway</h1>
            <p className="text-gray-600 mt-1">Final Step - You&apos;re almost there!</p>
            <div className="mt-2 inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              🔥 FINAL STEP - UNLOCK COMING SOON!
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Top Banner Ad - Use leaderboard */}
        <div className="mb-4">
          <RealAdContainer 
            adType="leaderboard-728x90" 
            onClick={handleAdClick}
            title="Premium Advertisement"
          />
        </div>

        {/* Timer and Progress */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold text-purple-600">{timeLeft}s</div>
              <div className="text-sm text-gray-600">
                {timeLeft === 0 && !adClicked && (
                  <span className="text-red-600 font-medium animate-pulse">⚠️ CLICK ANY AD TO UNLOCK!</span>
                )}
                {adClicked && timeLeft === 0 && (
                  <span className="text-green-600 font-medium animate-pulse">🎉 READY TO UNLOCK!</span>
                )}
                {timeLeft > 0 && (
                  <span>Final countdown - click any ad</span>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Progress: 100%</div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full w-full animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-1000" 
              style={{ width: `${((10 - timeLeft) / 10) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Featured Premium Offer */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 mb-4 text-white text-center">
          <h2 className="text-xl font-bold mb-2">🌟 EXCLUSIVE FINAL OFFER! 🌟</h2>
          <p className="mb-3">Don&apos;t miss this last chance - click any ad below to unlock</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-4 mb-4">
          {/* Left Sidebar - Use taller skyscraper */}
          <div className="lg:col-span-2">
            <RealAdContainer 
              adType="skyscraper-160x600" 
              onClick={handleAdClick}
              title="Sponsored"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-8">
            {/* Main Ad Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <RealAdContainer 
                adType="banner-300x250" 
                onClick={handleAdClick}
                title="Premium Ad"
              />
              <RealAdContainer 
                adType="banner-300x250" 
                onClick={handleAdClick}
                title="Premium Ad"
              />
            </div>

            {/* Container and Direct Link Ads */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <RealAdContainer 
                adType="container" 
                onClick={handleAdClick}
                title="Sponsored Content"
              />
              <RealAdContainer 
                adType="direct-link" 
                onClick={handleAdClick}
              />
            </div>

            {/* Final Instructions */}
            <div className="bg-white rounded-lg border-2 border-purple-200 p-4">
              <h3 className="font-bold text-purple-700 mb-3 text-center">🏁 FINAL STEP INSTRUCTIONS</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">⏰</div>
                  <div className="font-semibold text-purple-700">Wait 10s</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">👆</div>
                  <div className="font-semibold text-purple-700">Click Ad</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🔓</div>
                  <div className="font-semibold text-purple-700">Unlock</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Use taller skyscraper */}
          <div className="lg:col-span-2">
            <RealAdContainer 
              adType="skyscraper-160x600" 
              onClick={handleAdClick}
              title="Sponsored"
            />
          </div>
        </div>

        {/* Bottom Ad Row */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <RealAdContainer 
            adType="banner-300x250" 
            onClick={handleAdClick}
            title="Advertisement"
          />
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <h4 className="font-bold text-purple-700 mb-2">🏆 Final Step!</h4>
            <p className="text-sm text-gray-600 mb-2">
              Click any ad above to unlock your content instantly!
            </p>
            <div className="text-xs text-purple-600 font-medium">
              Step 3 of 3 • Almost done!
            </div>
          </div>
          <RealAdContainer 
            adType="banner-300x250" 
            onClick={handleAdClick}
            title="Advertisement"
          />
        </div>

        {/* Unlock Button */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`px-12 py-4 rounded-lg font-bold text-lg transition-all ${
              canProceed
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 cursor-pointer animate-pulse'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canProceed ? '🔓 UNLOCK YOUR CONTENT NOW!' : 'Please wait and click an ad'}
          </button>
          
          {canProceed && (
            <p className="mt-3 text-purple-600 font-bold animate-bounce">
              🎉 CONGRATULATIONS! Click above to unlock!
            </p>
          )}
        </div>

        {/* Mobile Banner - Use new mobile format */}
        <div className="mt-4 md:hidden">
          <RealAdContainer 
            adType="mobile-banner-320x50" 
            onClick={handleAdClick}
            title="Advertisement"
          />
        </div>
      </div>
    </div>
  );
}