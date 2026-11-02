import {Config} from '@remotion/cli/config';
import fs from 'fs';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);

// Use a locally installed Chromium if REMOTION_BROWSER is set (e.g. sandboxes without internet
// access to Remotion's Chrome download). Otherwise Remotion downloads its own headless shell.
const browser = process.env.REMOTION_BROWSER;
if (browser && fs.existsSync(browser)) {
  Config.setBrowserExecutable(browser);
}
