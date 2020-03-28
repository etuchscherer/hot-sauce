const publicPath = process.env.NODE_ENV === 'development' ? '/' : '/hot-sauce/';

console.log('publicPath :: ', publicPath);

module.exports = {
  publicPath,
};
