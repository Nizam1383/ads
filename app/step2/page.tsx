'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RealAdContainer from '../components/RealAdContainer';

export default function Step2() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(15);
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
      router.push('/step3');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🔐 Link Gateway</h1>
          <p className="text-lg text-gray-600">Step 2 of 3 - You're doing great!</p>
        </div>

        {/* Timer Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 text-center">
          <div className="text-7xl font-bold text-emerald-600 mb-4">{timeLeft}</div>
          <p className="text-xl text-gray-600 mb-4">seconds remaining</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-emerald-600 h-3 rounded-full transition-all duration-1000" 
              style={{ width: `${((15 - timeLeft) / 15) * 100}%` }}
            ></div>
          </div>
          {timeLeft === 0 && !adClicked && (
            <p className="text-red-500 text-lg font-semibold">⚠️ Please click on any advertisement to continue</p>
          )}
          {adClicked && timeLeft === 0 && (
            <p className="text-green-500 text-lg font-semibold">✅ Ready to proceed to final step!</p>
          )}
        </div>

        {/* Top Banner Ad */}
        <div className="mb-8">
          <RealAdContainer 
            adType="banner-468x60" 
            onClick={handleAdClick}
          />
        </div>

        {/* Main Ad Grid */}
        <div className="grid lg:grid-cols-5 gap-6 mb-8">
          {/* Left Skyscraper */}
          <div className="lg:col-span-1">
            <RealAdContainer 
              adType="skyscraper-160x300" 
              onClick={handleAdClick}
              className="sticky top-4"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Medium Rectangle Ads */}
            <div className="grid md:grid-cols-2 gap-6">
              <RealAdContainer 
                adType="banner-300x250" 
                onClick={handleAdClick}
              />
              <RealAdContainer 
                adType="banner-300x250" 
                onClick={handleAdClick}
              />
            </div>

            {/* Instructions Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center text-emerald-700">📋 Step 2 Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="font-semibold">Wait 15 seconds</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-9">Timer must reach zero</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="font-semibold">Click any ad</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-9">Interact with advertisements</p>
                </div>
              </div>
            </div>

            {/* Container Ad */}
            <RealAdContainer 
              adType="container" 
              onClick={handleAdClick}
            />

            {/* Direct Link Ad */}
            <RealAdContainer 
              adType="direct-link" 
              onClick={handleAdClick}
            />
          </div>

          {/* Right Skyscraper */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <RealAdContainer 
                adType="skyscraper-160x300" 
                onClick={handleAdClick}
                className="sticky top-4"
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-semibold text-gray-700">Overall Progress</span>
            <span className="text-lg font-semibold text-emerald-600">67%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-emerald-600 h-4 rounded-full w-2/3 transition-all"></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span className="text-emerald-600 font-semibold">✓ Step 1</span>
            <span className="text-emerald-600 font-semibold">Step 2</span>
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
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 shadow-lg cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canProceed ? '🚀 Continue to Final Step' : '⏳ Please wait and click an ad'}
          </button>
          
          {canProceed && (
            <p className="mt-4 text-emerald-600 font-semibold animate-pulse">
              🎉 Excellent! One more step to unlock your content
            </p>
          )}
        </div>

        {/* Motivation Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <p className="text-blue-800 font-medium">
            🌟 You're almost there! Just one more step to access your content
          </p>
        </div>
      </div>
    </div>
  );
}