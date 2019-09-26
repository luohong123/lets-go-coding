/*
 * @Author: honghong
 * @Date: 2019-09-25 10:15:42
 * @LastEditors: honghong
 * @LastEditTime: 2019-09-26 17:29:54
 * @Description: 
 * @email: 3300536651@qq.com
 */
module.exports = {
    title: 'lets-go-coding',
    description: '动起手来，让我们一起编码吧~',
    base: '/lets-go-coding/docs/fe/',
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'JavaScript',
                link: '/JavaScript/'
            },
            {
                text: '数据结构分类',
                link: '/dataStructure/'
            },
            {
                text: '算法分类',
                link: '/algorithm/'
            },
            {
                text: '分享',
                link: '/share/'
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
            '/dataStructure/': [
                '/dataStructure/',
                {
                    title: '数组',
                    children: [
                        '/dataStructure/树/二叉树基础',
                    ]
                },
                {
                    title: '栈',
                    children: [
                        '/dataStructure/栈/栈基础',
                    ]
                },
                {
                    title: '队列',
                    children: [
                        '/dataStructure/队列/队列基础',
                    ]
                },
                {
                    title: '链表',
                    children: [
                        '/dataStructure/链表/链表基础',
                    ]
                },
                {
                    title: '集合',
                    children: [
                        '/dataStructure/集合/集合基础',
                    ]
                },
                {
                    title: '字典和散列表',
                    children: [
                        '/dataStructure/字典和散列表/字典和散列表基础',
                    ]
                },
                {
                    title: '树',
                    children: [
                        '/dataStructure/树/树基础',
                    ]
                },
                {
                    title: '图',
                    children: [
                        '/dataStructure/图/图基础',
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
                    ]
                },
            ],
            '/share/': [
                '/share/',
                {
                    title: '算法学习心得',
                    children: [
                        '/share/迷茫'
                    ]
                }
            ]
        }
    }
};