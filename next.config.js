
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['uPotvw1sf6FgsUVg3itkQQ'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  