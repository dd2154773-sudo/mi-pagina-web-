import React from 'react';

interface SpineDividerProps {
  icon?: string;
  className?: string;
}

export const SpineDivider: React.FC<SpineDividerProps> = ({ icon = 'filter_vintage', className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center my-space-sm py-2 ${className}`}>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#800020] to-transparent"></div>
      <div className="absolute bg-[#131316] px-3 flex items-center gap-2 text-[#e9c176]">
        <span className="font-mono text-xs text-[#e9c176]/80">◆</span>
        <span className="material-symbols-outlined text-sm">{icon}</span>
        <span className="font-mono text-xs text-[#e9c176]/80">◆</span>
      </div>
    </div>
  );
};
