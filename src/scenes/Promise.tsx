import React from 'react';
import {AbsoluteFill} from 'remotion';
import {content} from '../content';
import {colors, display} from '../theme';
import {Rise} from '../components';
import {useLayout} from '../layout';

export const Promise: React.FC = () => {
  const {u, vertical} = useLayout();
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 80 * u}}>
      {content.promise.map((line, i) => (
        <Rise key={i} delay={i * 18} hero={i === 1} distance={60}>
          <div style={{fontFamily: display, fontWeight: 800, fontSize: (vertical ? 120 : 130) * u, lineHeight: 1.15, color: i === 1 ? colors.accent : colors.text, letterSpacing: -2 * u}}>
            {line}
          </div>
        </Rise>
      ))}
    </AbsoluteFill>
  );
};
