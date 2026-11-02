import React from 'react';
import {AbsoluteFill} from 'remotion';
import {content} from '../content';
import {colors, display, STAGGER} from '../theme';
import {Rise} from '../components';
import {useLayout} from '../layout';

export const Hook: React.FC = () => {
  const {u, vertical} = useLayout();
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 100 * u}}>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: `0 ${28 * u}px`, maxWidth: vertical ? 900 * u : 1500 * u}}>
        {content.hook.map((w, i) => {
          const last = i >= content.hook.length - 2;
          return (
            <Rise key={i} delay={i * STAGGER} distance={60}>
              <span style={{fontFamily: display, fontWeight: 800, fontSize: (vertical ? 130 : 120) * u, lineHeight: 1.1, color: last ? colors.accent : colors.text, letterSpacing: -2 * u}}>
                {w}
              </span>
            </Rise>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
