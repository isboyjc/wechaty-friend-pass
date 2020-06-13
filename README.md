# wechaty-friend-pass
[![Wechaty Plugin Contrib](https://img.shields.io/badge/Wechaty%20Plugin-Schedule-brightgreen.svg)](https://github.com/isboyjc/wechaty-friend-pass) [![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)



Wechat friend application passes automatically

微信好友申请自动通过



## 开始

### 简介

你是否想要自己的微信机器人自动通过好友请求，或者设置一些关键字，通过好友申请时备注的关键字来校验是否要自动通过该好友申请，并且通过好友申请时自动回复一段话

如果是的话，那么你可以使用这个插件，虽然是一个很简单的功能但是使用 `plugin` 可以使我们的代码更简洁

到这里它的功能你应该了解了，那么我们来看看它如何使用



### 安装

```txt
npm install wechaty-friend-pass

or

yarn add wechaty-friend-pass
```



### 使用

```js
const WechatyFriendPassPlugin = require("wechaty-friend-pass")

bot.use(WechatyFriendPassPlugin(options))
```

如上所示

使用插件只要按需传入配置对象 `options` 即可

| Options参数属性 | 类型          | 简介                                                         |
| --------------- | ------------- | ------------------------------------------------------------ |
| keyword         | String\|Array | 好友请求时备注自动通过的关键字，只有一个可以使用字符串类型，多个关键字使用数组类型，全部通过不用校验传入字符串 "*" 即可，不传即都不自动通过 |
| blackId         | String\|Array | 用户黑名单ID，该项可填写用户的ID来识别用户，让此用户不被自动通过，也可不填 |
| reply           | String        | 自动通过用户好友申请后自动回复一句话，为空或不填则通过后不回复 |



### 示例

```js
const { Wechaty } = require("wechaty")
const { PuppetPadplus } = require("wechaty-puppet-padplus")
const Qrterminal = require("qrcode-terminal")
// 引入插件 WechatyFriendPassPlugin
const WechatyFriendPassPlugin = require("wechaty-friend-pass")

// 初始化 bot
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    token: PUPPET_PADPLUS_TOKEN,
  }),
  name: ROBOT_NAME,
})

// 插件配置对象
const options = {
  keyword: ["加群", "前端", "后端", "全栈"],
  blackId: ["*******", "*******"],
  reply: "你好，我是机器人小助手圈子 \n 加入技术交流群请回复【加群】\n 联系小主请回复【123】"
}

// 使用插件
bot.use(WechatyFriendPassPlugin(options))

bot
  .on("scan", (qrcode, status) => {
    Qrterminal.generate(qrcode, { small: true })
  })
  .start()

```



### 最后
<img src="https://gitee.com/IsboyJC/PictureBed/raw/master/other/asdakshdajshdas1.jpeg" width="200" height="200" alt="图片名称" align=left />







<p>扫描上方二维码，加圈子微信，进交流群哦，效果如下图，赶快来试试吧</p>

<div style="left">
<img src="https://gitee.com/IsboyJC/PictureBed/raw/master/other/image-20200613231806371.png" width="200" height="390"  alt="图片名称" align=left />
<img src="https://gitee.com/IsboyJC/PictureBed/raw/master/other/image-20200613231757054.png" width="200" height="390"  alt="图片名称" align=right/>
</div>







