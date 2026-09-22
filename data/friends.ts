/**
 * 友情链接数据源
 * 用于 /friends/ 页面展示
 */

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "mumu的中转站",
		imgurl: "https://mumuserver.com/favicon.ico",
		desc: "mumu的代码太好用了你知道吗（删掉",
		siteurl: "https://mumuserver.com/",
		tags: ["朋友"],
	},
	{
		id: 2,
		title: "Charlie的主站",
		imgurl: "https://devc.me/favicon.ico",
		desc: "神秘Vibe Coding男，似乎不太聪明",
		siteurl: "https://devc.me/",
		tags: ["朋友"],
	},
	{
		id: 3,
		title: "爱搞发明的大发明家的博客",
		imgurl: "https://blog.lhpgmc.cn/favicon.ico",
		desc: "群友",
		siteurl: "https://blog.lhpgmc.cn/",
		tags: ["群友"],
	},
];

export function getFriendsList(): FriendItem[] {
	return friendsData;
}

export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
