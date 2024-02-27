# Notes

## Things to do
* Figure outhow to set up click
* Find a map to use



HTML Language Tips
-

Input types 

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |


| Type	| Meaning |
| ------|------|
| text	| Single line textual value |
| password	| Obscured password |
| email	| Email address |
| tel	| Telephone number |
| url	| URL address |
| number	| Numerical value |
| checkbox |	Inclusive selection |
| radio	| Exclusive selection |
| range	| Range limited number |
| date	| Year, month, day |
| datetime-local	| Date and time |
| month	| Year, month |
| week	| Week of year |
| color	| Color |
| file	| Local file |
| submit	| button to trigger form submission |




#### HTML Tags

|   tag   |  usage  |
| ------- | ------- |
| \<!--...--> | This is a comment which is not displayed in the browser |
| \<!DOCTYPE html> | This is the beginning of ALL html documents!! **Important!!** |
| \<a> | hyperlinks |
| \<address> | Author's contact information |
| \<area> | Creates an image map with clickable areas |
| \<audio> | Connect audio using mp3 files |
| \<b> | bold text within a paragraph (\<p>) |
| \<body> | the body paragraph that comes after the head |
| \<br> | it's empty, so there's no follow. Break line |
| \<button> | This makes a clickable button!! |
| \<cite> | encloses something you want to look cited |
| \<data> | associates products with a number |
| \<div> | a section that's styled with css |
| \<em> | encloses something you want emphasized |
| \<embed> | an embedded image, video or html page |
| \<footer> | creates footer, use \<p> for inner paragraphs |
| \<form> | create a form for users to fill out |
| \<h1>-\<h6> | the different html headers |
| \<head> | container for metadata, goes between html tag and body tag |
| \<header> | intro content or important links |
| \<hr/> | adds a line underneath th content |
| \<html lang = "en"> | I don't know what this does but it goes after DOCTYPE |
| \<i> | italicize |
| \<image> | insert image |
| \<input> | space for gathering user input |
| \<li> | list |
| \<main> | the main content of the doc |
| \<map> | an image map with clickable links! (look at area) |
| \<mark> | highlight text |
| \<nav> | set of navigation links |
| \<object> | container for external resource (all info inside >) |
| \<option> | an option in a select list |
| \<output> | shows the result of a calculation |
| \<p> | denotes a paragraph |
| \<param> | parameters for the object element |
| \<q> | denote a short quotation |
| \<s> | line through text that isn't true anymore |
| \<section> | section in a document |
| \<select> | goes with option |
| \<sub> | surrounds subscript |
| \<sup> | surrounds superscript |
| \<svg> | insert svg graphics |
| \<table> | insert a table |
| \<td> | standard data cell in a table |
| \<th> | table header |
| \<time> | define a specific time/date |
| \<title> | title your html document inside head |
| \<tr> | table row |
| \<ul> | unordered list |
| \<video> | embed a video into the page |






EXAMPLES

```
<a href="url">link text\</a>
```
 -- this is the format for a hyperlink
```
  <p><img src="hyperlink" alt="alternate name"></p>
```
 -- this is the format for putting in images
