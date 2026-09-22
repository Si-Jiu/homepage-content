/**
 * 游戏展示页数据源
 * 行为与分类规则由 config/games.yaml 控制
 */

export type GameStatus = "playing" | "completed" | "backlog" | "wishlist";

export interface GameItem {
	enable?: boolean;
	id: string;
	name: string;
	developer: string;
	category: string;
	status: GameStatus;
	/** 横屏封面（建议 16:9 或更宽）：
	 *  - 省略时回退渲染 icon 图标卡片；
	 *  - 支持内容仓 assets/ 相对路径（参与构建期压缩转码）、
	 *    /public 绝对路径与远程 URL 三种写法。 */
	cover?: string;
	icon?: string;
	rating?: number;
	hours?: number;
	platform?: string;
	year?: string;
	tags?: string[];
	description: string;
	link?: string;
	featured?: boolean;
}

export const gamesData: GameItem[] = [
	{
		id: "minecraft",
		name: "Minecraft",
		developer: "Mojang Studios",
		category: "sandbox",
		status: "playing",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 800,
		platform: "PC",
		year: "2011",
		tags: ["沙盒", "生存", "建造"],
		description:
			"方块世界沙盒游戏。挖掘、合成、建造，在程序生成的世界里生存闯荡——独自一人，或与朋友一起。",
		link: "https://www.minecraft.net/",
	},
];
