module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: process.env.CLIENT_PORT,
    public: `${process.env.DOMAIN}:${process.env.CLIENT_PORT}`,
    disableHostCheck: true
  }
};
