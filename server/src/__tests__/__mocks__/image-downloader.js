const download = require('image-downloader');

jest.mock('image-downloader', () => ({
  image: ({ dest }) => Promise.resolve({ filename: dest })
}));

module.exports = download;
