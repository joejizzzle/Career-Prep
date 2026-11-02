import React from 'react';
import {Composition} from 'remotion';
import {Promo, TOTAL} from './Promo';
import {FPS} from './theme';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="CareerPrepPromo" component={Promo} durationInFrames={TOTAL} fps={FPS} width={1920} height={1080} />
    <Composition id="CareerPrepPromoVertical" component={Promo} durationInFrames={TOTAL} fps={FPS} width={1080} height={1920} />
  </>
);
