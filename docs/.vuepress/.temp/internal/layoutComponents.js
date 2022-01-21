import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/mi/Desktop/我的博客/node_modules/vuepress-theme-aurora/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/mi/Desktop/我的博客/node_modules/vuepress-theme-aurora/lib/client/layouts/Layout.vue")),
}
