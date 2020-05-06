To learn the basics of JavaScript Classes and the key native-JavaScript concept of prototying, let's build a modern example: CoronaVirus Class!

##Why care about creating Native JavaScript classes? 
Technical interviews. 

No seriously, you'll be quickly skipped over if you dont know how to create these on the fly *sans Frameworks!* like React or Angular.

##Read the Documentation about JS Classes
Read [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [SitePoint Classes article](https://www.sitepoint.com/javascript-private-class-fields/) for everything  related to writing classes, or [W3CShools doc on JavaScript Classes](https://www.w3schools.com/js/js_classes.asp) for more.

Disclaimer: You MAY notice a touch of opinionated text in the base CoronaVirus Class. It's just a means of venting, but I want others to add their  own flair/venting. If you want to directly contribute to this CoronaVirus Class and its docs, just open an issue and let's get it PR'd.

Use this open source project to explore the native JavaScript functionalites that include Classes, inheritance, prototyping, hoisting, etc! This class is for all of us!


##About JavaScript Classes

As per the MDN JavaScript Classes documentation, Classes are just syntax sugar to declare a function. They are JavaScripts approach to Object Oriented Programming (OOP), and they create an `object template`. The components for a class are its declaration, **Constructor** keyword,  **Super** keyword, class properties, class methods (both public and private), and special class methods called **Getters** and **Setters**. And then there are **Sub classes** or **Child classes**, in which you will extend the *parent* class to use it with a subclass. 

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

###Constructors
The `constructor` keyword initializes the object and sets the included inital properties. 

For CoronaVirus Class, the properties are `this.people`, `this.virus`, and `this.ppeNumber`.

The **methods** that can be accessesd in this class are these:

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
The current CoronaVirus class is pretty simple and doesnt have some other core JS class functionality, including the following:
- `Inheritance` through Subclasses! e.g. 
  ```javascript
  class Covid19 extends CoronaVirus {}
  ```
- Private methods
- Static methods
- Field declarations (public nd private)
- `Super()` (refers to the parent class)
- And more.

I hope this guide helps you understand and manipulate JavaScript classes your self. 

These are CRUCIAL to understand as native JavaScript functionality. They're often skimmed over by junior engineers, until they're asked about during TECHNICAL INTERVIEWS! So learn them now, and never be stumpedagain by this classic and cruicial interview question.  