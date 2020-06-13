/*
 * @Author: isboyjc
 * @Date: 2020-06-13 22:38:02
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-06-13 22:50:21
 * @Description: file content
 */

// Wechaty核心包
const { Wechaty } = require("wechaty")
// padplus协议包
const { PuppetPadplus } = require("wechaty-puppet-padplus")
// qr码
const Qrterminal = require("qrcode-terminal")
// 插件 WechatyFriendPassPlugin
const WechatyFriendPassPlugin = require("../index")

// 初始化 bot
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    // 机器人padplus协议token
    token: PUPPET_PADPLUS_TOKEN,
  }),
  // 机器人名字
  name: ROBOT_NAME,
})

const options = {
  keyword: [
    "加群",
    "前端",
    "后端",
    "全栈",
    "公众号",
    "cesium",
    "github",
    "wechaty",
  ],
  reply: `你好，我是机器人小助手圈子 \n\n 加入技术交流群请回复【加群】\n 联系小主请回复【123】`,
  blackId: [],
}

// 使用插件
bot.use(WechatyFriendPassPlugin(options))

bot
  .on("scan", (qrcode, status) => {
    Qrterminal.generate(qrcode, { small: true })
  })
  .start()
