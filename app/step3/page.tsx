'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RealAdContainer from '../components/RealAdContainer';

export default function Step3() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);
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
      router.push('/unlock');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🔐 Link Gateway</h1>
          <p className="text-lg text-gray-600">Final Step - You're almost there!</p>
          <div className="mt-4 inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
            <span className="animate-pulse mr-2">🔥</span>
            <span className="font-semibold">FINAL STEP - UNLOCK COMING SOON!</span>
          </div>
        </div>

        {/* Timer Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 text-center">
          <div className="text-8xl font-bold text-purple-600 mb-4">{timeLeft}</div>
          <p className="text-xl text-gray-600 mb-4">seconds to unlock</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-purple-600 h-4 rounded-full transition-all duration-1000" 
              style={{ width: `${((10 - timeLeft) / 10) * 100}%` }}
            ></div>
          </div>
          {timeLeft === 0 && !adClicked && (
            <p className="text-red-500 text-xl font-bold animate-bounce">⚠️ CLICK ANY AD TO UNLOCK YOUR CONTENT!</p>
          )}
          {adClicked && timeLeft === 0 && (
            <p className="text-green-500 text-xl font-bold animate-pulse">🎉 READY TO UNLOCK! Click the button below!</p>
          )}
        </div>

        {/* Premium Ad Section */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-purple-700">🌟 PREMIUM OFFERS 🌟</h2>
            <p className="text-gray-600">Click any ad below to unlock your content</p>
          </div>
          
          {/* Large Banner Ad */}
          <RealAdContainer 
            adType="banner-468x60" 
            onClick={handleAdClick}
            className="mb-6"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-6 mb-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <RealAdContainer 
              adType="skyscraper-160x300" 
              onClick={handleAdClick}
              className="sticky top-4"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Featured Direct Link Ad */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">🎯 EXCLUSIVE FINAL OFFER!</h3>
              <p className="text-lg mb-6">Don't miss this last chance for premium access</p>
              <RealAdContainer 
                adType="direct-link" 
                onClick={handleAdClick}
              />
            </div>

            {/* Medium Rectangle Ads Grid */}
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

            {/* Container Ad */}
            <RealAdContainer 
              adType="container" 
              onClick={handleAdClick}
            />

            {/* Final Instructions */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">🏁 FINAL STEP INSTRUCTIONS</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">⏰</div>
                  <div className="font-semibold text-purple-700">Wait 10 Seconds</div>
                  <p className="text-sm text-gray-600 mt-1">Timer must reach zero</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">👆</div>
                  <div className="font-semibold text-purple-700">Click Any Ad</div>
                  <p className="text-sm text-gray-600 mt-1">Interact with advertisements</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🔓</div>
                  <div className="font-semibold text-purple-700">Unlock Content</div>
                  <p className="text-sm text-gray-600 mt-1">Access your link</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <RealAdContainer 
              adType="skyscraper-160x300" 
              onClick={handleAdClick}
              className="sticky top-4"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-semibold text-gray-700">Overall Progress</span>
            <span className="text-lg font-semibold text-purple-600">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-purple-600 h-4 rounded-full w-full transition-all animate-pulse"></div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-purple-600 font-semibold">✓ Step 1</span>
            <span className="text-purple-600 font-semibold">✓ Step 2</span>
            <span className="text-purple-600 font-semibold">✓ Step 3</span>
            <span className="text-purple-600 font-semibold animate-pulse">🔓 UNLOCK</span>
          </div>
        </div>

        {/* Unlock Button */}
        <div className="text-center pb-8">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`px-16 py-6 rounded-xl font-bold text-2xl transition-all transform ${
              canProceed
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:scale-105 shadow-2xl cursor-pointer animate-pulse'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canProceed ? '🔓 UNLOCK YOUR CONTENT NOW!' : '⏳ Please wait and click an ad'}
          </button>
          
          {canProceed && (
            <div className="mt-6 space-y-2">
              <p className="text-purple-600 font-bold text-xl animate-bounce">
                🎉 CONGRATULATIONS! Your content is ready!
              </p>
              <p className="text-gray-600">
                Click the button above to access your exclusive content
              </p>
            </div>
          )}
        </div>

        {/* Final Motivation */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 rounded-lg p-6 text-center">
          <h4 className="text-xl font-bold text-green-700 mb-2">🏆 You're Almost Done!</h4>
          <p className="text-green-600 font-medium">
            Just click any advertisement above and your content will be unlocked instantly!
          </p>
        </div>
      </div>
    </div>
  );
}