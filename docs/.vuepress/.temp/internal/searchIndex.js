export const searchIndex = [
  {
    "title": "JavaScript数据类型的相关问题看这篇文章就够了",
    "headers": [
      {
        "level": 2,
        "title": "了解强、弱类型和动态、静态类型语言",
        "slug": "了解强、弱类型和动态、静态类型语言",
        "children": [
          {
            "level": 3,
            "title": "强类型",
            "slug": "强类型",
            "children": []
          },
          {
            "level": 3,
            "title": "弱类型",
            "slug": "弱类型",
            "children": []
          },
          {
            "level": 3,
            "title": "静态类型",
            "slug": "静态类型",
            "children": []
          },
          {
            "level": 3,
            "title": "动态类型",
            "slug": "动态类型",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "基本数据类型",
        "slug": "基本数据类型",
        "children": []
      },
      {
        "level": 2,
        "title": "引用数据类型",
        "slug": "引用数据类型",
        "children": [
          {
            "level": 3,
            "title": "引用类型的检索",
            "slug": "引用类型的检索",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "拓展：深浅拷贝",
        "slug": "拓展-深浅拷贝",
        "children": [
          {
            "level": 3,
            "title": "手写方法实现深拷贝：",
            "slug": "手写方法实现深拷贝",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "typeof方法",
        "slug": "typeof方法",
        "children": []
      },
      {
        "level": 2,
        "title": "拓展：为什么null返回的是一个object呢？",
        "slug": "拓展-为什么null返回的是一个object呢",
        "children": []
      },
      {
        "level": 2,
        "title": "instanceof方法",
        "slug": "instanceof方法",
        "children": []
      }
    ],
    "path": "/how-to-write-article.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/about/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/mood/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/link/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/archive/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/aurora-coze/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/aurora-register/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/photo/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/aurora-music/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/aurora-archive/",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
