process.env.VUE_APP_BUILD_DATE = String(new Date());
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/my-name/" : "/"
};
