export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx51d8a3e56a320acb",
    // 公众号appSecret
    appSecret: "2be662124d11967766644afb2b8a6670",
    // 模板消息id
    templateId: "z-zuW70NZ6uPZO90lkY0KxUwaaMzQ7NuZK98ILBfYY4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o4LCs6bI5O5DyKRNhW36peGwIGIs","o4LCs6a3Z90c4CvnGuoBXblw2npM"],
     
    // 信息配置
    ewai: "乖乖",
    // 所在省份
    province: "贵州",
    // 所在城市
    city: "遵义",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "乖乖", "year": "2006", "date": "07-29", "r": 'new'},
      {"name": "宝贝", "year": "2000", "date": "06-18", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-08-12",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
