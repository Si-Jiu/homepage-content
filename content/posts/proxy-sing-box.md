---
title: sing-box vless 协议配置
published: 2026-05-02
description: '晶哥别搞我'
image: ''
tags: [Proxy]
category: 'IT'
draft: false 
lang: 'zh_CN'
---

## 晶哥别搞

:::caution
本教材仅做教学和实验，请勿在使用时违反当地的法律法规！
:::

## AI 生成内容

本文配置由 `Gemini 3 Pro` 生成，文章中的配置都已经过验证，均可使用

## 部署 sing-box

参阅 sing-box 官方文档  
[包管理器](https://sing-box.sagernet.org/zh/installation/package-manager/)  
[Docker](https://sing-box.sagernet.org/zh/installation/docker/)

## 服务端配置文件

```json
{
  "log": {
    "level": "warn",
    "timestamp": true
  },
  "inbounds": [
    {
      "type": "vless",
      "tag": "vless-in",
      "listen": "0.0.0.0",
      "listen_port": <端口号>,
      "users": [
        {
          "uuid": "<使用 https://www.uuidgenerator.net/ 生成一个 UUID>", 
          "flow": ""
        }
      ],
      "transport": {
        "type": "ws",
        "path": "/",
        "max_early_data": 0,
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    }
  ],
  "outbounds": [
    {
      "type": "direct",
      "tag": "direct"
    }
  ]
}
```

记得填写端口号和 UUID

## 客户端

```yaml
{
  "log": {
    "level": "info",
    "timestamp": true
  },
  "dns": {
    "servers": [
      {
        "type": "tcp",
        "tag": "dns-remote",
        "detour": "proxy",
        "server": "1.1.1.1"
      },
      {
        "type": "udp",
        "tag": "dns-local",
        "server": "8.8.8.8"
      }
    ],
    "rules": [
      {
        "domain": "<服务端地址>",
        "server": "dns-local"
      }
    ],
    "final": "dns-remote",
    "independent_cache": true
  },
  "inbounds": [
    {
      "type": "tun",
      "tag": "tun-in",
      "address": [
        "172.19.0.1/30",
        "fdfe:dcba:9876::1/126"
      ],
      "auto_route": true,
      "strict_route": true,
      "stack": "mixed"
    }
  ],
  "outbounds": [
    {
      "type": "vless",
      "tag": "proxy",
      "server": "<服务端地址>",
      "server_port": 443,
      "uuid": "<和服务端配置中的 UUID 一致>",
      "tls": {
        "enabled": true,
        "server_name": "<服务端地址>",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      },
      "transport": {
        "type": "ws",
        "path": "/",
        "headers": {
          "Host": "<服务端地址>"
        },
        "early_data_header_name": "Sec-WebSocket-Protocol"
      }
    },
    {
      "type": "direct",
      "tag": "direct"
    }
  ],
  "route": {
    "rules": [
      {
        "inbound": "tun-in",
        "action": "sniff"
      },
      {
        "protocol": "dns",
        "action": "hijack-dns"
      },
      {
        "domain": "<服务端地址>",
        "outbound": "direct"
      }
    ],
    "final": "proxy",
    "auto_detect_interface": true,
    "default_domain_resolver": "dns-local"
  }
}
```

记得替换 UUID 和 服务器地址
