import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {content} from '../content';
import {colors, display, text} from '../theme';
import {AccentBar, Rise} from '../components';
import {useLayout} from '../layout';

export const CTA: React.FC = () => {
  const {u, vertical} = useLayout();
  const frame = useCurrentFrame();
  const pulse = 1 + Math.max(0, Math.sin((frame - 40) / 9)) * 0.03 * (frame > 40 ? 1 : 0);
  const glow = interpolate(frame, [30, 50], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 80 * u}}>
      <Rise>
        <div style={{fontFamily: display, fontWeight: 900, fontSize: (vertical ? 96 : 110) * u, lineHeight: 1.0, color: colors.text, letterSpacing: -2 * u}}>
          {content.eventName.join(vertical ? '\n' : ' ')}
        </div>
      </Rise>
      <div style={{margin: `${36 * u}px 0`}}>
        <AccentBar delay={6} width={160 * u} height={8 * u} />
      </div>
      <Rise delay={8}>
        <div style={{fontFamily: text, fontWeight: 600, fontSize: 52 * u, color: colors.accent, letterSpacing: 3 * u}}>{content.date}</div>
      </Rise>
      <Rise delay={13}>
        <div style={{fontFamily: text, fontWeight: 500, fontSize: 42 * u, color: colors.muted, marginTop: 10 * u}}>{content.venue}</div>
      </Rise>
      <Rise delay={22} hero>
        <div
          style={{
            marginTop: 60 * u,
            padding: `${28 * u}px ${80 * u}px`,
            borderRadius: 100 * u,
            background: colors.accent,
            color: colors.bg,
            fontFamily: display,
            fontWeight: 800,
            fontSize: 54 * u,
            transform: `scale(${pulse})`,
            boxShadow: `0 0 ${80 * u * glow}px ${colors.accent}88`,
          }}
        >
          {content.cta} →
        </div>
      </Rise>
      <Rise delay={30}>
        <div style={{fontFamily: text, fontWeight: 500, fontSize: 38 * u, color: colors.text, marginTop: 34 * u}}>{content.url}</div>
      </Rise>
    </AbsoluteFill>
  );
};
