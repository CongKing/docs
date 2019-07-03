module.exports = {
    title: '想做一条鱼',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base: '/',
    themeConfig: {
        lastUpdated: '上次更新',
        repo: 'CongKing/docs',
        nav: [
            { text: '主页', link: '/' },
            { text: '关于', link: '/about/' },
            { text: '语言', items: [
                    {text: '中文', link: '/language/chinese'},
                    {text: 'English', link: '/language/english'}]
            }
        ],
        sidebar: [
            ['/', 'Explicit link text']
        ]
    }
}