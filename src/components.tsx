import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, random} from 'remotion';
import {colors, easeIn, easeOut, springs} from './theme';
import {useLayout} from './layout';

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  const drift = frame * 0.4;
  const dots = new Array(28).fill(0).map((_, i) => ({
    x: random(`x${i}`) * width,
    y: random(`y${i}`) * height,
    r: 2 + random(`r${i}`) * 4,
    s: 0.2 + random(`s${i}`) * 0.6,
    o: 0.08 + random(`o${i}`) * 0.2,
  }));
  return (
    <AbsoluteFill style={{background: colors.bg, overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${30 + Math.sin(frame / 90) * 10}% ${35 + Math.cos(frame / 110) * 10}%, ${colors.bg2} 0%, ${colors.bg} 60%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: Math.max(width, height) * 0.7,
          height: Math.max(width, height) * 0.7,
          right: -Math.max(width, height) * 0.25,
          bottom: -Math.max(width, height) * 0.3,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.accent}22 0%, transparent 65%)`,
          transform: `translateY(${Math.sin(frame / 60) * 20}px)`,
        }}
      />
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: d.x,
            top: ((d.y - drift * d.s) % height + height) % height,
            width: d.r,
            height: d.r,
            borderRadius: '50%',
            background: colors.text,
            opacity: d.o,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

/** Spring entrance (rise + fade) with optional delay; exit near scene end. */
export const useEnter = (delay = 0, config = springs.entrance) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({frame: frame - delay, fps, config});
};

export const Rise: React.FC<{delay?: number; distance?: number; hero?: boolean; style?: React.CSSProperties; children: React.ReactNode}> = ({
  delay = 0,
  distance = 40,
  hero,
  style,
  children,
}) => {
  const p = useEnter(delay, hero ? springs.hero : springs.entrance);
  const {u} = useLayout();
  return (
    <div style={{opacity: Math.min(1, p * 1.5), transform: `translateY(${(1 - p) * distance * u}px) scale(${hero ? 0.9 + 0.1 * p : 1})`, ...style}}>
      {children}
    </div>
  );
};

/** Wraps a scene: fade/scale out over the last `exit` frames (accelerating). */
export const SceneExit: React.FC<{duration: number; exit?: number; children: React.ReactNode}> = ({duration, exit = 10, children}) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [duration - exit, duration], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeIn});
  return <AbsoluteFill style={{opacity: 1 - t, transform: `scale(${1 + t * 0.04})`}}>{children}</AbsoluteFill>;
};

export const AccentBar: React.FC<{delay?: number; width: number; height: number}> = ({delay = 0, width, height}) => {
  const frame = useCurrentFrame();
  const w = interpolate(frame - delay, [0, 18], [0, width], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut});
  return <div style={{width: w, height, background: colors.accent, borderRadius: height}} />;
};
