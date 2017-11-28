[![npm version](https://badge.fury.io/js/parse-server-genericemail-adapter.svg)](https://badge.fury.io/js/parse-server-genericemail-adapter)
# Parse Server Generic email Adapter


This is a parse-server email adapter that will route all the emails send by the parse-server through general email providers like gmail, yahoo etc. Emails can include reset password, verification emails as well as custom emails sent through cloud code.

Read more here: https://github.com/ParsePlatform/parse-server.

## Compatibility
Tested with Parse Server v2.7.0

## Installation
```sh
$ npm install parse-server-genericemail-adapter  -S
```

## Usage
In the configuration of your parse server you must pass parse-server-genericemail-adapter as email adapter and set your service name (eg: Gmail), the email id and the password. 

This is an example using parse server as express module:


```javascript
var parse=new ParseServer({
   //...
   emailAdapter: {
      module: "parse-server-genericemail-adapter",
      options: {
         service: "Gmail" // Could be anything like yahoo, hotmail, etc, Full list - see below 
         email: "email@.gmail.com",
         password: "Your password"  //Hmm right now no other way
      }
   }
});
```
## Complete list of providers supported by this plugin

- Gmail
- Yahoo
- 126
- 163
- 1und1
- AOL
- DebugMail
- DynectEmail
- FastMail
- GandiMail
- Godaddy
- GodaddyAsia
- GodaddyEurope
- hot.ee
- iCloud
- Hotmail
- mail.ee
- Mail.ru
- Maildev
- Mailgun
- Mailjet
- Mailosaur
- Mandrill
- Naver
- OpenMailBox
- Outlook365
- Postmark
- QQ
- QQex
- SendCloud
- SendGrid
- SendinBlue
- SES
- SES-US-EAST-1
- SES-US-WEST-2
- SES-EU-WEST-1
- Sparkpost
- Tipimail
- Yandex
- Zoho
- qiye.aliyun

## Credits

https://github.com/collinbrewer/parse-server-amazon-ses-adapter

https://github.com/nodemailer/nodemailer

https://github.com/ParsePlatform/parse-server

## License MIT

