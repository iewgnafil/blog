import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-245bbacd","/how-to-write-article.html",{},["/how-to-write-article","/how-to-write-article.md"]],
  ["v-4689fab5","/photos/",{},["/photos/index.html","/photos/readme.md"]],
  ["v-7ffc659c","/study/study1.html",{},["/study/study1","/study/study1.md"]],
  ["v-7c92b45e","/study/study2.html",{},["/study/study2","/study/study2.md"]],
  ["v-79290320","/study/study3.html",{},["/study/study3","/study/study3.md"]],
  ["v-75bf51e2","/study/study4.html",{},["/study/study4","/study/study4.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
  ["v-8daa1a0e","/",{},["/index.html"]],
  ["v-74bc627b","/about/",{},["/about/index.html"]],
  ["v-14f724bf","/mood/",{},["/mood/index.html"]],
  ["v-14e6501c","/link/",{},["/link/index.html"]],
  ["v-744d024e","/tag/",{},["/tag/index.html"]],
  ["v-705c21a6","/archive/",{},["/archive/index.html"]],
  ["v-6629f178","/aurora-coze/",{},["/aurora-coze/index.html"]],
  ["v-f693f690","/aurora-register/",{},["/aurora-register/index.html"]],
  ["v-e2acc714","/photo/",{},["/photo/index.html"]],
  ["v-3c506944","/aurora-music/",{},["/aurora-music/index.html"]],
  ["v-3279cf61","/aurora-archive/",{},["/aurora-archive/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
