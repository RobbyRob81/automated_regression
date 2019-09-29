import initStoryshots, {
  multiSnapshotWithOptions
  // imageSnapshot
} from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';

initStoryshots({
  suite: 'Storyshots',
  integrityOptions: { cwd: __dirname },
  test: multiSnapshotWithOptions({})
});

const getMatchOptions = ({ context: { fileName } }) => {
  const customSnapshotsDir = `${fileName.slice(
    0,
    fileName.lastIndexOf('/')
  )}/_image_snapshots_`;

  return { customSnapshotsDir };
};

let storybookUrl = 'http://localhost:9009';

if (process.env.CI) {
  storybookUrl = `file://${path.join(__dirname, '../storybook-static')}`;
}

initStoryshots({
  suite: 'Image Storyshots',
  integrityOptions: { cwd: __dirname },
  test: imageSnapshot({
    storybookUrl,
    getMatchOptions
  })
});
