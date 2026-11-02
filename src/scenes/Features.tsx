import React from 'react';
import {AbsoluteFill} from 'remotion';
import {content} from '../content';
import {colors, display, text} from '../theme';
import {Rise, useEnter} from '../components';
import {useLayout} from '../layout';

const Card: React.FC<{icon: string; label: string; delay: number}> = ({icon, label, delay}) => {
  const {u, vertical} = useLayout();
  const p = useEnter(delay);
  const w = vertical ? 780 : 380;
  return (
    <div
      style={{
        width: w * u,
        height: (vertical ? 190 : 340) * u,
        borderRadius: 32 * u,
        background: 'rgba(255,255,255,0.05)',
        border: `${2 * u}px solid rgba(255,255,255,0.10)`,
        boxShadow: `0 ${30 * u}px ${60 * u}px rgba(0,0,0,0.35)`,
        display: 'flex',
        flexDirection: vertical ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: vertical ? 'flex-start' : 'center',
        gap: 30 * u,
        padding: `0 ${50 * u}px`,
        opacity: Math.min(1, p * 1.5),
        transform: `translateY(${(1 - p) * 80 * u}px) scale(${0.92 + 0.08 * p})`,
      }}
    >
      <div style={{width: 110 * u, height: 110 * u, borderRadius: '50%', background: `${colors.accent}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 58 * u, flexShrink: 0}}>
        {icon}
      </div>
      <div style={{fontFamily: display, fontWeight: 700, fontSize: 44 * u, color: colors.text, textAlign: vertical ? 'left' : 'center', lineHeight: 1.15}}>{label}</div>
    </div>
  );
};

export const Features: React.FC = () => {
  const {u, vertical} = useLayout();
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', gap: 70 * u}}>
      <Rise>
        <div style={{fontFamily: display, fontWeight: 800, fontSize: 96 * u, color: colors.text, letterSpacing: -2 * u}}>
          {content.featuresTitle}
          <span style={{color: colors.accent}}>.</span>
        </div>
      </Rise>
      <div style={{display: 'flex', flexDirection: vertical ? 'column' : 'row', gap: 36 * u}}>
        {content.features.map((f, i) => (
          <Card key={f.label} icon={f.icon} label={f.label} delay={10 + i * 6} />
        ))}
      </div>
      <div style={{fontFamily: text, height: 0}} />
    </AbsoluteFill>
  );
};
