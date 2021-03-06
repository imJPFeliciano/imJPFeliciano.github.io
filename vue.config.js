const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/styles/_variables.scss";',
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'files/[name].[hash:7].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        'UI-Components': path.resolve(__dirname, 'src/components/ui/'),
      },
    },
  },
};
