export const siteConfig = {
  // Site Information
  name: "Link Gateway",
  description: "Unlock your content by completing simple steps",
  
  // Timer Settings (in seconds)
  timers: {
    step1: 20,
    step2: 15,
    step3: 10,
  },
  
  // Final Destination
  finalLink: "https://example.com/your-download-link",
  finalContent: "Your exclusive content is now available!",
  
  // Real Ad Network Configuration
  ads: {
    // Set to true since we now have real ads configured
    useRealAds: true,
    
    // Ad Network Scripts and IDs
    effectiveGateCPM: {
      popUnder1: "https://pl28938643.effectivegatecpm.com/ce/98/7d/ce987d5617b66a4e3f971d1345b37f99.js",
      popUnder2: "https://pl28938657.effectivegatecpm.com/35/33/16/3533169f95d2d051ffd28dfb6039e44a.js",
      directLink: "https://www.effectivegatecpm.com/x5kjfdhe?key=2d99602e86ebc798fcb36d0c2c1d0cb4",
      containerAd: {
        script: "https://pl28938658.effectivegatecpm.com/5e73c74d0f8ac206ea5b9830785fb1ac/invoke.js",
        containerId: "container-5e73c74d0f8ac206ea5b9830785fb1ac"
      }
    },
    
    highPerformanceFormat: {
      banner468x60: {
        key: "a1bc5a1e59c5468243f3048190ac9fa9",
        script: "https://www.highperformanceformat.com/a1bc5a1e59c5468243f3048190ac9fa9/invoke.js"
      },
      banner300x250: {
        key: "a388ca2af8457b290856c125811ac381",
        script: "https://www.highperformanceformat.com/a388ca2af8457b290856c125811ac381/invoke.js"
      },
      skyscraper160x300: {
        key: "74fecf5727a3b75fdd3fa5f6dfd32702",
        script: "https://www.highperformanceformat.com/74fecf5727a3b75fdd3fa5f6dfd32702/invoke.js"
      }
    }
  },
  
  // Ad Placement Strategy
  adPlacements: {
    step1: {
      topBanner: "banner-468x60",
      leftSidebar: "skyscraper-160x300",
      centerMedium: "banner-300x250",
      rightSidebar: "container",
      directLink: "direct-link"
    },
    step2: {
      topBanner: "banner-468x60",
      leftSidebar: "skyscraper-160x300",
      centerGrid: ["banner-300x250", "banner-300x250"],
      rightSidebar: "skyscraper-160x300",
      container: "container",
      directLink: "direct-link"
    },
    step3: {
      topBanner: "banner-468x60",
      leftSidebar: "skyscraper-160x300",
      centerGrid: ["banner-300x250", "banner-300x250"],
      rightSidebar: "skyscraper-160x300",
      container: "container",
      directLink: "direct-link"
    },
    unlock: {
      topBanner: "banner-468x60",
      bottomBanner: "banner-468x60",
      leftSidebar: "skyscraper-160x300",
      rightSidebar: "skyscraper-160x300",
      centerMedium: "banner-300x250",
      additionalOffers: ["direct-link", "container", "banner-300x250", "banner-300x250"]
    }
  },
  
  // Analytics
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX", // Replace with your GA4 ID
    trackAdClicks: true,
    trackPageViews: true,
  },
  
  // SEO
  seo: {
    keywords: "link locker, ad gateway, unlock content, download link, free access",
    ogImage: "/og-image.jpg", // Add your OG image
  }
};

export type SiteConfig = typeof siteConfig;