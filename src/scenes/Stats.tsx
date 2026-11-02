import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {content} from '../content';
import {colors, display, text, easeOut} from '../theme';
import {Rise} from '../components';
import {useLayout} from '../layout';

const Stat: React.FC<{value: number; suffix: string; label: string; delay: number}> = ({value, suffix, label, delay}) => {
  const frame = useCurrentFrame();
  const {u, vertical} = useLayout();
  const n = Math.round(interpolate(frame - delay, [0, 35], [0, value], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut}));
  return (
    <Rise delay={delay} style={{textAlign: 'center', width: (vertical ? 800 : 480) * u}}>
      <div style={{fontFamily: display, fontWeight: 900, fontSize: (vertical ? 190 : 200) * u, lineHeight: 1, color: colors.accent, fontVariantNumeric: 'tabular-nums'}}>
        {n}
        {suffix}
      </div>
      <div style={{fontFamily: text, fontWeight: 600, fontSize: 44 * u, color: colors.text, marginTop: 12 * u}}>{label}</div>
    </Rise>
  );
};

export const Stats: React.FC = () => {
  const {u, vertical} = useLayout();
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: vertical ? 'column' : 'row', gap: (vertical ? 70 : 40) * u}}>
        {content.stats.map((s, i) => (
          <Stat key={s.label} {...s} delay={i * 6} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
