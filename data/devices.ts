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
		link: "https://www.dell.com/zh-hk/shop/dell-%E7%AD%86%E8%A8%98%E5%9E%8B%E9%9B%BB%E8%85%A6/inspiron-14-%E7%AD%86%E8%A8%98%E5%9E%8B%E9%9B%BB%E8%85%A6/spd/inspiron-14-5410-laptop",
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
	},
];
