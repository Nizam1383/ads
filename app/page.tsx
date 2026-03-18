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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🔐 Link Gateway</h1>
          <p className="text-lg text-gray-600">Step 1 of 3 - Please wait and interact with ads</p>
        </div>

        {/* Timer Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 text-center">
          <div className="text-7xl font-bold text-indigo-600 mb-4">{timeLeft}</div>
          <p className="text-xl text-gray-600 mb-4">seconds remaining</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-indigo-600 h-3 rounded-full transition-all duration-1000" 
              style={{ width: `${((20 - timeLeft) / 20) * 100}%` }}
            ></div>
          </div>
          {timeLeft === 0 && !adClicked && (
            <p className="text-red-500 text-lg font-semibold">⚠️ Please click on any advertisement below to continue</p>
          )}
          {adClicked && timeLeft === 0 && (
            <p className="text-green-500 text-lg font-semibold">✅ Ready to proceed to next step!</p>
          )}
        </div>

        {/* Main Content Area with Ads */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Left Sidebar - Skyscraper Ad */}
          <div className="lg:col-span-1">
            <RealAdContainer 
              adType="skyscraper-160x300" 
              onClick={handleAdClick}
              className="sticky top-4"
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Banner Ad */}
            <RealAdContainer 
              adType="banner-468x60" 
              onClick={handleAdClick}
            />

            {/* Instructions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">📋 Instructions</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">1</span>
                  <span>Wait for the 20-second countdown to complete</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">2</span>
                  <span>Click on any advertisement on this page</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">3</span>
                  <span>The "Continue" button will become active</span>
                </div>
              </div>
            </div>

            {/* Medium Rectangle Ad */}
            <RealAdContainer 
              adType="banner-300x250" 
              onClick={handleAdClick}
            />

            {/* Direct Link Ad */}
            <RealAdContainer 
              adType="direct-link" 
              onClick={handleAdClick}
            />
          </div>

          {/* Right Sidebar - Another Skyscraper */}
          <div className="lg:col-span-1">
            <RealAdContainer 
              adType="container" 
              onClick={handleAdClick}
              className="sticky top-4"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-semibold text-gray-700">Overall Progress</span>
            <span className="text-lg font-semibold text-indigo-600">33%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-indigo-600 h-4 rounded-full w-1/3 transition-all"></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Step 1</span>
            <span>Step 2</span>
            <span>Step 3</span>
            <span>Unlock</span>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center pb-8">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`px-12 py-4 rounded-xl font-bold text-xl transition-all transform ${
              canProceed
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 shadow-lg cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canProceed ? '🚀 Continue to Step 2' : '⏳ Please wait and click an ad'}
          </button>
          
          {canProceed && (
            <p className="mt-4 text-green-600 font-semibold animate-pulse">
              🎉 Great! You can now proceed to the next step
            </p>
          )}
        </div>

        {/* Footer Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
          <p className="text-yellow-800 font-medium">
            💡 Tip: Clicking on ads helps support free content access
          </p>
        </div>
      </div>
    </div>
  );
}