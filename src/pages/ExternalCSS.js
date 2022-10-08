import React from 'react'
import './pagestyles.css'
function ExternalCSS() {
  return (
    <div className='external-css-content'>
      <h1 className='heading'>External CSS</h1>
        <p>An external CSS stylesheet can be applied to any number of HTML documents by placing a &lt;link&gt; element in each HTML document.
            The attribute rel of the &lt;link&gt; tag has to be set to "stylesheet", and the href attribute to the relative or absolute
            path to the stylesheet. While using relative URL paths is generally considered good practice, absolute paths can be
            used, too. In HTML5 the type attribute can be omitted.
            It is recommended that the &lt;link&gt; tag be placed in the HTML file's &lt;head&gt; tag so that the styles are loaded before
            the elements they style. Otherwise, users will see a flash of unstyled content.
        </p>
        <table>
          <caption>Example of External Style Sheet (html and css code)</caption>
        <tr>
            <td><img src = "htmlcode.png" alt="css syntax" height="500px" width="500px"/></td>
            
            <td><img src = "csscode.png" alt="css syntax" height="500px" width="500px"/></td>
        </tr>
        </table>

      <br/><br/>

      <h2>Output</h2>
      <img src = "output.jpg" alt = "output" className='output'/>


      <section>
        <h2>Advantages of External Style Sheets</h2>
        <p>
        External style sheets have the following advantages over internal and inline styles
        <ul>
          <li>one change to the style sheet will change all linked pages</li>
          <li>you can create classes of styles that can then be used on many different HTML elements</li>
          <li>consistent look and feel across multiple web pages</li>
          <li>improved load times because the css file is downloaded once and applied to each relevant page as needed</li>
        </ul>
        </p>
      </section>


      <section>
        <h2>Link Tag Attributes : </h2>
        <div>
          <h3>The <span>rel</span> Attribute</h3>
          <p>The first of the two indispensable attributes is the rel attribute. You will use this attribute to tell the browser what the relationship is with the imported file.
            You'll write rel="stylesheet" to tell the browser that you are importing a stylesheet.</p>
        </div>
        <div>
          <h3>The <span>href</span> attribute</h3>
          <p>The second indispensable attribute is the href attribute, which specifies the file to import.A common situation is that the CSS file and the HTML file are in the same folder. In such a case you can write href="style.css".
            If the CSS file and the HTML file are in different folders, you need to write the correct path that needs to go from the HTML file to the CSS file.</p>
        </div>
        <div>
          <h3>The <span>type</span> Attribute</h3>
          <p>
            You use the type attribute to define the type of the content you're linking to. For a stylesheet, this would be text/css. But since css is the only stylesheet language used on the web, it is not only optional, but it is even a best practice not to include it.
          </p>
        </div>
        <div>
          <h3>The <span>Media</span> attribute</h3>
          <p>
              The media attribute is not visible in the example. It's an optional attribute that you can use to specify when to import a certain stylesheet. Its value must be a media type / media query.
              This can be useful in case you want to separate the styles for different devices and screen sizes in different files. You would need to import each CSS file with its own link element.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ExternalCSS