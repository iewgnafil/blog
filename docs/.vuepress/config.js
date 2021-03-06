/*
* 此文件是博客的配置文件，你可以在这里配置插件，还有主题配置项
* 在使用的过程中，推荐对照这文档进行配置，主题文档地址https://aurora.xcye.xyz/，下面这些配置项，你在配置的时候，不用问我，每一个是什么，有什么用
* 你自己配置之后，重新运行npm run dev，刷新网页，便可以看到效果，就知道他是什么
*
* 一定要记得，你修改过此文件，一定要重新运行npm run dev命令，为了配置方便，如果你还没有下载任何的编辑器的话，推荐下载一个vscode,官网https://code.visualstudio.com/Download
* 如果有任何的问题，欢迎加入主题交流群询问: 681602026,
* */

const { path } = require("@vuepress/utils");
module.exports = {
    //base: '/REPO/',//如果你准备发布到 https://<USERNAME>.github.io/<REPO>/ ，也就是说你的仓库地址是 https://github.com/<USERNAME>/<REPO> ，则将 base 设置为 "/<REPO>/"。

    extendsMarkdown: (md) => {

    },
    bundler: '@vuepress/bundler-webpack',


    //在这里配置插件 plugins是一个数组对象
    plugins: [
        //为博客加入搜索功能 https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            }
        ],

        //说说插件 请自行配置 https://aurora.xcye.xyz/plugin/coze
        [
            'vuepress-plugin-coze',
            {
                appId: 'lzzFTWdJ42SsTrlGnuyQ5hQT-MdYXbMMI',
                appKey: 'tHt7EVT9wSp1tMt2rDzJmaSu',
                masterKey: 'UsmiiAj8ENmDFVhShzgczvDP',
                //下面这些是可选的
                avatarPath: '/avatar.jpg',//说说头像url
                registerPath: '/aurora-register', //自定义插件默认提供的注册页面路由，请在前面加上/
                onlyAdministrator: true //是否运行其他注册的用户发布说说，true表示只有管理员可以发布

            }
        ],

        //为博客加入音乐播放器功能 https://aurora.xcye.xyz/plugin/player
        [
            'player',
            {
                //网易云单个歌单id
                songIds: ['2','1887893189','1421069053'],
                //网易云歌单
                playlist: '1890980793',
                showPlaylist: false,
                //是否禁用网易云音乐，如果你选择禁用，那么就将使用本地的歌曲，请传入链接
                disabledNetEaseMusic: true,

                //请求接口的baseURL
                serverUrl: 'https://netease-cloud-music-api-aurora.vercel.app/',

                //本地歌曲
                localSongs: {
                    coverUrl: 'https://s2.loli.net/2022/01/21/KYjOrXUu3SAWlga.jpg',
                    songs: [
                        {
                            path:'https://link.hhtjim.com/kw/145240987.mp3',
                            songName:'At My Worst ',
                            cover: 'https://img4.kuwo.cn/star/albumcover/500/36/1/81858386.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/874319.mp3',
                            songName: 'Talking to the Moon',
                            cover: 'https://img3.kuwo.cn/star/albumcover/500/86/71/959998653.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/163/1309689297.mp3',
                            songName: 'Better',
                            cover: 'https://img4.kuwo.cn/star/albumcover/500/67/78/3249608844.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/163/106212.mp3',
                            songName: 'Love The Way You Lie',
                            cover: 'https://img2.kuwo.cn/star/albumcover/500/40/37/2067235852.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/163/1484043441.mp3',
                            songName: 'What About',
                            cover: 'https://s2.loli.net/2022/01/21/PXGSkwrIpBiOUm4.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/6743740.mp3',
                            songName: 'For him.',
                            cover: 'https://img4.kuwo.cn/star/albumcover/500/75/74/252071260.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/15651705.mp3',
                            songName: 'IF YOU',
                            cover: 'https://img3.kuwo.cn/star/albumcover/500/52/11/1743583839.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/1248315.mp3',
                            songName: 'Boyfriend',
                            cover: 'https://img1.kuwo.cn/star/albumcover/500/97/83/2471325083.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/41336099.mp3',
                            songName: '90 ',
                            cover: 'https://img2.kuwo.cn/star/albumcover/500/73/88/2609429011.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/40834629.mp3',
                            songName: 'I Am You ',
                            cover: 'https://img1.kuwo.cn/star/albumcover/500/75/94/2993433410.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/141021523.mp3',
                            songName: 'Love Is Gone (feat. Dylan Matthew)',
                            cover: 'https://img1.kuwo.cn/star/albumcover/500/47/23/2750680458.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/5746692.mp3',
                            songName: 'Try ',
                            cover: 'https://img1.kuwo.cn/star/albumcover/500/51/20/1162448281.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/163/440208643.mp3',
                            songName: 'Psycho, Pt. 2 ',
                            cover: 'https://img1.kuwo.cn/star/albumcover/500/51/20/1162448281.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/163/21038748.mp3',
                            songName: 'Poker Face',
                            cover: 'https://img2.kuwo.cn/star/albumcover/500/32/30/3974407903.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/5272817.mp3',
                            songName: 'Meant To Be',
                            cover: 'https://img1.kuwo.cn/star/albumcover/500/58/1/1183672904.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/55890524.mp3',
                            songName: '지나갈 테니 (Been Through) ',
                            cover: 'https://img2.kuwo.cn/star/albumcover/500/81/91/4067067189.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/56507920.mp3',
                            songName: '사이 ',
                            cover: 'https://img1.kuwo.cn/star/albumcover/500/70/96/2050795391.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/90421476.mp3',
                            songName: '陪你 ',
                            cover: 'https://img4.kuwo.cn/star/albumcover/500/39/50/2449715636.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/163/1387645468.mp3',
                            songName: '那家花店 ',
                            cover: 'https://img3.kuwo.cn/star/albumcover/500/9/7/4106501921.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/165923393.mp3',
                            songName: '哪里都是你 ',
                            cover: 'https://img3.kuwo.cn/star/albumcover/500/60/23/2588031064.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/97058.mp3',
                            songName: '慢慢 ',
                            cover: 'https://img3.kuwo.cn/star/albumcover/500/91/98/2091382702.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/528817.mp3',
                            songName: '我们俩 ',
                            cover: 'https://img3.kuwo.cn/star/albumcover/500/36/20/2502176495.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/173428442.mp3',
                            songName: '输入法打可爱按第五(纯享版) ',
                            cover: 'https://img1.kuwo.cn/star/albumcover/500/69/25/1727684161.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/163/1294899029.mp3',
                            songName: '心事 ',
                            cover: 'https://img4.kuwo.cn/star/albumcover/500/21/31/3114801502.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/163/490595927.mp3',
                            songName: '不用去猜 ',
                            cover: 'https://img3.kuwo.cn/star/albumcover/500/3/19/3882298037.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/320058.mp3',
                            songName: '单车',
                            cover: 'https://img2.kuwo.cn/star/albumcover/500/52/60/2059257085.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/86509214.mp3',
                            songName: '大城小爱(Live)',
                            cover: 'https://img4.kuwo.cn/star/albumcover/500/50/96/251744353.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/163/1422461683.mp3',
                            songName: '就是爱你(正式版)',
                            cover: 'https://img4.kuwo.cn/star/albumcover/500/23/58/1956405917.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/440615.mp3',
                            songName: '花海',
                            cover: 'https://img3.kuwo.cn/star/albumcover/500/72/44/3648126291.jpg'
                        },
                        {
                            path: 'https://link.hhtjim.com/kw/94237.mp3',
                            songName: '七里香',
                            cover: 'https://img2.kuwo.cn/star/albumcover/500/30/97/4276557883.jpg'
                        },
                    ]
                }
            }
        ],

        //为博客加入气泡功能 https://aurora.xcye.xyz/plugin/bubble 如果需要，请打开注释
        /*[
            'bubble',
            {
                //气泡数量 推荐0(不包括)到1之前的小数，
                bubbleNumber: 0.14,

                //气泡透明度 0到1之间的小数
                bubbleAlpha: 0.4,

                //透明度变化速度，越接近于0越好
                alphaChangeSpeed: 0.00001,

                //气泡大小，推荐0到1之间的值
                size: 0.4,

                //气泡大小变化速度 越小越好
                sizeChangeSpeed: 0.0002,

                //气泡上升速度
                riseSpeed: 0.4,

                //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
                color: '255,255,255',

                zIndex: -2
            }
        ],*/

        //为博客加入文章归档功能 https://aurora.xcye.xyz/plugin/archive
        [
            'archive',
            {
                //需要排除的页面url，在该数组里面的路径，都不会被统计
                excludes: ['/404.html','/about/','/mood/','/link/','/tag/','/photo/','/aurora-archive/','/aurora-music/','/aurora-register/','/aurora-coze/','/archive/','/'],
                //当某篇文章没有标题时，将使用下面值进行替换
                noTitle: '暂时没有标题配置'
            }
        ],
    ],
    //设置head 一定要加入<script src="https://at.alicdn.com/t/font_2849934_v6y652peian.js"></script>项配置，否则一些图标不能正常显示
    head: [
        [
            "script",
            {
                src: "https://at.alicdn.com/t/font_2849934_v6y652peian.js",
            },
        ],
        //设置站点icon
        [
            "link",
            {
                href: "https://s2.loli.net/2022/01/21/PXGSkwrIpBiOUm4.jpg",
                rel: "icon",
            },
        ],
        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2932340_r7zitafg82.css'
            }
        ],
        /*[
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2951154_btu3y5blqnn.css'
            }
        ]*/
    ],

    //theme: path.resolve(__dirname, "../../Aurora-theme/lib/node/index.js"),//这里使用本地主题 打开此注释将使用本地主题 此处和theme: 'aurora'，只能二选一
    theme: 'aurora', //如果需要使用在线主题，那么打开此注释

    //站点title
    title: "IEWGANFIL",

    lang: 'zh-CN',

    // base: '/blog/',

    //设置运行npm run dev的端口
    port: 8080,

    //themeConfig的所有配置，都是主题配置，包含默认主题配置项
    themeConfig: {
        donate:{articlePage: false},
        //这里配置导航栏项，建议将navbar提取出，比如navbar.js
        navbar: [
            // {
            //     text: '算法相关',
            //     iconClass: 'aurora-navbar-si-glyph-billiard-ball',
            //     children: [
            //         {
            //             text: 'LeetCode',
            //             link: 'https://leetcode-cn.com/problemset/all/'
            //         },
            //         {
            //             text: '书籍',
            //             link: 'https://programmercarl.com/'
            //         }
            //     ]
            // },
            /*{
                text: "所有配置",
                link: '/home/config.html',
                iconClass: 'aurora-link'
            },*/
            {
                text: '好用网站',
                iconClass: 'aurora-navbar-si-glyph-glass-water',
                children: [
                    {
                        text: '网站',
                        children: [
                            {
                                text: '掘金主页',
                                link: 'https://juejin.cn/user/1082363860234023',
                            },
                            {
                                text: 'MVCAT',
                                link: 'https://www.mvcat.com/movie/'
                            },
                            {
                                text: '图片上传',
                                link: 'https://sm.ms/'
                            },
                            {
                                text: '音乐转换',
                                link: 'https://link.hhtjim.com/'
                            }
                        ]
                    },
                    {
                        text: '文档',
                        children: [
                            {
                                text: "MDN",
                                link: 'https://developer.mozilla.org/zh-CN/',
                            },
                            {
                                text: '菜鸟教程',
                                link: 'https://www.runoob.com/'
                            },
                            {
                                text: 'vue',
                                link: 'https://cn.vuejs.org/'
                            }
                        ]
                    },
                    {
                        text: '算法相关',
                        iconClass: 'aurora-navbar-si-glyph-billiard-ball',
                        children: [
                            {
                                text: 'LeetCode',
                                link: 'https://leetcode-cn.com/problemset/all/'
                            },
                            {
                                text: '书籍',
                                link: 'https://programmercarl.com/'
                            }
                        ]
                    },
                ]
            },
            {
                text: '学习相关',
                iconClass: 'aurora-navbar-kechengguanli',
                children: [
                    {
                        text: '前端一百问',
                        link: 'https://juejin.cn/post/6844903885488783374'
                    },
                    {
                        text: 'GitHub选择题',
                        link: 'https://github.com/lydiahallie/javascript-questions'
                    },
                    {
                        text: '高频前端汇总',
                        link: 'https://juejin.cn/post/6940945178899251230'
                    },
                    {
                        text: '大厂面试秘籍',
                        link: 'https://juejin.cn/post/6844903776512393224'
                    },
                    {
                        text: '十大经典排序算法总结',
                        link: 'https://juejin.cn/post/6844903444365443080'
                    },
                    {
                        text: '牛客前端面试',
                        link: 'https://www.nowcoder.com/tutorial/96/f5212664ab664984882b00635066ded2'
                    }
                ]
            },
            {
                text: '学校',
                iconClass: 'aurora-navbar-si-glyph-emoticon',
                children: [
                    {
                        text: "VPN",
                        link: 'https://nic.ecut.edu.cn/f9/d1/c4905a63953/page.htm'
                    },
                    {
                        text: "学习通",
                        link: 'http://passport2.chaoxing.com/login?fid=&newversion=true&refer=http%3A%2F%2Fi.chaoxing.com'
                    },
                ]
            },
            {
                text: "About",
                link: "/about",
                iconClass: 'aurora-navbar-a-ziyuan107',
                
            },
            {
                text: 'Tag',
                link: '/tag',
                iconClass: 'aurora-navbar-hua2'
            },
            {
                text: "Time",
                link: '/archive',
                iconClass: 'aurora-navbar-shoulijindu-xuanzhong'
            },
            // {
            //     text: "Photos",
            //     link: '/photo',
            //     iconClass: 'aurora-navbar-si-glyph-egg'
            // },
            {
                text: 'Mood',
                iconClass: 'aurora-navbar-si-glyph-game-1',
                children: [
                    {
                        text: 'chat',
                        children:[
                            {
                                text: "mood",
                                link: '/mood'
                            },
                            {
                                text: "Photos",
                                link: '/photo',
                            },
                            {
                                text: "注册",
                                link: '/aurora-register'
                            },
                            
                        ]
                    },
                ]
            },
            {
                text: 'IEWGANFIL',
                link: 'https://github.com/iewganfil',
                iconClass: 'aurora-navbar-github-circle'
            },
            
        ],

        //禁用黑夜模式，当前版本未提供
        darkMode: false,

        //项目地址
        repo: "https://github.com/iewganfil/blog",

        repoIconClass: 'IEWGANFIL',

        //md文件的仓库地址
        docsRepo: 'https://github.com/iewganfil',

        /*
        * 站点是否是使用github Actions自动部署，如果你使用github Actions完成自动部署，那么这里一定要为TRUE，为TRUE，假如你把此项目push
        * 到https://github.com/qsyyke/aurora-docs这个仓库中，那么你需要将docsRepo设置为https://github.com/qsyyke/aurora-docs，
        * 那么在文章页面，会根据根据你docsRepo和docsBranch设置正确的edit链接，也就是可以一键打开GitHub仓库中，此篇md文件的编辑
        * */
        githubActions: true,

        //md文件存放的仓库分支
        docsBranch: 'main',

        //顶部导航栏，你repo地址的超链接文本
        repoLabel: "IEWGANFIL",

        //是否启用文章在线编辑
        editLink: false,

        //在线编辑文字
        editLinkText: "edit",
        lastUpdated: true,
        lastUpdatedText: "lastTime",

        //下面的都是主题自己的配置文件
        //logo旁文字颜色
        logoColor: "#2c3e50",

        //样式控制面板字体占位符，如果是国内用户，请使用中文
        showFont: "李",

        //首页中间hero图片地址，默认为https://ooszy.cco.vin/img/blog-public/avatar.jpg
        //heroImg: '/avatar.jpg',
        heroImg: '/avatar.jpg',

        //logo图片地址，默认为https://ooszy.cco.vin/img/ico/yuan.png
        logo: "/avatar.jpg",

        //文章懒加载图片 仅限文章，首页文章占位图片并不是这个
        lazyLoadingImg: "https://ooszy.cco.vin/img/blog-public/ljz.gif",

        //这是首页文章列表懒加载图片
        homePageLazyLoadingImg: 'https://ooszy.cco.vin/img/blog-public/ljz.gif',

        //是否启用定制首页随机一言，默认未开启，使用随机一言 接口为https://international.v1.hitokoto.cn/?c=b&max_length=45
        customRandomSay: false,

        //定制首页随机一言文字
        customRandomValue: 'Vuepress-theme-Aurora',

        //社交信息，首页PC端至多显示19个，手机端至多显示7个，侧边栏不影响
        socials: [
            {
                //社交链接
                aHref: "tencent://message/?uin=1519467168",
                // imgSrc: "https://ooszy.cco.vin/img/ico/qq.svg", 从v1.3.2开始久移除次配置，以前版本用于社交ico图标配置

                //true为在首页显示，反之
                isHome: true,

                //是否显示此社交信息,如果为false，尽管isHome=true，sidebar=true，也不会显示
                show: true,

                //是否在侧边栏显示
                sidebar: true,

                //使用阿里图标 使用的是阿里图标库，我也挑选部分图标，请进入http://ico.cco.vin/theme查看
                symbol: '#icon-qq',

                //鼠标移入此图标时，显示的图片，适用于微信等通过二维码添加好友
                // showImgSrc: "https://s2.loli.net/2022/01/24/Ya4RIyxHZnS2UTs.jpg",
            },
            {
                aHref: "https://github.com/iewgnafil",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-github-fill'
            },
            {
                aHref: "https://juejin.cn/user/1082363860234023",
                isHome: true,
                show: true,
                symbol: '#icon-juejin',
                sidebar: true
            },
            {
                aHref: "https://space.bilibili.com/443173945",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-bilibili-1'
            },
            {
                aHref: "https://music.163.com/#/user/home?id=1890980793",
                isHome: true,
                show: true,
                symbol: '#icon-wangyiyunyinle',
                sidebar: true
            },
            {
                aHref: "mailto:1519467168@qq.com",
                isHome: true,
                show: true,
                sidebar: true,
                symbol: '#icon-email'
            },
        ],

        // cancelIcoHref: "https://ooszy.cco.vin/img/ico/quxiao.svg", 在v1.3.2中移除

        //logo旁文字 默认值为Aurora
        logoTitle: "IEWGANFIL",

        headTitle: "this is headTitle",

        //站点描述
        description: "IEWGANFIL 学习网站",

        //站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号','隔开
        keyword: "vuepress主题,vuepress theme,生活琐事,简约博客,博客主题,静态主题",

        //样式控制面板打开之后，休眠多长时间自动关闭面板，单位毫秒
        slideTime: 300000,

        //随机一言接口
        randomSaw: "https://international.v1.hitokoto.cn/?c=b&max_length=45",
        //关于页面
        about: [
            {
                bar: false,
                title: "我?",
                describe: [
                    "目前是一名大三学生",
                    "偶尔动态、偶尔存在、不善社交",
                    "把节奏放慢，生活也是，爱情例外",
                    "遇到不好的事情，酌情处理，适当过滤",
                    "你所见即我，好与坏都不重要",
                    '门庭冷落，来者需诚',
                    "不能与你感同身受但能做你的最佳听众",
                    "会心动、会难过、会感动、会生气、想好好生活",
                    "一个能力很小欲望很大的普通人☔"
                ],
                tag: [
                    "coding",
                    "电影",
                    "音乐",
                    "懒",
                ],
                showTag: true,
            },
            {
                bar: false,
                title: "大三规划",
                describe: [
                    "做项目",
                    "想找实习",
                    "复习数据结构",
                    "做点什么有意义的事",
                ],
                tag: ["大家加油呀`Σ(￣□￣||)` ..."],
                showTag: true,
            },
            {
                bar: false,
                title: "未来规划",
                describe: ["前端工程师", "赚money"],
                tag: ["忘记过去，展望未来"],
                showTag: true,
            },
            {
                bar: true,
                title: "技  能",
                describe: [
                    {
                        name: "java",
                        score: 20,
                    },
                    {
                        name: "HTML5",
                        score: 60,
                    },
                    {
                        name: "javascript",
                        score: 60,
                    },
                    {
                        name: "css",
                        score: 60,
                    },
                    {
                        name: "mysql",
                        score: 20,
                    },
                    {
                        name: "vue",
                        score: 60,
                    },
                    {
                        name: "spring",
                        score: 0,
                    },
                    {
                        name: "springMVC",
                        score: 0,
                    },
                    {
                        name: "springBoot",
                        score: 0,
                    },
                ],
                showTag: false,
            },

            {
                showTag: false,
                bar: true,
                title: "掌握框架",
                describe: [
                    {
                        name: "spring",
                        score: 0,
                    },
                    {
                        name: "springMVC",
                        score: 0,
                    },
                    {
                        name: "springBoot",
                        score: 0,
                    },
                    {
                        name: "vue",
                        score: 60,
                    },
                ],
            },
            {
                bar: true,
                showTag: false,
                title: "掌握技能",
                describe: [
                    {
                        name: "linux",
                        score: 0,
                    },
                    {
                        name: "git",
                        score: 50,
                    },
                    {
                        name: "Ctrl C V",
                        score: 100,
                    },
                ],
            },
        ],


        //拿取对象 在后续版本中，会对此项进行优化
        randomSawQuery: "hitokoto",
        method: "get",

        //这是配置随机背景；颜色 可以不设置，有默认值
        randomColor: [
            
            "#54b8f7"
        ],

        //样式控制面板至多显示多少个字体和字体颜色，推荐不超过8个
        maxFontColorArr: 8,

        //在样式控制面板中，显示的字体颜色集合
        fontColor: [
            "#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7", "#FF7F00", "#8FBC8F", "#EAADEA",
            "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
        ],

        //友情链接数组
        friendLinks: [
            {
                title: '我的朋友',
                links: [
                    {
                        //网站标题
                        title: "IEWGANFIL",

                        //站点链接
                        url: "http://8.134.129.78/",

                        //站点logo
                        logo: "https://s2.loli.net/2022/01/21/KYjOrXUu3SAWlga.jpg",

                        //站点描述
                        describe: "人生若只是初见,何事秋风悲画扇",

                        cover: "https://s2.loli.net/2022/01/24/RxMbWdsieDP9I8c.png"
                    },
                    {
                        title: "小鱼想买718",
                        url: "http://smallfish.space/",
                        logo: "http://smallfish.space/img/1.jpg",
                        describe: "不会辜负她和梦想的男人",
                        cover: "https://s2.loli.net/2022/01/24/i3F5VRHSBszMNLY.png",//博客截屏
                    }
                ]
            }
        ],

        //自己的站点信息 我自己的站点描述 会显示在友情链接的底部
        // siteInformation: {
        //     //站点标题
        //     title: "Aurora-theme",

        //     //自己站点链接
        //     url: "https://aurora.cco.vin",

        //     //自己站点logo
        //     logo: "https://ooszy.cco.vin/img/ico/yuan.png",

        //     //自己站点描述
        //     describe: "vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题",
        //     cover: 'https://ooszy.cco.vin/img/blog-note/image-20211106100103898.png?x-oss-process=style/pictureProcess1',

        //     //自己的头像
        //     contact: "email: cqycco@gmail.com, qq:2291308094",
        //     otherDescribe: [
        //         '申请友链请按照下面格式，在此页面留言，我看到就会进行添加',
        //         '博客名称    博客地址      博客描述      博客logo',
        //         '友链申请要求',
        //         '拒绝涉政/涉黄/太多广告/盈利性站点',
        //         '站点能正常访问',
        //         '这是一个html的测试<a href="https://aurora.xcye.xyz" target="_blank">这是一个a标签</a>'
        //     ]
        // },

        //需要排除的标签，自动生成的标签中，不会有这个标签，这是一个数组
        //excludeTag: ["note"],

        //样式控制面板显示的字体，有默认值
        fontFamily: [
            "-apple-system", "hlt", "tzt", "sst", "lf", "xsf", "lsf", "cgt",
        ],

        //页脚信息，支持HTML，这是一个数组
        footer: [
            "Copyright © by IEWGANFIL All Rights Reserved.",
            "<a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36073202360802' style='display:inline-block;text-decoration:none;height:20px;line-height:20px;'><img src='' style='float:left;'/><p style='float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;'>赣ICP备2022000943号-1</p></a>",
            // "<a href="http://beian.miit.gov.cn/">赣ICP备2022000943号-1</a>"
        ],

        //是否显示页脚，控制全局
        isShowFooter: true,

        //是否显示主题信息在页脚，为false关闭
        isShowThemeCopyright: false,

        //是否展示运行时间
        isShowRunTime: true,

        //网站开始时间，请按照以下格式进行
        startRunTime: "1/19/2022 12:22:00",

        //网站运行时间前缀
        prefixRuntime: "IEW已运行",

        //公告，是一个数组，支持图片，HTML
        message: [
            "STUDY CODING",
            "⭐⭐⭐⭐⭐"
        ],

        //文章底部最大推荐文章数 默认值为30
        recommendPageLength: 30,

        //推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`
        recommendNoTitle: "`╮(￣▽￣)╭`",

        //tag页，没有标题时，代替文字 默认是下面这个
        tagNoTitle: "暂时还没有标题哟",

        //首页中间框的话语
        mood: "IEWGANFIL",

        //默认打开网站时的毛玻璃状态，TRUE表示默认开启毛玻璃效果
        isFitter: true,

        //默认的圆角，传入数字
        defaultBorderRadius: 20,

        //默认的透明度，传入0到1之间的小数，0表示全透明
        defaultOpacity: 1,

        //首页文章列表透明度是否跟随样式面板改变，true表示跟随，全白色,false表示不跟随
        isHomePageFollow: true,

        //默认模糊度
        defaultBlur: 1,

        //手机端，是否在页面的底部显示侧边栏列表，默认开启，如果需要开启，请将此值设置为FALSE
        //mobilePageSidebar: false,

        //tag页面，标签分割符 请不要传入一个空字符串，默认值就是' ' 一个空格
        split: "~",

        //赞赏信息
        
        //评论配置 请自己查看文档配置 https://aurora.cco.vin/config/comment/
        comment: {
            //是否显示评论
            showComment: true,
            serverURL: 'https://blog-message-8xz9uhokh-iewgnafil.vercel.app/',
            emojis: [
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo'
            ],
            avatar: 'monsterid'
        },

        //海报分享配置
        poster: {
            //博客描述
            description: "CODING",

            //作者
            author: "IEWGANFIL",

            //博客前缀
            preBlog: "IFL",

            //海报博客名称后缀
            suffixBlog: " CODING",

            //头像，请放置在docs/public目录下，或者请保证此图片链接能够跨域访问，否则头像不能正常显示
            avatar: "https://s2.loli.net/2022/01/21/KYjOrXUu3SAWlga.jpg",
        },

        //是否展示从网络上请求回来的说说 如果启用，请自己写后台服务，修改源码，目前暂未在主题中加入，期望在将来能够实现，组件位置docs/.vuepress/theme/lib/client/components/Mood.vue
        showOnlineMood: true,

        //是否开启在线添加说说功能，如果需要，请自己写后台，修改源码，目前在主题内部暂未加入 组件位置docs/.vuepress/theme/lib/client/components/child/AddMood.vue
        showMoodEdit: false,

        //此项仅限我自己的增加说说请求配置，暂未提供注册服务，目前仅限自己使用，可能在以后完善之后，你们只需要简单配置下，就能使用了，期待
        addMood: {
            siteName: "localhost:8080",
            appId: "q4LlYVTTk2r39sNrJr7BL9A6p",
            appKey: "VxezWTppppyX2LTx4TUK8w6e2",
        },

        //自定义顶部图片
        customTopImg: {
            //是否启用定制顶部图片，控制全局，如果关闭，那么将使用随机图片，随机图片接口可以自己设置
            custom: true,

            //文章顶部图片，数组，每次从数组中随机选择一张
            page: [
                '/bg/3.JPG'
            ],
            //友情链接页面
            friend: [
                '/bg/3.jpg'
            ],
            //标签页面
            tag: [
                '/bg/3.jpg'
            ],
            //心情页面
            mood: [
                '/bg/3.jpg'
            ],
        },

        //首页背景图片数组，考虑到使用随机图片，打开网站速度变慢，所以移除随机图片，使用自己设置的图片链接
        homeWps: [
            'https://www.iewganfil.top/bg/3.JPG'
        ],
        /* homeWps: [
             '/bg/1.jpg',
             '/bg/2.jpg',
             '/bg/3.jpg',
             '/bg/4.jpg',
             '/bg/5.jpg',
         ],*/

        //手机端首页背景图片
        /*homeWpsMobile: [
            "https://ooszy.cco.vin/img/blog-note/881770.jpg",
            "https://ooszy.cco.vin/img/blog-note/109136.jpg",
            "https://ooszy.cco.vin/img/blog-note/929842.jpg",
        ],*/
        homeWpsMobile: [
            '/bg/4.jpg',
            // '/bg/3.jpg',
        ],

        //首页文章显示条数，默认为4，此值不推荐设置太大
        pageSize: 3,

        //侧边栏配置
        //github地址
        githubUrl: "https://github.com/iewgnafil",

        //最新文章数量，默认为6
        latestPageSize: 6,

        //首页是否显示文章图片，默认关闭，如果显示的话，首页加载会非常慢 已弃用，从v1.3.2开始，直接移除首页文章内容图片
        showHomePageImg: false,

        //文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件
        sidebarCatalogLevel: 1,

        //首页文章列表封面图api接口
        homePageImgApi: "",

        //手机端侧边栏横线分割文字，默认为Aurora
        mobileCutText: "IEWGANFIL",

        //侧边栏标签处显示还是分类还是标签，只有两个值，默认为分类，如果为categories，那么就显示为类别，否则显示为标签
        sidebarTag: "categories",

        //额外的功能，也就是样式控制面板上面那个，默认是关闭的
        showAddMood: true,

        //生成海报的顶部图片api接口，请注意，该接口需要直接返回图片地址，不能有跨域问题，设置之前，可以先使用ajax看是否存在跨域
        postImgApi: 'https://picture.cco.vin/pic/rmimg?type=bing',

        /*
        * 以下为v1.5.4新增功能
        * */

        //文章h2标签的icon
        articleH2Icon: '⭐',

        //文章h3标签的icon
        articleH3Icon: '🐳',

        //文章h4标签及h4标签之后的标签的icon
        articleH4Icon: '⛄',

        //v1.6.4新增配置
        sidebarAvatar: '/avatar.jpg',

        //1.7.1增加配置
        sugCountPerMin: 300,

        //v1.8.0新增配置项
        //是否展示文章推荐 默认展示
        showRecommend: false,

        //文章页面是否显示上一页，下一页 默认展示
        articlePagination: true,

        //这个global暂时没用
        global: {
            sidebar: {
                showStatus: true,
                perData: false,
                social: false,
                friendLink: true,
                navbar: false,
                latestPage: true,
                message: false,
                tag: true,
                siteData: false
            },
            footer: false,
        },

        //excludeTag: ["note"], 此配置项，不再需要使用

        //在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径，
        excludePath: ['/footer.html','/v1.3.0/','/plugin/',"/node.html","/style.html"],

        //类别项是否包含文件夹名，默认包含
        categoriesIncludeFolderName: true,
        //首页波浪效果设置
        wave: {
            showWave: true
        },

        //顶部图片的气泡控制
        bubble: {
            show: true,

            //气泡数量 推荐0(不包括)到1之前的小数，
            bubbleNumber: 0.14,

            //气泡透明度 0到1之间的小数
            bubbleAlpha: 0.6,

            //透明度变化速度，越接近于0越好
            alphaChangeSpeed: 0.00001,

            //气泡大小，推荐0到1之间的值
            size: 0.4,

            //气泡大小变化速度 越小越好
            sizeChangeSpeed: 0.0002,

            //气泡上升速度
            riseSpeed: 0.4,

            //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
            color: '255,255,255'
        },

        /**
         * 这里是配置统计阅读量的leanCloud配置，从1.9.0开始，将不再需要依赖waline的阅读统计,这里配置的appId,appKey,masterKey可以
         * 和vuepress-plugin-coze插件使用同一个应用
         * */
        leanCloud: {
            appId: '2A2Dyd2AffrnldhwftlEddVn-MdYXbMMI',
            appKey: 'qHYTbb91iOPLelyC9lpbXxLH',
            masterKey: 'eUwfvS3luIPnPiHS5SpEhDYr',
        },

        //这是v1.9.0新增加的功能 是否在文章页底部显示最后更新时间，贡献者，点击编辑,默认显示
        showPageMeta: true,

        /*
        * 以下是1.11.0版本新增的配置项
        * */

        //随机一眼接口，请注意，一定要保证该接口直接返回Text文本，一定要保证该接口直接返回Text文本，而不是返回json
        randomSayApi: {
            method: 'GET',
            urlApi: 'https://v1.hitokoto.cn/?encode=text&c=a'
        },

        /*
        * 一下是v1.11.1版本增加的配置
        * */
        // afDianUrl: 'https://afdian.net/@qsyyke',//你的爱发电个人页面地址

         /*
        * 下面这些是v1.12.0版本新增的配置项
        * */

        // 首页置顶文字
        homeTopText: 'Top',

        //侧边栏一句话描述
        sidebarDesc: 'COGING、STUDY',
        /*
        * 下面的是v1.13.0版本的配置
        * */

        /*
        * 如果你以前使用的是其他的主题或者工具，比如hexo的主题，reco主题等等，发现frontmatter中的标签并不是使用tag字段设置，而是使用比如tags进行设置的
        * 那么你可以像customTagName: 'tags'自定义标签的字段，此配置仅仅针对于md文件设置的标签并不是使用tag字段，请注意，谨慎使用
        * */
        //customTagName: 'tags',

        /*
       * 如果你以前使用的是其他的主题，比如hexo，reco等等，发现frontmatter中的类别并不是使用categories字段，而是使用比如category进行设置的
       * 那么你可以像customCategoriesName: "category"这样自定义类别的字段，此配置仅仅针对于md文件设置的类别并不是使用categories字段，请注意，谨慎使用
       * */
        //customCategoriesName: "category"
    }
};
