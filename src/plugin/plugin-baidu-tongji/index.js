module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-baidu-tongji',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?f6da56a47f5085d1e0fedae39b8de00a";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'baidu-site-verification',
              content: 'code-rqLUw5reVS',
            },
          },
        ],
      }
    },
  }
}
