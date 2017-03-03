[![npm version](https://badge.fury.io/js/parse-server-genericemail-adapter.svg)](https://badge.fury.io/js/parse-server-genericemail-adapter)
# Parse Server Generic email Adapter

[![Join the chat at https://gitter.im/parse-server-genericemail-adapter/Lobby](https://badges.gitter.im/parse-server-genericemail-adapter/Lobby.svg)](https://gitter.im/parse-server-genericemail-adapter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Used to send Parse Server password reset and email verification emails with generic accounts like Gmail. This module uses the nodemailer library.

Read more here: https://github.com/ParsePlatform/parse-server.

## Compatibility
Tested with Parse Server v2.2.13

## Install
```sh
$ npm install parse-server-genericemail-adapter  -S
```

## Usage
Replace the config with your info.  


```javascript
var parse=new ParseServer({
   //...
   emailAdapter: {
      module: "parse-server-genericemail-adapter",
      options: {
         service: "Gmail" // Could be anything like yahoo, hotmail, etc, Full list - https://github.com/nodemailer/nodemailer-wellknown 
         email: "email@.gmail.com",
         password: "Your password"  //Hmm right now no other way
      }
   }
});
```
## Credits
https://github.com/collinbrewer/parse-server-amazon-ses-adapter
https://github.com/nodemailer/nodemailer
https://github.com/ParsePlatform/parse-server
