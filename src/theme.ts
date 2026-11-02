import {loadFont as loadDisplay} from '@remotion/google-fonts/Montserrat';
import {loadFont as loadText} from '@remotion/google-fonts/Inter';
import {Easing} from 'remotion';

export const display = loadDisplay('normal', {weights: ['700', '800', '900'], subsets: ['latin']}).fontFamily;
export const text = loadText('normal', {weights: ['400', '500', '600'], subsets: ['latin']}).fontFamily;

export const colors = {
  bg: '#0B1020',
  bg2: '#141B33',
  text: '#F5F7FF',
  muted: '#A9B2D0',
  accent: '#FFB627',
};

export const FPS = 30;
export const sec = (s: number) => Math.round(s * FPS);

export const springs = {
  entrance: {damping: 16, stiffness: 120, mass: 0.8},
  hero: {damping: 11, stiffness: 110, mass: 0.9},
  soft: {damping: 20, stiffness: 80},
};
export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const easeIn = Easing.bezier(0.7, 0, 0.84, 0);
export const STAGGER = 5;
export const TRANSITION = 15;
