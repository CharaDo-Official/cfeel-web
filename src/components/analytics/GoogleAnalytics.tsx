import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = 'G-L83002451Q';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

export const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // 既存のスクリプトがない場合のみ追加
    if (!document.querySelector(`script[src*="${GA_ID}"]`)) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // データレイヤーの初期化
      window.dataLayer = window.dataLayer || [];
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
      window.gtag = function (..._args: any[]) {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments as unknown as Record<string, unknown>);
      };

      window.gtag('js', new Date());
      window.gtag('config', GA_ID);
    }
  }, []);

  // ページ遷移時にPageViewを送信
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};
