/*
 * @Author: honghong
 * @Date: 2019-09-25 10:15:42
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-18 15:32:29
 * @Description: 
 * @email: 3300536651@qq.com
 */
module.exports = {
    title: 'lets-go-coding',
    description: '动起手来，让我们一起编码吧~',
    base: '/lets-go-coding/',
    themeConfig: {
        sidebarDepth: 3,
        lastUpdated: 'Last Updated',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '阅读',
                link: '/goldhouse/'
            },
            {
                text: '实践',
                link: '/practice/'
            },
            {
                text: '技能提升',
                items: [{
                        text: 'JavaScript',
                        link: '/JavaScript/'
                    }, {
                        text: 'three.js',
                        link: '/visual/Threejs基础/'
                    }, {
                        text: '可视化',
                        link: '/visual/'
                    },
                    {
                        text: '数据结构',
                        link: '/dataStructure/'
                    },
                    {
                        text: '算法',
                        link: '/algorithm/'
                    },
                ]
            },
            {
                text: '分享',
                link: '/share/'
            },
            {
                text: 'interview',
                link: '/interview/'
            },
            // {
            //     text: '博客',
            //     link: 'https://luohong123.github.io/'
            // },
            {
                text: 'github',
                link: 'https://github.com/luohong123/lets-go-coding'
            },
        ],
        sidebar: {
            '/JavaScript/': [
                '/JavaScript/',
                '/JavaScript/TypeScript'
            ],
            '/visual/Threejs基础': [
                '/visual/Threejs基础/',
                {
                    title: 'threejs学习笔记',
                    children: [
                        '/visual/Threejs基础/1-three.js快速入门',
                        '/visual/Threejs基础/2-顶点概念、几何体结构',
                        '/visual/Threejs基础/3-材质对象',
                        '/visual/Threejs基础/4-模型对象',
                        '/visual/Threejs基础/5-光源对象',
                        '/visual/Threejs基础/6-层级模型、树结构',
                        '/visual/Threejs基础/7-几何体 对象、曲线、三维建模',
                        '/visual/Threejs基础/8-纹理贴图',
                        '/visual/Threejs基础/9-相机对象(投影方式)',
                        '/visual/Threejs基础/10-精灵模型、粒子系统',
                        '/visual/Threejs基础/11-帧动画模块',
                        '/visual/Threejs基础/12-骨骼、变形动画',
                        '/visual/Threejs基础/13-语音模块 ',
                        '/visual/Threejs基础/14-模型文件加载',
                        '/visual/Threejs基础/15-WebGL渲染器',
                    ]
                }

            ],
            '/practice/': [
                '/practice/',
                '/practice/工程化',
                {
                    title: '操作命令',
                    children: [
                        '/practice/command/mac'
                    ]
                },
                '/practice/RESTfulAPI',
            ],
            '/goldhouse/': [
                '/goldhouse/',
                '/goldhouse/article/',
                '/goldhouse/mdn/',
                {
                    title: 'JavaScript高级程序设计',
                    children: [
                        '/goldhouse/jsAdvanceProgram/第 1 章 JavaScript简介/',
                        '/goldhouse/jsAdvanceProgram/第 2 章 在HTML中使用JavaScript/',
                        '/goldhouse/jsAdvanceProgram/第 3 章 基本概念/',
                        '/goldhouse/jsAdvanceProgram/第 4 章 变量、作用域和内存问题/',
                        '/goldhouse/jsAdvanceProgram/第 5 章 引用类型/',
                        '/goldhouse/jsAdvanceProgram/第 6 章 面向对象的程序设计/',
                        '/goldhouse/jsAdvanceProgram/第 7 章 函数表达式/',
                        '/goldhouse/jsAdvanceProgram/第 8 章 BOM/',
                        '/goldhouse/jsAdvanceProgram/第 9 章 客户端检测/',
                        '/goldhouse/jsAdvanceProgram/第 10 章 DOM/',
                        '/goldhouse/jsAdvanceProgram/第 11 章 DOM 扩展/',
                        '/goldhouse/jsAdvanceProgram/第 12 章 DOM2 和 DOM3/',
                        '/goldhouse/jsAdvanceProgram/第 13 章 事件/',
                        '/goldhouse/jsAdvanceProgram/第 14 章 表单脚本/',
                        '/goldhouse/jsAdvanceProgram/第 15 章 使用 Canvas 绘图/',
                        '/goldhouse/jsAdvanceProgram/第 16 章 HTML5脚本编程/',
                        '/goldhouse/jsAdvanceProgram/第 17 章 错误处理与调试/',
                        '/goldhouse/jsAdvanceProgram/第 18 章 JavaScript 与 XML/',
                        '/goldhouse/jsAdvanceProgram/第 19 章 E4X/',
                        '/goldhouse/jsAdvanceProgram/第 20 章 JSON/',
                        '/goldhouse/jsAdvanceProgram/第 21 章 Ajax 与 Comet/',
                        '/goldhouse/jsAdvanceProgram/第 22 章 高级技巧/',
                        '/goldhouse/jsAdvanceProgram/第 23 章 离线应用与客户端存储/',
                        '/goldhouse/jsAdvanceProgram/第 24 章 最佳实践/',
                        '/goldhouse/jsAdvanceProgram/第 25 章 新兴的 API/'
                    ]
                },
            ],
            '/dataStructure/': [
                '/dataStructure/',
                {
                    title: '数组',
                    children: [
                        '/dataStructure/数组/数组基础',
                    ]
                },
                {
                    title: '堆栈和队列',
                    children: [
                        '/dataStructure/堆栈和队列/堆栈和队列基础',
                        '/dataStructure/堆栈和队列/优先队列',
                    ]
                },
                {
                    title: '链表',
                    children: [
                        '/dataStructure/链表/链表基础',
                    ]
                },
                {
                    title: '哈希表和集合',
                    children: [
                        '/dataStructure/哈希表和集合/集合基础',
                        '/dataStructure/哈希表和集合/并查集',
                    ]
                },
                {
                    title: '字典和散列表',
                    children: [
                        '/dataStructure/字典和散列表/字典和散列表基础',
                        '/dataStructure/字典和散列表/字典树',
                    ]
                },
                {
                    title: '树',
                    children: [
                        '/dataStructure/树/树基础',
                        '/dataStructure/树/二叉树遍历',
                    ]
                },
                {
                    title: '图',
                    children: [
                        '/dataStructure/图/图基础',
                    ]
                },
                {
                    title: 'LRU Cache',
                    children: [
                        '/dataStructure/LRU Cache/LRU Cache基础',
                    ]
                },
                {
                    title: '布隆过滤器',
                    children: [
                        '/dataStructure/布隆过滤器/布隆过滤器基础',
                    ]
                },
            ],
            '/algorithm/': [
                '/algorithm/',
                {
                    title: '算法基础',
                    children: [
                        '/algorithm/算法基础/算法基础',
                    ]
                },
                {
                    title: '查找',
                    children: [
                        '/algorithm/查找/查找',
                        '/algorithm/查找/二分查找',
                    ]
                },
                {
                    title: '递归',
                    children: [
                        '/algorithm/递归/递归基础',
                    ]
                },
                {
                    title: '分治',
                    children: [
                        '/algorithm/分治/分治基础',
                    ]
                },
                {
                    title: '回溯',
                    children: [
                        '/algorithm/回溯/回溯基础',
                    ]
                },
                {
                    title: '贪心算法',
                    children: [
                        '/algorithm/贪心算法/贪心算法基础',
                    ]
                },
                {
                    title: 'DFS和BFS',
                    children: [
                        '/algorithm/DFS和BFS/深度优先DFS+广度优先BFS',
                    ]
                },
                {
                    title: '剪枝',
                    children: [
                        '/algorithm/剪枝/剪枝基础',
                    ]
                },
                {
                    title: '位运算',
                    children: [
                        '/algorithm/位运算/位运算基础',
                    ]
                },
                {
                    title: '动态规划',
                    children: [
                        '/algorithm/动态规划/动态规划基础',
                    ]
                },
            ],
            '/share/': [
                '/share/',
                '/share/repository',
                '/share/website',
                '/share/算法学习心得'
            ],
            '/interview/': [
                '/interview/',
                '/interview/总结',
            ]
        }
    }
};