```
<address>
Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```
```
<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>
```
```
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```
```
<button type="button">Click Me!</button>
```
```
<ul>
  <li><data value="21053">Cherry Tomato</data></li>
  <li><data value="21054">Beef Tomato</data></li>
  <li><data value="21055">Snack Tomato</data></li>
</ul>
```
```
<embed type="image/jpg" src="pic_trulli.jpg" width="300" height="200">
<embed type="text/html" src="snippet.html" width="500" height="200">
<embed type="video/webm" src="video.mp4" width="400" height="300">
```
```
<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
```
```
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```
```
<link rel="stylesheet" href="styles.css">
```
```
* input table -- <table>
        <tr>
          <th>Table</th> the th does bold (maybe means table header?)
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td> the td is just regular
          <td>table</td>
          <td>table</td>
        </tr>
        <tr>
```
```
<p>Open from <time>10:00</time> to <time>21:00</time> every weekday.</p>

<p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>
```
```
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

```
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```


CSS Notes
-
* Animation
* * Use the animation properties and create keyframes
```
animation-name: demo;
animation-duration: 3s; (however many seconds)
```
  * Example of zooming text
```
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```


* Commonly used units in CSS

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

* *You can also describe color in lots of ways, including using hex, the keyword, RGB function or HSL(hue, sat, light)


The @import rule allows you to import a style sheet into another style sheet. The @import rule must be at the top of the document (but after any @charset declaration). The @import rule also supports media queries, so you can allow the import to be media-dependent.



#### Getting Started in CSS
```
selector {
property1: value1;
property2: value2;
}
```
So for example you could say "h1" in place of "selector" and then "color:blue" in place of "property1: value1;"


| property | description |
|----------|-------------|
|align-content	| Aligns items in a flex container along flex lines. |
|align-items	| Aligns evenly spaced items in a flex container. |
|align-self	| Aligns an item inside a flex container. |
|all |	Resets all element properties to its default or inherited values. |
|animation	| Creates an animating element. |
|animation-delay	| Sets a delay before an animation begins. |
|animation-direction	| Sets how, in which direction, an animation is played. |
|animation-duration	| Defines the duration of an animation cycle. |
|animation-fill-mode	| Defines how styles are applied before and after animation. |
|animation-iteration-count	| Sets the number of times an animation is played. |
|animation-name	| Defines a name for the animation. |
|animation-play-state	| Sets the animation play state to running or paused. |
|animation-timing-function	| Specifies the animation speed curve. |
|backface-visibility	| Shows or hides the backface visibility of an element. |
|background |	Sets the background of an element. |
|background-attachment |	Defines how the background is attached to an element.
|background-blend-mode	| Defines the background layer blending mode.
|background-clip	| Defines how background extends beyond the element.
|background-color	| Sets the background color of the element.
|background-image | Specifies a background image for an element.
|background-origin	| Specifies the background image origin position.
|background-position	| Sets the position of a background image.
|background-repeat	| Specifies how the background image is repeated.
|background-size	| Sets the size of the background image.
|border	| Specifies a border for an element
|border-bottom	| Specifies a bottom border for an element.
|border-bottom-color	| Sets the color of a bottom border .
|border-bottom-left-radius	| Sets the border radius of the bottom left corner.
|border-bottom-right-radius	| Sets the border radius of the bottom right corner
|border-bottom-style	| Sets the style of the bottom border.
|border-bottom-width	| Sets the width of the bottom border
|border-collapse	| Sets table borders to single collapsed line or separated.
|border-color	| Sets the color of the border.
|border-image	| Defines an image as border, instead of a color.
|border-image-outset	| Sets how far a border image extends beyond the border.
|border-image-repeat	| Defines if and how the border image is repeated.
|border-image-slice	| Defines how the border image will be sliced.
|border-image-source	| Specifies the url of the border image file.
|border-image-width	| Sets the width of the image border.
|border-left	| Sets the left border of the element.
|border-left-color |	Sets the color of the left border.
|border-left-style |	Sets the style of the left border.
|border-left-width |	Sets the width of the left border.
|border-radius |	Sets the radius of the border.
|border-right |	Sets the right border of the element.
|border-right-color |	Sets the color of the right border.
|border-right-style |	Sets the style of the right border.
|border-right-width |	Sets the width of the right border.
|border-spacing |	Sets the adjacent table cell distance.
|border-style |	Defines the style of the border
|border-top |	Sets the top border of the element.
|border-top-color	| Sets the color of the top border.
|border-top-left-radius |	Sets the border radius of the top left corner.
|border-top-right-radius |	Sets the border radius of the top right corner.
|border-top-style |	Sets the style of the top border.
|border-top-width |	Sets the width of the top border.
|border-width |	Sets the border width of the element.
|bottom |	Positions the element from the bottom of the relative container.
|box-shadow |	Adds a shadow effect to an element.
|box-sizing |	Sets how element height and width are calculated.
|caption-side |	Defines on which side of the table a caption is placed.
|caret-color	| Sets the color of the blinking mouse caret.
|@charset	| Specifies the character encoding of the stylesheet.
|clear	| Sets the element side that does not allow floating elements.
|clip	| Sets how an image is cropped or clipped inside a container.
|clip-path	| Clips an element inside a specific shape or SVG.
|color	| Specifies the color of text in an element.
|column-count	| Divides an element into the specified number of columns.
|column-fill	| Specifies how divided columns are filled.
|column-gap	| Specifies the space between divided columns.
|column-rule	| Sets the style, width, and color of a column divider.
|column-rule-color	| Sets the color of a column divider.
|column-rule-style	| Sets the style of a column divider.
|column-rule-width	| Sets the width of a column divider.
|column-span	| Sets number of divided columns an element should span.
|column-width	| Specifies the width of a divided column.
|columns	| Divide an element into columns of a certain width.
|content	| Used to insert content before or after an element.
|counter-increment	| Increase or decrease a CSS counter.
|counter-reset	| Initialize or reset CSS counter.
|cursor	| Specifies the shape of the mouse cursor.
|direction	| Specifies the text writing direction of a block-level element.
|display	| Specify an element's display behavior.
|empty-cells	| Specifies whether empty table cell borders will be displayed.
|filter	| Adds an image enhancing effect to an image.
|flex	| Specifies the width of the flexible items.
|flex-basis	| Specifies the initial width of a flex item.
|flex-direction	| Specifies the direction for the flex item to align.
|flex-flow	| Controls the direction and wrapping of flexible items.
|flex-grow	| Specifies how a flex item can grow inside the container.
|flex-shrink	| Specifies how a flex item can shrink inside the container.
|flex-wrap	| Specifies how flexible items wrap inside the container.
|float	| Sets how an element is positioned relative to other elements.
|font	| Sets font family, variant, weight, height, and size for an element.
|@font-face	| Embeds a custom font inside a web page
|font-family	| Sets the font family for an element.
|font-kerning	| Sets the spacing between the font's characters.
|font-size	| Sets the size of the font for an element.
|font-size-adjust	| Specifies a fall-back font size.
|font-stretch	| Sets the text characters to a wider or narrower variant.
|font-style	| Set the font style to normal, italic, or oblique.
|font-variant	| Specifies that text is displayed in a small-caps font.
|font-weight	| Sets the weight or thickness of the font.
|grid	| Defines a grid layout with responsive rows and columns.
|grid-area	| Sets the size and location of grid items in a grid container.
|grid-auto-columns	| Specifies the size of the columns in a grid container.
|grid-auto-flow	| Specifies the initial placement of items in a grid container.
|grid-auto-rows	| Specifies the initial size of the items in a grid container.
|grid-column	| Specifies the size and location of a grid item in a grid container.
|grid-column-end	| Specifies in which column-line the grid item will end.
|grid-column-gap	| Specifies the gap size between columns in a grid container.
|grid-column-start	| Specifies in which column line the grid item will start.
|grid-gap	| Specifies the gap size between grid rows and columns.
|grid-row	| Specifies the grid item size and location in a grid container.
|grid-row-end	| Specifies in which row-line the grid item will end.
|grid-row-gap	| Specifies the gap size between rows in a grid container.
|grid-row-start	| Specifies in which row line the grid item will start
|grid-template	| Divides a page into sections with a size, position, and layer.
|grid-template-areas	| Specifies area in a grid container.
|grid-template-columns	| Sets the number and width of columns in a grid container.
|grid-template-rows |	Sets the number and height of rows in a grid container.
|height	| Sets the height of an element.
|hyphens	| Specifies hyphenation with wrap opportunities in a line of text.
|@import |	Imports a style sheet inside another style sheet.
|justify-content	| Defines the alignment of items in a flex container.
|@keyframes	| Defines the CSS style to animate.
|left	| Positions the element from the left of the relative container.
|letter-spacing	| Sets the spacing between characters.
|line-height	| Sets the vertical spacing between lines of text.
|list-style	| Defines the markers (bullet points) for items in a list.
|list-style-image	| Defines an image markers (bullet points) for items in a list.
|list-style-position	| Sets the marker (bullet point) positions for items in a list
|list-style-type |	Defines the marker types (bullet points) for items in a list
|margin	| Sets the margin (outside spacing) for an element.
|margin-bottom |	Sets the bottom margin (outside spacing) for an element.
|margin-left	| Sets the left margin (outside spacing) for an element.
|margin-right |	Sets the right margin (outside spacing) for an element.
|margin-top	| Sets the top margin (outside spacing) for an element.
|max-height |	Sets the maximumn height for an element.
|max-width |	Sets the maximum width for an element.
|@media	| Applies media queries to a page.
|min-height	| Sets the minimum height for an element.
|min-width	| Sets the minimum width for an element.
|object-fit	| Specifies how an image or video fits inside a container.
|object-position	| Specifies the image or video position inside a container.
|opacity	| Sets the opacity (transparency) of the element.
|order	| Specifies the order of an item in a flex container.
|outline	| Adds an outline (highlighted border) to an element.
|outline-color	| Sets the color of an outline.
|outline-offset	| Sets the space between the outline and border.
|outline-style	| Sets the style of an outline.
|outline-width	| Sets the width of an outline.
|overflow	| Specifies the flow of content that exceeds the container.
|overflow-x	| Specifies the flow of content that exceeds the container width.
|overflow-y	| Specifies the flow of content that exceeds the container height.
|padding |	Sets the spacing between content and element border.
|padding-bottom	| Sets the spacing between content and bottom element border.
|padding-left	| Sets the spacing between content and left element border.
|padding-right	| Sets the spacing between content and right element border.
|padding-top	| Sets the spacing between content and top element border.
|page-break-after	| Adds a print page-break after an element.
|page-break-before	| Adds a print page-break before an element.
|page-break-inside	| Specifies if print page-break is allowed inside an element.
|perspective	| Adds perspective to a 3D-positioned element.
|perspective-origin |	Sets the origin of the perspective for a 3D-positioned element.
|pointer-events	| Specifies whether element reacts to pointer events or not.
|position	| Sets the element's positioning method.
|quotes	| Defines the quotation marks to be used on text.
|right	| Positions the element from the right of the relative container.
|scroll-behavior |	Specifies the scrolling behavior of an element
|table-layout	| Aligns elements according to a table with rows and columns.
|text-align	| Sets the alignment of text inside an element.
|text-align-last	| Sets the alignment for the last line of text.
|text-decoration	| Defines the style and color of underlined text.
|text-decoration-color	| Defines the color of underlined text.
|text-decoration-line	| Defines the kind of line to use with text.
|text-decoration-style	| Defines the style of underlined text.
|text-indent	| Sets the indentation to the beginning of text.
|text-justify	| Defines the text justification inside a container.
|text-overflow	| Sets the display behavior of text that overflows a container.
|text-shadow	| Adds a shadow effect to text.
|text-transform |	Defines text capitalization or casing.
|top	| Positions the element from the top of the relative container
|transform	| Applies a 2D or 3D transformation to an element.
|transform-origin	| Sets the origin for the transformation of the element.
|transform-style	| Specifies the display behavior of 3D space nested elements.
|transition	| Creates transitions from one property value to another.
|transition-delay	| Creates a delay before the transition effect starts.
|transition-duration |	Specifies the time the transition will take.
|transition-property	| Specifies the CSS property that will transition.
|transition-timing-function |	Defines the speed curve function of the transition.
|user-select |	Specifies how text can be selected (highlighted)
|vertical-align	| Specifies vertical alignment of an element.
|visibility	| Specifies the visibility of an element.
|white-space	| Specifies how white-space is handled inside an element.
|width	| Sets the width of an element.
|word-break	| Specifies how line breaks take place.
|word-spacing	| Sets the spacing between words.
|word-wrap	| Specifies how long words can be wrapped.
|writing-mode |	Sets the text reading orientation: top to bottom, etc.
|z-index	| Sets the vertical stacking order relative to other elements.


```
font-family: "Times New Roman", Times, serif;
```

```
text-align:justify;
            display:inline-block;
