# popup

Popup is an Angular directive for creating custom input popup UIs.

**Requirements**

* [AngularJS (1.2+)](http://angularjs.org/)
* [JQuery (1.11+)](http://jquery.com/)
* [bklik/popup](https://github.com/bklik/popup/)

### Installation

Link to password-generator's CSS and Javascript files.
```html
<link rel="stylesheet" href="password-generator/css/password-generator.css"/>
<script src="password-generator/js/directives.js"></script>
```

In your app's directives.js file, add the passwordGenerator.directives module.
```javascript
angular.module('myApp.directives', ['popup.directives', 'passwordGenerator.directives']);
```

Last, simply add a _password_ attribute to an `<input>`.
```html
<input type="text" popup password/>
```

### Example
http://www.brentonklik.com/popup
