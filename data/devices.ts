/**
 * 个人设备展示页数据源
 * 行为与分类规则由 config/devices.yaml 控制
 */

export type DeviceStatus = "active" | "backup" | "archived" | "wishlist";

export interface DeviceSpecItem {
	key: string;
	label: string;
	value: string;
}

export interface DeviceItem {
	enable?: boolean;
	id: string;
	name: string;
	brand: string;
	category: string;
	status: DeviceStatus;
	specs: string;
	specDetails?: DeviceSpecItem[];
	description: string;
	image?: string;
	icon?: string;
	link?: string;
	featured?: boolean;
	year?: string;
}

export const devicesData: DeviceItem[] = [
	{
		id: "dell-inspiron-14-5410",
		name: "Dell Inspiron 14 5410",
		brand: "Dell",
		category: "desk",
		status: "active",
		specs: "i5-11300H / 512GB / 16G DDR4 3200MHz / MX 450 2GB",
		description: "I use arch btw",
		icon: "material-symbols:laptop-mac-rounded",
		featured: true,
		year: "2021",
		link: "https://www.dell.com/support/manuals/zh-hk/inspiron-14-5410-laptop/inspiron-5410-setup-and-specifications/inspiron-14-5410-%E7%9A%84%E8%A6%8F%E6%A0%BC?guid=guid-7c9f07ce-626e-44ca-be3a-a1fb036413f9&lang=zh-cn",
	},
	{
		id: "redmi-turbo-5-max",
		name: "REDMI Turbo 5 Max",
		brand: "Xiaomi",
		category: "mobile",
		status: "active",
		specs: "暗影黑 / 16GB+512GB",
		description: "已解bl+ksu root",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2026",
		link: "https://www.mi.com/prod/redmi-turbo-5-max/specs",
	},
	{
		id: "ipad-9",
		name: "iPad 9",
		brand: "Apple",
		category: "mobile",
		status: "active",
		specs: "深空灰色 / 256GB",
		description: "上学用",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2021",
		link: "https://support.apple.com/zh-cn/111898",
	},
	{
		id: "iphone-7-plus",
		name: "iPhone 7 Plus",
		brand: "Apple",
		category: "mobile",
		status: "archived",
		specs: "亮黑色 / 128GB",
		description: "花屏了",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2016",
		link: "https://support.apple.com/zh-cn/111953",
	},
];