```
¡Use this in all blocks within a set of brackets that you want to be in line!
Or, another option is: 
```
display: inline;
        float:left;
```


#### SPACING
The justify-content property values are flex-start, flex-end, center, space-between, space-around, and space-evenly, but there's no right value.


### BOOTSTRAP

```
    <div id="accordion" class="accordion">
         <div class="accordion-item">
           <h2 class=äccordion-header" id="heading">
                                                   <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">
```


Java Script Notes
-

* console.log generally prints out to the console. You can either
* * print directly using console.log('hello');
* * format your messages like console.log('hello %s', 'world');
* * specify css delcarations within the console log parentheses
* timers
* * console.time will tell you how long it takes to run something
* console.count tell you how many time a block has been called

* in order to include js in your html, you need to include /<script /src="nameoffile.js"></script>


```
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
```
* spread notation does the opposite, it splits an array into multiple entries
```
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```

#### variable types
var - I think this is the scope of everything within where you declare the variable, things will overwrite this if they're nested
const - I think this is a constant that doesn't change
let - this is how you want to declare a variable that can change
Null - not yet assigned a value
Undefined - var has not been defined
Boolean - true or false
Number - 64 bit signed
BigInt - a number of arbitrary magnitude
String - char sequence
Symbol - a unique symbol

Object - name-value pairs - {a:3, b:'fish'}
Function - a callable object - function a() {}
Date - calendar dates and times - new Date('1995-12-17')
Array - any type of ordered sequence - [3, 'fish']
Map - key-value pairs - new map()
JSON - we know json - {"a":3, "b":"fish"}


##### Operators and Operations within JS
* /+ is regular addition
* /- is regular subtraction
* /* is mult
* // divide
* /=== strict equality (bools) (you can use this and the /+ on strings)
* /!== strict inequality (bools)
* if/else/else if
* * a === 1 ? console.log(1) : console.log('not 1');
  * if (true && (!false || true)) {}
* loops
* * for/ for in / for of / while / do while / switch
  * for is the same
  * do while is the same
  * while is the same
  * for in is the same
  * for of is like for in
  * It doesn't say about switches
* String
* * length / indexOf() / split() / startsWith() / endsWith() / toLowerCase()
* JSON
  ```
  const json = JSON.stringify(obj);
  const objFromJson = JSON.parse(json);
  ```
* 

##### Event listener
```
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

