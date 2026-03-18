import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SecureLink Pro - Premium Content Gateway",
  description: "Access your premium content through our secure verification system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Anti-Adblock Protection Script - Load First */}
        <Script 
          src="https://archaicmsflip.com/ce/98/7d/ce987d5617b66a4e3f971d1345b37f99.js"
          strategy="beforeInteractive"
          id="anti-adblock-protection"
        />
        
        {/* Pop-under Ad Scripts */}
        <Script 
          src="https://pl28938643.effectivegatecpm.com/ce/98/7d/ce987d5617b66a4e3f971d1345b37f99.js"
          strategy="afterInteractive"
        />
        <Script 
          src="https://pl28938657.effectivegatecpm.com/35/33/16/3533169f95d2d051ffd28dfb6039e44a.js"
          strategy="afterInteractive"
        />
        
        {/* Global Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .glass-effect {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .neon-glow {
              box-shadow: 0 0 20px rgba(102, 126, 234, 0.4);
            }
            
            .floating-animation {
              animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            
            .pulse-glow {
              animation: pulse-glow 2s infinite;
            }
            
            @keyframes pulse-glow {
              0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.4); }
              50% { box-shadow: 0 0 30px rgba(102, 126, 234, 0.8); }
            }

            /* Anti-Adblock Styles */
            .adblock-warning {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.95);
              z-index: 9999;
              display: none;
              align-items: center;
              justify-content: center;
              color: white;
              text-align: center;
              padding: 20px;
            }
            
            .adblock-detected .adblock-warning {
              display: flex;
            }
            
            .adblock-detected .main-content {
              filter: blur(5px);
              pointer-events: none;
            }
            
            .adblock-skip-btn {
              position: relative;
              overflow: hidden;
            }
            
            .adblock-skip-btn::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
              transition: left 0.5s;
            }
            
            .adblock-skip-btn:hover::before {
              left: 100%;
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 min-h-screen`}
      >
        {/* Anti-Adblock Warning Overlay */}
        <div className="adblock-warning">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-6">🚫</div>
            <h2 className="text-3xl font-bold mb-4">Ad Blocker Detected</h2>
            <p className="text-lg mb-6 text-gray-300">
              Please disable your ad blocker to access this content. 
              Ads help us keep this service free for everyone.
            </p>
            <div className="space-y-4">
              <button 
                className="adblock-reload-btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full"
              >
                I&apos;ve Disabled Ad Blocker
              </button>
              <button 
                className="adblock-skip-btn bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-all w-full"
                style={{ display: 'none' }}
              >
                ⚠️ Continue Anyway (Not Recommended)
              </button>
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-yellow-400 mb-2">How to disable ad blocker:</p>
                <p>1. Click on your ad blocker icon</p>
                <p>2. Select &quot;Disable on this site&quot;</p>
                <p>3. Refresh the page</p>
                <p className="mt-3 text-xs text-gray-500">
                  Note: Disabling ad blocker helps support our free service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Improved Anti-Adblock Script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var detectionCount = 0;
              var maxDetections = 3;
              
              function detectAdblock() {
                // Multiple detection methods for better accuracy
                var tests = [];
                
                // Test 1: Element visibility test
                var testAd1 = document.createElement('div');
                testAd1.innerHTML = '&nbsp;';
                testAd1.className = 'adsbox ads advertisement';
                testAd1.style.position = 'absolute';
                testAd1.style.left = '-10000px';
                testAd1.style.width = '1px';
                testAd1.style.height = '1px';
                document.body.appendChild(testAd1);
                
                // Test 2: Script loading test
                var testAd2 = document.createElement('div');
                testAd2.innerHTML = '&nbsp;';
                testAd2.className = 'ad-banner google-ad';
                testAd2.style.position = 'absolute';
                testAd2.style.left = '-10000px';
                testAd2.style.width = '1px';
                testAd2.style.height = '1px';
                document.body.appendChild(testAd2);
                
                setTimeout(function() {
                  // Check multiple conditions
                  if (testAd1.offsetHeight === 0 || getComputedStyle(testAd1).display === 'none') {
                    tests.push(true);
                  }
                  if (testAd2.offsetHeight === 0 || getComputedStyle(testAd2).display === 'none') {
                    tests.push(true);
                  }
                  
                  // Check for common adblocker indicators
                  if (typeof window.adsbygoogle === 'undefined' && 
                      typeof window.googletag === 'undefined') {
                    tests.push(true);
                  }
                  
                  // Only trigger if multiple tests fail
                  if (tests.length >= 2) {
                    detectionCount++;
                    if (detectionCount >= 2) {
                      document.body.classList.add('adblock-detected');
                    }
                  }
                  
                  // Clean up
                  document.body.removeChild(testAd1);
                  document.body.removeChild(testAd2);
                }, 200);
              }
              
              // Run detection multiple times for accuracy
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(detectAdblock, 500);
                  setTimeout(detectAdblock, 1500);
                });
              } else {
                setTimeout(detectAdblock, 500);
                setTimeout(detectAdblock, 1500);
              }
              
              // Add button functionality
              document.addEventListener('click', function(e) {
                if (e.target.classList.contains('adblock-reload-btn')) {
                  window.location.reload();
                }
                if (e.target.classList.contains('adblock-skip-btn')) {
                  document.body.classList.remove('adblock-detected');
                  localStorage.setItem('adblock-skip-used', 'true');
                }
              });
              
              // Show skip button after delay to encourage proper ad blocker disabling
              setTimeout(function() {
                var skipBtn = document.querySelector('.adblock-skip-btn');
                if (skipBtn && document.body.classList.contains('adblock-detected')) {
                  skipBtn.style.display = 'block';
                  skipBtn.style.opacity = '0';
                  skipBtn.style.transition = 'opacity 0.5s';
                  setTimeout(function() {
                    skipBtn.style.opacity = '1';
                  }, 100);
                }
              }, 5000); // Show skip button after 5 seconds
            })();
          `
        }} />

        <div className="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}