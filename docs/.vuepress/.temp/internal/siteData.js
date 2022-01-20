export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "IEWGANFIL",
  "description": "",
  "head": [
    [
      "script",
      {
        "src": "https://at.alicdn.com/t/font_2849934_v6y652peian.js"
      }
    ],
    [
      "link",
      {
        "href": "/avatar.jpg",
        "rel": "icon"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "type": "text/css",
        "href": "//at.alicdn.com/t/font_2932340_r7zitafg82.css"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
