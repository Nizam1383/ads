'use client';

import { useEffect } from 'react';

export default function ClientAntiAdblock() {
  useEffect(() => {
    // More sophisticated adblock detection
    const detectAdblock = () => {
      let detectionTests = 0;
      const totalTests = 3;
      
      // Test 1: Create ad-like element
      const testAd1 = document.createElement('div');
      testAd1.innerHTML = '&nbsp;';
      testAd1.className = 'adsbox ads advertisement ad-banner';
      testAd1.style.position = 'absolute';
      testAd1.style.left = '-10000px';
      testAd1.style.width = '1px';
      testAd1.style.height = '1px';
      document.body.appendChild(testAd1);

      // Test 2: Create another ad-like element with different classes
      const testAd2 = document.createElement('div');
      testAd2.innerHTML = '&nbsp;';
      testAd2.className = 'google-ad doubleclick-ad';
      testAd2.style.position = 'absolute';
      testAd2.style.left = '-10000px';
      testAd2.style.width = '1px';
      testAd2.style.height = '1px';
      document.body.appendChild(testAd2);

      // Check after a delay
      setTimeout(() => {
        // Test 1: Element visibility
        if (testAd1.offsetHeight === 0 || getComputedStyle(testAd1).display === 'none') {
          detectionTests++;
        }
        
        // Test 2: Second element visibility
        if (testAd2.offsetHeight === 0 || getComputedStyle(testAd2).display === 'none') {
          detectionTests++;
        }

        // Test 3: Check for common ad script variables
        if (typeof (window as unknown as { adsbygoogle?: unknown }).adsbygoogle === 'undefined' && 
            typeof (window as unknown as { googletag?: unknown }).googletag === 'undefined') {
          detectionTests++;
        }

        // Only trigger if majority of tests indicate adblock
        if (detectionTests >= 2) {
          // Double check with another test after delay
          setTimeout(() => {
            const finalTest = document.createElement('div');
            finalTest.className = 'ad-placement sponsored-content';
            finalTest.style.position = 'absolute';
            finalTest.style.left = '-10000px';
            finalTest.style.width = '1px';
            finalTest.style.height = '1px';
            document.body.appendChild(finalTest);
            
            setTimeout(() => {
              if (finalTest.offsetHeight === 0) {
                document.body.classList.add('adblock-detected');
              }
              document.body.removeChild(finalTest);
            }, 100);
          }, 500);
        }

        // Clean up test elements
        document.body.removeChild(testAd1);
        document.body.removeChild(testAd2);
      }, 300);
    };

    // Run detection after page loads, with multiple attempts for accuracy
    const timer1 = setTimeout(detectAdblock, 1000);
    const timer2 = setTimeout(detectAdblock, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return null;
}