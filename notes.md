# Notes

## Things to do
* Figure outhow to set up click
* Find a map to use



### HTML Language Tips

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

* The "\<a>" will do hyperlinks
* * \<a href="url">link text\</a>
* \<p>\<img src="hyperlink" alt="alternate name">\</p>
 -- this is the format for putting in images
* input table -- \<table>
        \<tr>
          \<th>Table</th> the th does bold (maybe means table header?)
          \<th>Table</th>
          \<th>Table</th>
        \</tr>
        \<tr>
          \<td>table</td> the td is just regular
          \<td>table</td>
          \<td>table</td>
        \</tr>
        \<tr>


#### HTML Tags

|   tag   |  usage  |
| ------- | ------- |
| \<!--...--> | This is a comment which is not displayed in the browser |
| \<!DOCTYPE html> | This is the beginning of ALL html documents!! **Important!!** |
|  |  |



### CSS Notes
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


#### Getting Started in CSS
```
selector {
property1: value1;
property2: value2;
}
```
So for example you could say "h1" in place of "selector" and then "color:blue" in place of "property1: value1;"
| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `h1`     | The HTML headers: can say h2 etc | h1 {color:blue}      |
| |      |  |
|   |   |                           |
|     |            |         |
|  |     |       |
|   |                |             |
| |          |                    |
|  | |  |
|   |            |         |
|  | | |


  
### Github note tips
* Backslash to print functional characters as actual characters
