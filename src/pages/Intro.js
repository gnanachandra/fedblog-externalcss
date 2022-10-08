import React from 'react'
import './pagestyles.css'
function Intro() {
  return (
    <div className='intro-content'>
      <h1>What is CSS ?</h1>
      <p>CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.
         A document is usually a text file structured using a markup language — HTML is the most common markup language, but you may also come across other markup languages such as SVG or XML.
         Presenting a document to a user means converting it into a form usable by your audience. Browsers, like Firefox, Chrome, or Edge, are designed to present documents visually, for example, on a computer screen, projector, or printer.
         CSS can be used for very basic document text styling — for example, for changing the color and size of headings and links. It can be used to create a layout — for example, turning a single column of text into a layout with a main content area and a sidebar for related information. It can even be used for effects such as animation. Have a look at the links in this paragraph for specific examples
      </p>
      <h1>CSS syntax</h1>
      <p>CSS is a rule-based language — you define the rules by specifying groups of styles that should be applied to particular elements or groups of elements on your web page.
      <br/>
      For example, you can decide to have the main heading on your page to be shown as large red text. The following code shows a very simple CSS rule that would achieve the styling described above:</p>
      <img src = "css_syntax.jpg" alt='syntax'/>
      <ul>
        <li>In the above example, the CSS rule opens with a selector. This selects the HTML element that we are going to style. In this case, we are styling level one headings (&klt;h1&gt;).</li>
        <li>We then have a set of curly braces { }.</li>
        <li>Inside the braces will be one or more declarations, which take the form of property and value pairs. We specify the property (color in the above example) before the colon, and we specify the value of the property after the colon (red in this example).</li>
        <li>This example contains two declarations, one for color and the other for font-size. Each pair specifies a property of the element(s) we are selecting (&klt;h1&gt; in this case), then a value that we'd like to give the property.</li>
      </ul>
      <p>CSS properties have different allowable values, depending on which property is being specified. In our example, we have the color property, which can take various color values. We also have the font-size property. This property can take various size units as a value.</p>
    </div>
  )
}

export default Intro