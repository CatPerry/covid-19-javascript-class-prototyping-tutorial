![Header image of gears turning](colorful-toothed-wheels-171198-copy.jpg)

To learn the basics of JavaScript Classes and the key native-JavaScript concepts of prototypes and inheritance, and let's build a modern example: CoronaVirus Class!

See the [CoronaVirus Class on Github](http://github.com/catperry); and follow me on [Twitter](https://twitter.com/catperry_). Read this article on [Dev.to](https://dev.to/catperry/javascript-classes-prototyping-using-a-coronavirus-class-33c6).

##Why learn how to write native JavaScript classes? 
**Technical interviews.**

No, seriously. **Learning how to write native JavaScript classes and deepening your understanding of prototypes may save you some sweating during technical interviews**. This is a common interview question, especially for those without a CS degree, i.e., bootcamp grads, and if you don't know how to build them *sans Frameworks* like React or Angular, you'll be quickly skipped over. Plus, classes are the basis for all the components you'll whip up in JS frameworks. So knowing what's happening under the hood will make you a better engineer.

##Read the Documentation about JS Classes
Read [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), this [SitePoint Classes article](https://www.sitepoint.com/javascript-private-class-fields/), or [W3Schools doc on JavaScript Classes](https://www.w3schools.com/js/js_classes.asp) for everything related to writing classes.

Disclaimer: You MAY notice a touch of opinionated text in the base CoronaVirus Class. It's just a means of venting, but I want others to add their  own flair/venting. If you want to directly contribute to this CoronaVirus Class and its docs, just open an issue and let's get it PR'd.

Use this open source project to explore the native JavaScript functionalities that include Classes, inheritance, prototyping, hoisting, etc! This class is for all of us!


##About JavaScript Classes

As per the MDN JavaScript Classes documentation, Classes are just syntax sugar to declare a function. They are JavaScript's approach to Object Oriented Programming (OOP), and they create an `object template`. The components for a class are its declaration, **Constructor** keyword,  **Super** keyword, class properties, class methods (both public and private), and special class methods called **Getters** and **Setters**. 

####How Prototypes Factor In
These methods and properties are all then available via the class-object's `prototype`, and behind the scenes, you'll reference these via dot notation (e.g., `coronaDay42.newMethodName`). But instead of `coronaDay42.newMethodName`, JavaScript is actually writing `coronaDay42.prototype.newMethodName`. Another very common example of a prototype is [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). So when you call `myArray.map()`, what's really being called behind the scenes by JS is `Array.prototype.map()`. The same can be said for other very common JS methods like `.split(), .splice(), .reverse()` etc. Read more about [Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

####Subclasses and Extends
 And then there are **Sub classes** or **Child classes**, in which you will extend the *parent* class to use it with a subclass. **A subclass inherits the prototypes of the parent class.**

##How to Declare a Class
###Class Declarations (example from MDN docs)
```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```
###Class Expression(ex. from MDN docs)
```javascript
let Rectangle = class { 
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};// this class can be named or unnamed (e.g. this can also be `let Rectangle = class RectangleFactory {}`)
```
For the CoronaVirus Class exercise we use a class *declaration*. 

##Parts of a Class
###Constructor
The `constructor` keyword initializes the object and sets the included initial properties. 

For CoronaVirus Class, the properties are `this.people`, `this.virus`, and `this.ppeNumber`.

The **methods** that can be accessed in this class are these:

###Getters
```javascript
get theVirus()
get deliverableSafetyItems()
get ppeNow()
get teamwork()
get fullStory()
```

These methods can be accessed on any instance of the CoronaVirus Class, as in `console.log(coronaDay42.fullStory);` 

###Setters
```javascript
set teamwork(isThereTeamwork)
set safetyItems(item)
```

Setters are used to define a value; thus they require a parameter/value to set. Then it can be modified like the last line of code below does. `coronaDay42.teamwork = randomYesOrNo;`
```javascript
let randomYesOrNo = Math.floor(Math.random() * 2);
const coronaDay42 = new CoronaVirus(randomPeopleNumber, 1000, randomPpeNumber);
coronaDay42.teamwork = randomYesOrNo;
```

###Methods
The class methods/functions `multiplies()` and `randomCountry()` can be used very similarly to the class `getters` except that when they are invoked, you must use the trailing parens `()`. So, `coronaDay42.ppeNow` is a getter and `this.multiplies()` is the function. For the subtle differences in behavior and performance between the two, check out this really helpful [Quora response on "difference between using a getter method or a regular function in JavaScript"](https://www.quora.com/What-is-the-difference-between-using-a-getter-method-or-a-regular-function-in-JavaScript).

##Creating Class Instances (and Invoking them)
At the bottom of the CoronaVirus Class, you'll see the following: 
```javascript
let randomPeopleNumber = Math.floor(Math.random() * 58494);
let randomPpeNumber = Math.floor(Math.random() * 58492084);
let randomYesOrNo = Math.floor(Math.random() * 2);
const coronaDay42 = new CoronaVirus(randomPeopleNumber, 1000, randomPpeNumber);
coronaDay42.teamwork = randomYesOrNo;

console.log(coronaDay42.fullStory);
```

This `const coronaDay42 = new CoronaVirus(randomPeopleNumber, 1000, randomPpeNumber);` is how the Class instance is created, setting a variable to a `new CoronaVirus()`. Then we pass in the `class properties` of: 
```javascript
this.people = people;
this.virus = virus;
this.ppeNumber = ppeNumber;
``` 

From there, you can access the getters/setters/methods of the Class and build from there!

That's it for this class, but wait there's more! 

##Other JavaScript Class functions and syntax
The current CoronaVirus class is pretty simple and doesn't have some other core JS class functionality, including the following:
- `Inheritance` through Subclasses! e.g. 
  ```javascript
  class Covid19 extends CoronaVirus {}
  ```
- Private methods
- Static methods
- Field declarations (public and private)
- `Super()` (refers to the parent class)
- And more.

I hope this guide helps you understand and manipulate JavaScript classes a bit more. 

These are crucial parts of core JavaScript functionality to understand. They're often skimmed over by junior engineers, until they're asked about them during technical interviews. So learn them now, and never be stumped again by this classic and fundamental JavaScript knowledge again.  

Have you ever been asked to build a class during a JavaScript interview? If so, how hard was it? Or what was the craziest "Build a JS class" interview question you were ever asked? Leave a note in the comments.