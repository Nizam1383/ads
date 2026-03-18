'use client';

import { useState } from 'react';
import RealAdContainer from '../components/RealAdContainer';

export default function Unlock() {
  const [showContent, setShowContent] = useState(false);
  const [adClicked, setAdClicked] = useState(false);
  
  // This would be the actual link/content the user came for
  const finalLink = "https://example.com/your-download-link";
  const finalContent = "Your exclusive content is now available!";

  const handleRevealContent = () => {
    setShowContent(true);
  };

  const handleAdClick = () => {
    setAdClicked(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8 pt-8">
          <div className="text-8xl mb-6 animate-bounce">🎉</div>
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Congratulations!</h1>
          <p className="text-2xl text-gray-600 mb-4">You've successfully completed all steps</p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold">
            <span className="mr-2">✅</span>
            ALL STEPS COMPLETED - CONTENT UNLOCKED!
          </div>
        </div>

        {/* Top Banner Ad */}
        <div className="mb-8">
          <RealAdContainer 
            adType="banner-468x60" 
            onClick={handleAdClick}
          />
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <RealAdContainer 
              adType="skyscraper-160x300" 
              onClick={handleAdClick}
              className="sticky top-4"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-2">
            {/* Success Card */}
            <div className="bg-white rounded-lg shadow-xl p-8 mb-8 text-center">
              <div className="text-6xl mb-6">🔓</div>
              <h2 className="text-3xl font-bold text-green-600 mb-6">Content Unlocked!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for your patience. Your exclusive content is now ready for access.
              </p>
              
              {!showContent ? (
                <button
                  onClick={handleRevealContent}
                  className="bg-green-600 text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  🎁 Reveal My Content
                </button>
              ) : (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">🎯 Your Content:</h3>
                  <div className="bg-white rounded-lg p-6 mb-6 shadow-lg">
                    <p className="text-xl text-gray-700 mb-6">{finalContent}</p>
                    <a
                      href={finalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all inline-block transform hover:scale-105 shadow-lg"
                    >
                      🔗 Access Your Link Now
                    </a>
                  </div>
                  <p className="text-lg text-green-600 font-semibold">
                    ✨ Bookmark this page for future reference
                  </p>
                </div>
              )}
            </div>

            {/* Medium Rectangle Ad */}
            <RealAdContainer 
              adType="banner-300x250" 
              onClick={handleAdClick}
              className="mb-8"
            />
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

        {/* Additional Offers Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">🎁 Before You Go - Exclusive Offers!</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Direct Link Ad */}
            <RealAdContainer 
              adType="direct-link" 
              onClick={handleAdClick}
            />
            
            {/* Container Ad */}
            <RealAdContainer 
              adType="container" 
              onClick={handleAdClick}
            />
          </div>

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
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">🏆 Journey Complete!</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-gray-600 font-semibold">Steps Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">45</div>
              <p className="text-gray-600 font-semibold">Seconds Waited</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-600 font-semibold">Progress</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">✓</div>
              <p className="text-gray-600 font-semibold">Success</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner Ad */}
        <div className="mb-8">
          <RealAdContainer 
            adType="banner-468x60" 
            onClick={handleAdClick}
          />
        </div>

        {/* Footer Actions */}
        <div className="text-center pb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Share the Love!</h4>
            <p className="text-gray-600 mb-6">
              Help others discover this content by sharing Link Gateway
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold">
                📱 Share
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all font-semibold"
              >
                🔄 Start Over
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 rounded-lg p-6">
            <p className="text-gray-700 font-medium text-lg">
              🌟 Thank you for using Link Gateway! Your support helps keep this service free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}