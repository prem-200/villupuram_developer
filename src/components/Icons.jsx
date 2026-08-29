import React from 'react';

// Centralized lightweight SVG Icon library replacing monolithic icon package
const createIcon = (svgPath) => {
  return ({ size = 24, className = '', color = 'currentColor', strokeWidth = 2, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide-icon ${className}`}
      {...props}
    >
      {svgPath}
    </svg>
  );
};

export const ArrowRight = createIcon(<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>);
export const Globe = createIcon(<><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></>);
export const Activity = createIcon(<path d="M22 12h-4l-3 9L9 3l-3 9H2" />);
export const ShoppingBag = createIcon(<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></>);
export const ShoppingCart = createIcon(<><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></>);
export const BarChart3 = createIcon(<><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></>);
export const Layout = createIcon(<><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></>);
export const Layers = createIcon(<><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></>);
export const Sparkles = createIcon(<><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></>);
export const Code2 = createIcon(<><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></>);
export const Zap = createIcon(<><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></>);
export const Monitor = createIcon(<><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></>);
export const Smartphone = createIcon(<><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></>);
export const Cpu = createIcon(<><rect width="12" height="12" x="6" y="6" rx="2" /><path d="M9 18v3" /><path d="M15 18v3" /><path d="M9 3v3" /><path d="M15 3v3" /><path d="M3 9h3" /><path d="M3 15h3" /><path d="M18 9h3" /><path d="M18 15h3" /></>);
export const CheckCircle2 = createIcon(<><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>);
export const Terminal = createIcon(<><polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" /></>);
export const Server = createIcon(<><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></>);
export const Gauge = createIcon(<><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></>);
export const Search = createIcon(<><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>);
export const Phone = createIcon(<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></>);
export const MapPin = createIcon(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>);
export const Plus = createIcon(<><path d="M5 12h14" /><path d="M12 5v14" /></>);
export const Minus = createIcon(<><path d="M5 12h14" /></>);
export const Menu = createIcon(<><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></>);
export const X = createIcon(<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>);
export const Send = createIcon(<><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>);
export const Check = createIcon(<><polyline points="20 6 9 17 4 12" /></>);
export const MessageSquareCode = createIcon(<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="m10 8-2 2 2 2" /><path d="m14 8 2 2-2 2" /></>);
export const RefreshCw = createIcon(<><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>);
export const ChevronRight = createIcon(<><path d="m9 18 6-6-6-6" /></>);
export const ChevronLeft = createIcon(<><path d="m15 18-6-6 6-6" /></>);
export const ArrowLeft = createIcon(<><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></>);
export const ShieldCheck = createIcon(<><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>);
export const Clock = createIcon(<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>);
export const MessageSquare = createIcon(<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>);
export const Lock = createIcon(<><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>);
export const ExternalLink = createIcon(<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></>);
export const Award = createIcon(<><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></>);
export const Trash2 = createIcon(<><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></>);
export const Users = createIcon(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>);
export const ArrowUp = createIcon(<><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></>);
export const Mail = createIcon(<><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>);
export const Instagram = createIcon(<><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>);
export const Linkedin = createIcon(<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>);
export const Github = createIcon(<><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></>);
export const MessageCircle = createIcon(<><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" /></>);
export const WhatsApp = createIcon(<><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></>);
export const Calendar = createIcon(<><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></>);
export const FileText = createIcon(<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></>);

// Dedicated Custom Tech Stack SVG Badges
export const ReactIcon = ({ size = 22, color = "#00d8ff" }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill={color}/>
    <g stroke={color} strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const NextjsIcon = ({ size = 20, color = "#ffffff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4v16" />
    <path d="M4 4l12 16" />
    <path d="M16 4v16" />
  </svg>
);

export const GoogleIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
  </svg>
);

export const ViteIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M21.5 4.5l-9 16-9-16 6-1.5 3 7 3-7 6 1.5z" fill="#ffbd14" stroke="#ffffff" strokeWidth="1.5"/>
  </svg>
);

export const TailwindIcon = ({ size = 22, color = "#38bdf8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 12c.5-2.5 2-4 4.5-4 3 0 3.5 3 5.5 3 1.5 0 2.5-1 3-2.5-.5 2.5-2 4-4.5 4-3 0-3.5-3-5.5-3-1.5 0-2.5 1-3 2.5z" fill={color}/>
    <path d="M2 17c.5-2.5 2-4 4.5-4 3 0 3.5 3 5.5 3 1.5 0 2.5-1 3-2.5-.5 2.5-2 4-4.5 4-3 0-3.5-3-5.5-3-1.5 0-2.5 1-3 2.5z" fill={color}/>
  </svg>
);

export const PostgresIcon = ({ size = 22, color = "#336791" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a9 9 0 0 0-9 9c0 3.5 2 6.5 5 8v3l4-2 4 2v-3c3-1.5 5-4.5 5-8a9 9 0 0 0-9-9z"/>
    <circle cx="9" cy="10" r="1" fill={color}/>
    <circle cx="15" cy="10" r="1" fill={color}/>
  </svg>
);

export const TypescriptIcon = ({ size = 20, color = "#3178c6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#3178c6"/>
    <path d="M7 11h6m-3 0v8" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M18 13c-.5-.7-1.3-1-2.2-1s-1.8.6-1.8 1.5 1 1.4 2 1.8c1.3.5 2.2 1.2 2.2 2.4 0 1.5-1.2 2.3-2.6 2.3-1.4 0-2.4-.7-2.8-1.7" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

export const NodejsIcon = ({ size = 22, color = "#5fa04e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2l8.5 5v10L12 22 3.5 17V7L12 2z" fill="#5fa04e"/>
    <path d="M12 6.5l5 3v5l-5 3-5-3v-5l5-3z" fill="#ffffff" opacity="0.3"/>
  </svg>
);

export const PythonIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M11.5 2c-4 0-4.5 2-4.5 4v2h5v1H5c-2 0-4 1.5-4 4.5s1.5 4.5 4 4.5h2v-2.5c0-2.5 2-4.5 4.5-4.5h5V9c0-4-2.5-7-9-7z" fill="#3776ab"/>
    <circle cx="8.5" cy="5.5" r="0.8" fill="#ffffff"/>
    <path d="M12.5 22c4 0 4.5-2 4.5-4v-2h-5v-1h7c2 0 4-1.5 4-4.5s-1.5-4.5-4-4.5h-2v2.5c0 2.5-2 4.5-4.5 4.5h-5V15c0 4 2.5 7 9 7z" fill="#ffd438"/>
    <circle cx="15.5" cy="18.5" r="0.8" fill="#ffffff"/>
  </svg>
);

export const DockerIcon = ({ size = 22, color = "#2496ed" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="10" width="3" height="3" fill="#2496ed" rx="0.5"/>
    <rect x="6" y="10" width="3" height="3" fill="#2496ed" rx="0.5"/>
    <rect x="10" y="10" width="3" height="3" fill="#2496ed" rx="0.5"/>
    <rect x="6" y="6" width="3" height="3" fill="#2496ed" rx="0.5"/>
    <rect x="10" y="6" width="3" height="3" fill="#2496ed" rx="0.5"/>
    <rect x="14" y="6" width="3" height="3" fill="#2496ed" rx="0.5"/>
    <path d="M22 13c-.5-.3-1.5-.4-2.2-.2-1 .3-1.6 1.1-2 1.7C15 13 12 13 9 14.5c-3 1.5-5 4-6 6.5h18c1.5-1 3-3 3-5 0-1.2-.5-2.3-2-3z" fill="#2496ed"/>
  </svg>
);

export const FigmaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E"/>
    <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262"/>
    <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF"/>
    <path d="M12 7h4a2.5 2.5 0 1 1 0 5h-4V7z" fill="#1ABCFE"/>
    <path d="M8 12h4v5a2.5 2.5 0 1 1-4-2.5V12z" fill="#0ACF83"/>
  </svg>
);

export const RedisIcon = ({ size = 22, color = "#dc382d" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 13l9 4 9-4-9-4-9 4z" fill="#dc382d"/>
    <path d="M3 17l9 4 9-4-9-4-9 4z" fill="#c0261c" opacity="0.8"/>
  </svg>
);

export const Star = ({ size = 16, color = "#ffaa40", fill = "#ffaa40" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const Quote = ({ size = 20, color = "#ff6b00" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 1-1 2v2c0 1.1.9 2 2 2z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 1-1 2v2c0 1.1.9 2 2 2z" />
  </svg>
);

