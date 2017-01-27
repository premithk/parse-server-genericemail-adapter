# Parse Server Generic email Adapter
Used to send Parse Server password reset and email verification emails with generic accounts like Gmail uses the nodemailer library.

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
         email: "email@.gmailcom",
         password: "Your password"  //Hmm right now no other way
      }
   }
});
```