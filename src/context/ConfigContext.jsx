import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultConfig from '../data/siteConfig.json';

const ConfigContext = createContext(null);

const STORAGE_KEY = 'villupuram_site_config_v2';

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState(() => {
    try {
      // Clear old v1 cache if it held the old default password
      localStorage.removeItem('villupuram_site_config_v1');
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.adminAuth?.passcode === 'villupuram2026') {
          parsed.adminAuth.passcode = 'Nsprem@200';
        }
        return { ...defaultConfig, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load local config override:', e);
    }
    return defaultConfig;
  });

  // Apply SEO Title, Meta tags, and CSS theme variables whenever config changes
  useEffect(() => {
    if (config?.seo?.metaTitle) {
      document.title = config.seo.metaTitle;
    }
    if (config?.seo?.metaDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = config.seo.metaDescription;
    }
    
    // Dynamic Theme Accent Color Palette
    const accent = config?.theme?.accentColor || '#ff6b00';
    let secondary = '#ffa800';
    let glow = 'rgba(255, 107, 0, 0.25)';

    if (accent === '#10b981') {
      secondary = '#34d399';
      glow = 'rgba(16, 185, 129, 0.25)';
    } else if (accent === '#00d8ff') {
      secondary = '#38bdf8';
      glow = 'rgba(0, 216, 255, 0.25)';
    } else if (accent === '#8b5cf6') {
      secondary = '#a78bfa';
      glow = 'rgba(139, 92, 246, 0.25)';
    } else if (accent === '#ef4444') {
      secondary = '#f87171';
      glow = 'rgba(239, 68, 68, 0.25)';
    }

    const root = document.documentElement;
    root.style.setProperty('--accent-blue', accent);
    root.style.setProperty('--accent-violet', secondary);
    root.style.setProperty('--accent-gradient', `linear-gradient(135deg, ${accent} 0%, ${secondary} 100%)`);
    root.style.setProperty('--accent-gradient-glow', glow);
    root.style.setProperty('--primary-orange', accent);
    root.style.setProperty('--primary-color', accent);
    root.style.setProperty('--accent-glow', glow);
  }, [config]);

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear storage:', e);
    }
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const ctx = useContext(ConfigContext);
  if (!ctx) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return ctx;
}
