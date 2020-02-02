/*
 * @Author: honghong
 * @Date: 2019-09-25 10:15:42
 * @LastEditors: honghong
 * @LastEditTime: 2020-02-02 10:48:03
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
                text: '剑指offer',
                link: '/剑指offer/'
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
                '/JavaScript/手写instanceof',
                '/JavaScript/Array',
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
            '/剑指offer/': [
                '/剑指offer/[1] 二叉树的镜像',
                '/剑指offer/[2] 链表中环的入口结点',
                '/剑指offer/[3] 删除链表中重复的结点',
                '/剑指offer/[4] 从尾到头打印链表',
                '/剑指offer/[5] 斐波那契数列',
                '/剑指offer/[6] 跳台阶',
                '/剑指offer/[7] 变态跳台阶',
                '/剑指offer/[8] 矩形覆盖',
                '/剑指offer/[9] 把字符串转换成整数',
                '/剑指offer/[10] 平衡二叉树',
                '/剑指offer/[11] 和为S的连续正数序列',
                '/剑指offer/[12] 左旋转字符串',
                '/剑指offer/[13] 数字在排序数组中出现的次数',
                '/剑指offer/[14] 数组中只出现一次的数字',
                '/剑指offer/[15] 翻转单词顺序列',
                '/剑指offer/[16] 二叉树的深度',
                '/剑指offer/[17] 和为S的两个数字',
                '/剑指offer/[18] 顺时针打印矩阵',
                '/剑指offer/[19] 二叉树的下一个结点',
                '/剑指offer/[20] 对称的二叉树',
                '/剑指offer/[21] 把二叉树打印成多行',
                '/剑指offer/[22] 按之字形顺序打印二叉树',
                '/剑指offer/[23] 序列化二叉树',
                '/剑指offer/[24] 二叉搜索树的第k个结点',
                '/剑指offer/[25] 数据流中的中位数',
                '/剑指offer/[26] 重建二叉树',
                '/剑指offer/[27] 滑动窗口的最大值',
                '/剑指offer/[28] 用两个栈实现队列',
                '/剑指offer/[29] 旋转数组的最小数字',
                '/剑指offer/[30] 丑数',
                '/剑指offer/[31] 两个链表的第一个公共结点',
                '/剑指offer/[32] 第一个只出现一次的字符位置',
                '/剑指offer/[33] 数组中的逆序对',
                '/剑指offer/[34] 连续子数组的最大和',
                '/剑指offer/[35] 最小的K个数',
                '/剑指offer/[36] 数组中出现次数超过一半的数字',
                '/剑指offer/[37] 整数中1出现的次数（从1到n整数中1出现的次数）',
                '/剑指offer/[38] 把数组排成最小的数',
                '/剑指offer/[39] 数组中重复的数字',
                '/剑指offer/[40] 构建乘积数组',
                '/剑指offer/[41] 二维数组中的查找',
                '/剑指offer/[42] 扑克牌顺子',
                '/剑指offer/[43] 孩子们的游戏(圆圈中最后剩下的数)',
                '/剑指offer/[44] 正则表达式匹配',
                '/剑指offer/[45] 表示数值的字符串',
                '/剑指offer/[46] 字符流中第一个不重复的字符',
                '/剑指offer/[47] 替换空格',
                '/剑指offer/[48] 矩阵中的路径',
                '/剑指offer/[49] 机器人的运动范围',
                '/剑指offer/[50] 求1+2+3+...+n',
                '/剑指offer/[51] 不用加减乘除做加法',
                '/剑指offer/[52] 二叉搜索树与双向链表',
                '/剑指offer/[53] 复杂链表的复制',
                '/剑指offer/[54] 字符串的排列',
                '/剑指offer/[55] 二进制中1的个数',
                '/剑指offer/[56] 链表中倒数第k个结点',
                '/剑指offer/[57] 合并两个排序的链表',
                '/剑指offer/[58] 反转链表',
                '/剑指offer/[59] 树的子结构',
                '/剑指offer/[60] 数值的整数次方',
                '/剑指offer/[61] 调整数组顺序使奇数位于偶数前面',
                '/剑指offer/[62] 包含min函数的栈',
                '/剑指offer/[63] 二叉树中和为某一值的路径',
                '/剑指offer/[64] 从上往下打印二叉树',
                '/剑指offer/[65] 二叉搜索树的后序遍历序列',
                '/剑指offer/[66] 栈的压入、弹出序列'
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
                '/interview/2019-10',
                '/interview/1-JavaScript基础',
                '/interview/2-HTML和CSS',
                '/interview/3-计算机基础',
                '/interview/4-数据结构和算法',
                '/interview/5-运行环境',
                '/interview/6-框架和类库',
                '/interview/7-前端工程',
                '/interview/8-项目和业务',
                '/interview/9-学习提升',
                '/interview/10-技术之外',
            ]
        }
    }
};