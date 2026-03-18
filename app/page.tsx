'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import RealAdContainer from './components/RealAdContainer';
import ClientAntiAdblock from './components/ClientAntiAdblock';

export default function Home() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(20);
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
      router.push('/step2');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Anti-Adblock Detection */}
      <ClientAntiAdblock />
      
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">SecureLink Pro</h1>
                <p className="text-xs text-gray-400">Premium Content Gateway</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Secure Connection</span>
              </div>
              <div className="text-sm text-gray-500">Step 1 of 3</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Banner Ad */}
        <div className="mb-8">
          <RealAdContainer 
            adType="leaderboard-728x90" 
            onClick={handleAdClick}
            title="Sponsored Content"
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <RealAdContainer 
                adType="skyscraper-160x600" 
                onClick={handleAdClick}
                title="Advertisement"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-8">
            {/* Hero Section */}
            <div className="glass-effect rounded-2xl p-8 mb-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Content Verification in Progress</h2>
                <p className="text-gray-300 text-lg">Please wait while we verify your access permissions</p>
              </div>

              {/* Timer Display */}
              <div className="bg-slate-800 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="text-6xl font-bold text-blue-400">
                    {timeLeft}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Seconds</div>
                    <div className="text-gray-400 text-sm">Remaining</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-1000" 
                    style={{ width: `${((20 - timeLeft) / 20) * 100}%` }}
                  ></div>
                </div>

                {/* Status Messages */}
                <div className="text-center">
                  {timeLeft === 0 && !adClicked && (
                    <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-center space-x-2 text-red-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span className="font-medium">Action Required: Please interact with sponsored content below</span>
                      </div>
                    </div>
                  )}
                  {adClicked && timeLeft === 0 && (
                    <div className="bg-green-900/50 border border-green-500/30 rounded-lg p-4">
                      <div className="flex items-center justify-center space-x-2 text-green-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Verification Complete - Ready to proceed</span>
                      </div>
                    </div>
                  )}
                  {timeLeft > 0 && (
                    <div className="text-gray-400">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Verifying access permissions...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verification Process
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <div className="text-white font-medium">Wait</div>
                      <div className="text-gray-400 text-sm">20 second verification</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <div className="text-white font-medium">Interact</div>
                      <div className="text-gray-400 text-sm">View sponsored content</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <div className="text-white font-medium">Continue</div>
                      <div className="text-gray-400 text-sm">Proceed to next step</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sponsored Content Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Sponsored Content</h3>
                <p className="text-gray-400">Support our platform by viewing our partner offers</p>
              </div>

              {/* Ad Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-xl p-1 hover:border-blue-500/50 transition-all duration-300">
                  <RealAdContainer 
                    adType="banner-300x250" 
                    onClick={handleAdClick}
                    title="Featured Offer"
                  />
                </div>
                <div className="glass-effect rounded-xl p-1 hover:border-purple-500/50 transition-all duration-300">
                  <RealAdContainer 
                    adType="banner-300x250" 
                    onClick={handleAdClick}
                    title="Premium Deal"
                  />
                </div>
              </div>

              {/* Special Offer */}
              <div className="glass-effect rounded-xl p-6 border border-pink-500/30">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Exclusive Offer</span>
                  </div>
                </div>
                <RealAdContainer 
                  adType="direct-link" 
                  onClick={handleAdClick}
                />
              </div>
            </div>

            {/* Continue Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleNext}
                disabled={!canProceed}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  canProceed
                    ? 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {canProceed ? (
                  <span className="flex items-center space-x-2">
                    <span>Continue to Step 2</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Verification in Progress</span>
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-6">
              <RealAdContainer 
                adType="skyscraper-160x600" 
                onClick={handleAdClick}
                title="Advertisement"
              />
              
              {/* Progress Indicator */}
              <div className="glass-effect rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">Progress</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-white">Step 1</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <span className="text-sm text-gray-400">Step 2</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <span className="text-sm text-gray-400">Step 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Banner */}
        <div className="mt-8 md:hidden">
          <RealAdContainer 
            adType="mobile-banner-320x50" 
            onClick={handleAdClick}
            title="Mobile Offer"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-800/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-gray-400 text-sm">
              © 2024 SecureLink Pro. Secure content delivery platform.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🔒 SSL Secured</span>
              <span>⚡ Fast Delivery</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}