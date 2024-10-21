/*******************************

脚本功能：语音转换文字——解锁VIP
下载地址：https://is.gd/WKGQSu
软件版本：1.1.1
脚本作者：巨魔插件
更新时间：2024-10—8
交流频道：https://t.me/jmcj2
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^http[s]?:\/\/yw.jiaofei8.cn\/api\/user\/my url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/1jiaofei8.js

[mitm] 

hostname = yw.jiaofei8.cn

*******************************/

var body = $response.body.replace(/finish_time":".*?"/g,'finish_time":"9999-01-01 08:00:00到期"')
.replace(/free_num":\d+/g,'free_num":8888888888')
.replace(/score":\d/g,'score":1')
.replace(/type":\d/g,'type":2')
.replace(/mobile":".*?"/g,'mobile":"巨魔插件"')
.replace(/nickname":".*?"/g,'nickname":"巨魔插件"')
$done({ body });
