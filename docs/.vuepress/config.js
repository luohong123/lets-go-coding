/*
 * @Author: honghong
 * @Date: 2019-09-25 10:15:42
 * @LastEditors: honghong
 * @LastEditTime: 2019-09-25 14:09:44
 * @Description: 
 * @email: 3300536651@qq.com
 */
module.exports = {
    title: 'lets-go-coding',
    // description: '青成的前端知识架构',
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
                text: '数据结构',
                link: '/dataStructure/'
            },
            {
                text: '算法',
                link: '/algorithm/'
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
                    title: '数据结构',
                    children: [
                        '/dataStructure/二叉树/二叉树基础',
                    ]
                },
            ],
            '/algorithm/': [
                '/algorithm/',
                {
                    title: '查找',
                    children: [
                        '/algorithm/查找/查找',
                    ]
                },
            ]
        }
    }
};