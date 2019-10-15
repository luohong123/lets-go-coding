/*
 * @Author: honghong
 * @Date: 2019-09-25 10:15:42
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-15 19:09:49
 * @Description: 
 * @email: 3300536651@qq.com
 */
module.exports = {
    title: 'lets-go-coding',
    description: '动起手来，让我们一起编码吧~',
    base: '/lets-go-coding/',
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '仓库',
                link: '/repository/'
            },
            {
                text: '网站',
                link: '/website/'
            },
            {
                text: '黄金屋',
                link: '/goldhouse/'
            },
            {
                text: '文章',
                link: '/article/'
            },
            {
                text: 'MDN',
                link: '/mdn/'
            },
            {
                text: '实践',
                link: '/practice/'
            },
            {
                text: 'JavaScript',
                link: '/JavaScript/'
            },
            {
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
            {
                text: '分享',
                link: '/share/'
            },
            {
                text: 'interview',
                link: '/interview/'
            },
            {
                text: '操作命令',
                link: '/command/'
            },
            {
                text: '博客',
                link: 'https://luohong123.github.io/'
            },
            {
                text: 'github',
                link: 'https://github.com/luohong123/lets-go-coding'
            },
        ],
        sidebar: {
            '/JavaScript/': [
                '/JavaScript/',
                '/JavaScript/手写instanceof'
            ],
            '/practice/': [
                '/practice/',
                '/practice/工程化'
            ],
            '/goldhouse/': [
                '/goldhouse/',
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
                '/share/算法学习心得'
            ]
        }
    }
};