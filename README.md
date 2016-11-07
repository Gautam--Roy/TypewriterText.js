# TypewriterText.js

A small and easy to use javascript plugin to add the typewriter effect to your text on your webpages.


## Getting Started

Just add the typewriterText.js file to your html code. Use typewriterText.min.js for the minified version.
```javascript
<script type="text/javascript" src="typewriterText.min.js"></script>
```


### Installing / Initialization


1) Add the script tag to your html page
```javascript
<script type="text/javascript" src="typewriterText.min.js"></script>
```

2) Create a new Typewriter object.
```javascript
var typewriter = new Typewriter();
```      

3) Call the ```.type``` method on you object.
```javascript
typewriter.type({
    messageArray : ['Message 1', 'Message 2', '...']
});
```

4) The plugin looks for a data-typewriter attribute in the dom
```html
<span class = "typewriterClass" data-typewriter></span>
```
or you can provide the class attribute to the options object inside ```.type({})``` function.
```javascript
typewriter.type({
    messageArray : ['Message 1', 'Message 2', '...'],
    className : "typewriterClass"
});
```


### Other Options
```
  .type({
    messageArray : ['Messages'],  // Array of Strings
    className : "typewriterClass",  //Name of the class
    characterDelay : 100,          // Delay (milliseconds) between each character appearance
    eraseDelay  : 70,    // Delay (milliseconds) between each characted deletion
    delayBeforeErase  : 2000,  // Delay (milliseconds) between each sentence typing and removal
    loop  : false,  // Set to true for looping of the messages inside the messages array
  })

```


## Demo

For the demo, visit [here](http://gautamroy.com)


## Authors

* **Gautam Roy** [Github Link](https://github.com/Gautam--Roy).


## License

This project is licensed under the The GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details
