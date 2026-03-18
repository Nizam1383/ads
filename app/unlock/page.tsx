'use client';

import { useState } from 'react';
import RealAdContainer from '../components/RealAdContainer';

export default function Unlock() {
  const [showContent, setShowContent] = useState(false);
  
  // This would be the actual link/content the user came for
  const finalLink = "https://h5.d9s3x4.com/share/invite/share_page.html?invited_by=197762038&arg=ZmlsbWluLGVuLGh0dHBzOi8vYXBwLnIyYzdhMC5jb20vdmVyc2lvbi9maWxtaW4vZmlsbWluX3NoXzEwMDAtNC4wLjAuYXBrLGh0dHBzOi8vaDUuZDlzM3g0LmNvbS9zaGFyZS9pbl9hbmRyb2lkL2luZGV4X3kuaHRtbA==";
  const finalContent = "Exclusive content ready for you! Download the app now and unlock adult videos, movies, series & more";

  const handleRevealContent = () => {
    setShowContent(true);
  };

  const handleAdClick = () => {
    // Ad click handler
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-4xl mb-2">🎉</div>
            <h1 className="text-2xl font-bold text-gray-800">Congratulations!</h1>
            <p className="text-gray-600 mt-1">All steps completed - Content unlocked!</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Top Banner Ad - Use leaderboard */}
        <div className="mb-4">
          <RealAdContainer 
            adType="leaderboard-728x90" 
            onClick={handleAdClick}
            title="Advertisement"
          />
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
            {/* Success Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4 text-center">
              <div className="text-4xl mb-3">🔓</div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Content Unlocked!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your patience. Your exclusive content is ready.
              </p>
              
              {!showContent ? (
                <button
                  onClick={handleRevealContent}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
                >
                  🎁 Reveal My Content
                </button>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-bold text-green-800 mb-3">🎯 Your Content:</h3>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-gray-700 mb-4">{finalContent}</p>
                    <a
                      href={finalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all inline-block"
                    >
                      🔗 Access Your Link
                    </a>
                  </div>
                  <p className="text-sm text-green-600">✨ Bookmark this page</p>
                </div>
              )}
            </div>

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

            {/* Stats */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <h3 className="font-semibold text-gray-800 mb-3 text-center">🏆 Journey Complete!</h3>
              <div className="grid grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <p className="text-gray-600">Steps</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">45</div>
                  <p className="text-gray-600">Seconds</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <p className="text-gray-600">Progress</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">✓</div>
                  <p className="text-gray-600">Success</p>
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

        {/* Additional Offers */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-4 text-center">🎁 Before You Go - More Offers!</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <RealAdContainer 
              adType="direct-link" 
              onClick={handleAdClick}
            />
            <RealAdContainer 
              adType="container" 
              onClick={handleAdClick}
              title="Sponsored"
            />
            <RealAdContainer 
              adType="banner-300x250" 
              onClick={handleAdClick}
              title="Advertisement"
            />
          </div>
        </div>

        {/* Bottom Banner - Use leaderboard */}
        <div className="mb-4">
          <RealAdContainer 
            adType="leaderboard-728x90" 
            onClick={handleAdClick}
            title="Advertisement"
          />
        </div>

        {/* Footer Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <h4 className="font-semibold text-gray-800 mb-3">Share & Restart</h4>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm">
              📱 Share
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all text-sm"
            >
              🔄 Start Over
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Thank you for using Link Gateway! Your support helps keep this service free.
          </p>
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