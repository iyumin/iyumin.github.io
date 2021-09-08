/* eslint-disable @typescript-eslint/no-var-requires */
const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'git@github.com:kevinjobs/kevinjobs.github.io.git'
}, function(err) {
  console.log(err);
});