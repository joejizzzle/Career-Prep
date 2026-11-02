import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {content} from '../content';
import {colors, display, text, easeOut} from '../theme';
import {AccentBar, Rise} from '../components';
import {useLayout} from '../layout';

export const Title: React.FC = () => {
  const {u, vertical} = useLayout();
  const frame = useCurrentFrame();
  const tracking = interpolate(frame, [0, 40], [30, 4], {extrapolateRight: 'clamp', easing: easeOut});
  const size = vertical ? 118 : 150;
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <Rise delay={0}>
        <div style={{fontFamily: text, fontWeight: 600, fontSize: 36 * u, color: colors.accent, letterSpacing: tracking * u, marginBottom: 20 * u}}>
          {content.year}
        </div>
      </Rise>
      {content.eventName.map((line, i) => (
        <Rise key={i} delay={6 + i * 6} hero={i === 0} distance={50}>
          <div style={{fontFamily: display, fontWeight: 900, fontSize: size * u, lineHeight: 1.0, color: colors.text, letterSpacing: -3 * u}}>{line}</div>
        </Rise>
      ))}
      <div style={{marginTop: 40 * u, marginBottom: 36 * u}}>
        <AccentBar delay={20} width={220 * u} height={10 * u} />
      </div>
      <Rise delay={28}>
        <div style={{fontFamily: text, fontWeight: 500, fontSize: (vertical ? 44 : 46) * u, color: colors.muted, maxWidth: 900 * u}}>{content.tagline}</div>
      </Rise>
    </AbsoluteFill>
  );
};
