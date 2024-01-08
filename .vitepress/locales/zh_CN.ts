import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    description: '漫游卡相关杂七杂八',

    themeConfig: {
        nav: nav(),

        lastUpdatedText: "最后更新",
        darkModeSwitchLabel: '深色模式',
        returnToTopLabel: '回到顶部',
        outline: {
            label: '目录'
        },

        editLink: {
            pattern: 'https://github.com/liuran001/Roaming-SIM/edit/main/:path',
            text: '在 GitHub 中编辑本页'
        }
    }
})

function nav() {
    return [
        { text: 'eSIM 配置文件大小统计', link: '/esim-size.html' },
    ]
}
