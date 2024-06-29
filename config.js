const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163923120";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_27_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkyLFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwLFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzLFxuICAgICAgICA0OSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODksXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiem5rWFI4RjlhQzdYYU12ck9Vd3FmUXpoV2x2ajB3NTNvNXpORHhMcHdLZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTYzOTIzMTIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MEQxRDkyOTBGQ0Y1RjYxODYxQzJFNDM1RDlGN0JFRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk2NzQ4NTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUjE1NW9oVmRUNFc0WDM1ZW13UFJRQVwiLFxuICBcInBob25lSWRcIjogXCIzMDQwZmJhMy1jNjI3LTRlODItYjUyNS0zZGY3NjRlYWZmZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAyMDMsXG4gICAgICAyNTMsXG4gICAgICAzLFxuICAgICAgMTU3LFxuICAgICAgMTMzLFxuICAgICAgNzMsXG4gICAgICA5MCxcbiAgICAgIDEyOSxcbiAgICAgIDYxLFxuICAgICAgMTg4LFxuICAgICAgNDgsXG4gICAgICA3MyxcbiAgICAgIDIyLFxuICAgICAgMjA5LFxuICAgICAgMjIzLFxuICAgICAgMTk3LFxuICAgICAgMTE1LFxuICAgICAgMTQxLFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAyNDUsXG4gICAgICA2OCxcbiAgICAgIDkyLFxuICAgICAgODgsXG4gICAgICAyMDAsXG4gICAgICA4MyxcbiAgICAgIDE2NyxcbiAgICAgIDIwNCxcbiAgICAgIDE2MyxcbiAgICAgIDIzMyxcbiAgICAgIDMzLFxuICAgICAgMjE4LFxuICAgICAgNzcsXG4gICAgICAyMDksXG4gICAgICAxNTcsXG4gICAgICA3OCxcbiAgICAgIDE4MixcbiAgICAgIDQ4LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkZRQ1YxRUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjM5MjMxMjA6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEYXZtaWNoXCIsXG4gICAgXCJsaWRcIjogXCIyMjg5NjQ4NzQ4MTQ4NzozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZVl4K2dGRU5qUGdMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk56NFlnZ0JLOGRHQjVORTErRzZLQTEzUldBUkttSlRMZlRoREUxUDg3eTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYUNYZVNoWlpnRjRvVFBiTlErV0psaWhJQkpYeTUzeG9WMC9sMHRMekFNandNWVRUL0xyNkxhMmY1U0pNVWJXUlNyaWJ1ZDU3SExMZXpORDZGTjcrQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia3dIRXpaeW9VZlBHU2pJYVZ3QkhCOEx0eUwrRFFKbjJKYVcyMjN2Y0dtQXM5RTgvb256L3ZBQVFPdTJzMnZMS2E3YVlkZ05vVUlxdy81ckt3K2ZXZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MzkyMzEyMDozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Njc0ODQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1NnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLU2cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWeWM1aTB4MTVxekpHcmorajFkemNqbzBPaDV6cHBkaERMSzQwY3hTVEpNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NjE0NDc0OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzMyNjU4MjU1MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
