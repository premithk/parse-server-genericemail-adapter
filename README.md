[![npm version](https://badge.fury.io/js/parse-server-genericemail-adapter.svg)](https://badge.fury.io/js/parse-server-generic-email-adapter)
# Parse Server Generic Email Adapter


This is a parse server email adapter that will route all emails sent by parse server through general email providers, like gmail, yahoo etc. Emails can include password resets, verification emails and custom emails sent through cloud code.

Read more here: https://github.com/parse-community/parse-server.

## Compatibility
Tested with Parse Server v2.7.0

## Installation
```sh
$ npm install --save parse-server-generic-email-adapter
```

## Usage
In the configuration of your parse server you must pass **parse-server-generic-email-adapter** as your email adapter. You must also set your service name (eg: Gmail) along with the email id and password. 

This is an example using parse server as an express module:


```javascript
var parse = new ParseServer({
   //...
   emailAdapter: {
      module: "parse-server-generic-email-adapter",
      options: {
         service: "Gmail" // Could be anything like yahoo, hotmail, etc, Full list - see below 
         email: "email@.gmail.com",
         password: "Your password"
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

https://github.com/parse-community/parse-server

## License MIT