##### JS Promise
```
return new Promise(async (pressResolve) => {
      this.paint(50);
      await this.playSound(volume);
      this.paint(25);
      pressResolve();
    });
```

Declaring Java Script variables: 


Format for entering JS into HTML:
/<script src="login.js"></script>
/<script> #insert code </script>
/onclick="alert('Hey there! Greetings from Coders')"
(if it references html in your js, you'll need to declare it at the end of html file before closing body and html tags)
YOU CANNOT SAY /<javascript>


Declaring Java Script Functions:
function doMath(operation, a, b) {}
const add = function (a, b) {}
a.sort((v1, v2) => v1 - v2); = a.sort(function (v1, v2) {return v1 - v2;});


ARRAY FUNCTIONS

|Function	| Meaning	| Example
| -----------|-----------| --------------|
push|	Add an item to the end of the array|	a.push(4)
pop	|Remove an item from the end of the array|	x = a.pop()
slice|	Return a sub-array	|a.slice(1,-1)
sort	|Run a function to sort an array in place|	a.sort((a,b) => b-a)
values	|Creates an iterator for use with a for of loop	|for (i of a.values()) {...}
find	|Find the first item satisfied by a test function	|a.find(i => i < 2)
forEach|	Run a function on each array item|	a.forEach(console.log)
reduce	|Run a function to reduce each array item to a single item	|a.reduce((a, c) => a + c)
map	|Run a function to map an array to a new array|	a.map(i => i+i)
filter	|Run a function to remove items	|a.filter(i => i%2)
every	|Run a function to test if all items match|	a.every(i => i < 3)
some	|Run a function to test if any items match|	a.some(i => 1 < 1)

  
Github note tips
-
* Backslash to print functional characters as actual characters
* Rest notation allows you to enter an array as one parameter


### Misc helpful information
- chmod is changing file permissions
- sudo is giving moderator permissions
- functions in java script
* * NO = function f(x) = {}
* * YES = const f = (x) => {}
* * YES = function f(x) {}
* * YES = const f = function(x) {}
- js objects
- - valid = { n:1 }
  - valid = {n:"1"}
  - invalid = { n=1 }
  - invalid = { "n"=1}
  - invalid = { "n"="1" }
- Insert DOM info()
- Insert DNS info()
- Console.log outputs data in JS
- Updating the .pem file -> chmod 400 \<pem file>
