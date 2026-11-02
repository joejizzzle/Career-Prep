import React from 'react';
import {AbsoluteFill, Series} from 'remotion';
import {Background, SceneExit} from './components';
import {sec} from './theme';
import {Hook} from './scenes/Hook';
import {Title} from './scenes/Title';
import {Features} from './scenes/Features';
import {Stats} from './scenes/Stats';
import {Promise} from './scenes/Promise';
import {CTA} from './scenes/CTA';

export const SCENES = [
  {C: Hook, d: sec(2.5)},
  {C: Title, d: sec(3.5)},
  {C: Features, d: sec(4.5)},
  {C: Stats, d: sec(3.5)},
  {C: Promise, d: sec(3)},
  {C: CTA, d: sec(5)},
];
export const TOTAL = SCENES.reduce((a, s) => a + s.d, 0);

export const Promo: React.FC = () => (
  <AbsoluteFill>
    <Background />
    <Series>
      {SCENES.map(({C, d}, i) => (
        <Series.Sequence key={i} durationInFrames={d}>
          {i === SCENES.length - 1 ? <C /> : <SceneExit duration={d}><C /></SceneExit>}
        </Series.Sequence>
      ))}
    </Series>
  </AbsoluteFill>
);
