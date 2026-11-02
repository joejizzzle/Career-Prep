import {useVideoConfig} from 'remotion';
// Scale everything relative to a 1080px short edge so 16:9 and 9:16 share components.
export const useLayout = () => {
  const {width, height} = useVideoConfig();
  const vertical = height > width;
  const u = Math.min(width, height) / 1080;
  return {width, height, vertical, u};
};
