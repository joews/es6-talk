# Live code plan.

Let's see how this goes on the night...

## Before start:
* Have slides open
* Have Github repo open with links to full code samples
* Hide REPL x scroll!
* Adjust font size

## Intro
* Babel REPL - input, output, error, result

## 1 - Template strings and object literals
_5 mins_

* var name, height
* Create template string with name and height
* Log out desc string
* Show expression
* Show multiline (use template strings anywhere you use normal strings)

* makePresenter(name, attribute, value)
* start with ES5 object
* shorthand key/value
* attr/value computed key
* shorthand method (describe)



## 2 - Arrow functions, args, desctucturing
_10 mins_

* arrayMath with power, ES5 multiply function. Have to use var that to get it to work.
* Turn into arrow and remove that.
* Trim down

* Destructure output, include ...rest

* Default arg for factor, defaults to this.factor

* Add count function that takes ...rest
* Call with seperate numbers
* Call with ...rest


## 3 - Generators and block scope

_10 mins_

Turn evaluate off!

    function* fibonacci () {
      var prev = 0, curr = 1;
      while(true) {
        [prev, curr] = [curr, curr + prev];
        yield curr;
      }
    }

seq = fibonacci();
* seq is an iterator; call `next` to get next
* do some manual nexts, discuss while
* add 'max' arg
* Refactor to for... of.
 - mention let
* for... of also works on DOM objects, and specially constructed normally objects

var links = document.querySelectorAll('a');
for(let link of links) {
  log(link.innerHTML);
}

## 4 - Promises and Modules
_5 mins_

* Covered in slides.


## Misc examples if time
Default args for pluralise

    function plural(count, singular, plural=`${singular}s`) {
      return `${count} ${count === 1 ? singular : plural}`
    }

## Recursive map with spread and rest

    function map([head, ...tail], fn) {
      if(!head) return [];
      else return [fn(head), ...map(tail, fn)];
    }