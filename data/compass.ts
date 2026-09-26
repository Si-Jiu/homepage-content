/**
 * 站点罗盘导航数据源
 * 用于 /compass/ 页面展示
 */

export interface CompassEntry {
	label: string;
	href: string;
	note?: string;
	icon?: string;
	image?: string;
}

export interface CompassShelf {
	key: string;
	name: string;
	icon?: string;
	blurb?: string;
	entries: CompassEntry[];
}

export const compassData: CompassShelf[] = [
	{
		key: "tools",
		name: "工具",
		icon: "material-symbols:build-rounded",
		blurb: "好用的工具",
		entries: [
			{
				label: "开放中文转换",
				href: "https://opencc.byvoid.com/",
			},
			{
				label: "BA 标题生成器",
				href: "https://symbolon.pages.dev/",
			},
			{
				label: "光棱坦克工厂",
				href: "https://prism.uyanide.com/",
			},
			{
				label: "Snippet 生成器",
				href: "https://snippet-generator.app/",
			},
			{
				label: "网盘解析",
				href: "https://lz.qaiu.top/",
			},
		],
	},
	{
		key: "resources",
		name: "资源",
		icon: "material-symbols:warehouse-rounded",
		blurb: "也许会用到",
		entries: [
			{
				label: "各种东西的 Logo",
				href: "https://www.logo.wine/",
			},
			{
				label: "无损游戏 OST",
				href: "https://downloads.khinsider.com/",
			},
			{
				label: "风灵月影修改器",
				href: "https://flingtrainer.com/",
			},
			{
				label: "BA L2D",
				href: "https://ba.svdex.moe/",
			},
			{
				label: "B 站收藏集",
				href: "https://cd.griseo.top/",
			},
		],
	},
	{
		key: "image-search",
		name: "搜图",
		icon: "material-symbols:image-search-rounded",
		blurb: "成为 hero 的神器",
		entries: [
			{
				label: "谷歌图片",
				href: "https://www.google.com/imghp",
			},
			{
				label: "TinEye",
				href: "https://tineye.com/",
			},
			{
				label: "搜图 Bot 酱",
				href: "https://soutubot.moe/",
			},
			{
				label: "Anime Trace",
				href: "https://trace.moe/",
			},
			{
				label: "SauceNAO",
				href: "https://saucenao.com/",
			},
			{
				label: "综合搜图",
				href: "https://www.iqdb.org/",
			},
		],
	},
	{
		key: "fun",
		name: "整活",
		icon: "material-symbols:sentiment-very-satisfied-rounded",
		blurb: "都什么玩意",
		entries: [
			{
				label: "名字 Gay 指数计算器",
				href: "https://akanyi.github.io/Gaynum",
			},
			{
				label: "恶臭数字论证器",
				href: "https://lab.magiconch.com/homo",
			},
			{
				label: "心跳不止生成器",
				href: "https://www.haraheri5ro.com/kyukurarin/",
			},
		],
	},
	{
		key: "reading",
		name: "资料",
		icon: "material-symbols:menu-book-rounded",
		blurb: "看到什么加什么",
		entries: [
			{
				label: "一张图看懂开源协议",
				href: "https://www.ruanyifeng.com/blogimg/asset/201105/free_software_licenses.png",
			},
		],
	},
	{
		key: "other",
		name: "其它",
		icon: "material-symbols:category-rounded",
		blurb: "不知道放哪里",
		entries: [
			{
				label: "Steam 游玩时长全景图",
				href: "https://playtime-panorama.superserio.us/",
			},
		],
	},
];
