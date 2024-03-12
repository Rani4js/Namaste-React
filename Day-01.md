# Chapter1 - inception
## <p>1. What is Emmet?</p>
<pre>Definition in the site is: Emmet is a plug in for many popular text editors
which greatly improves HTML & CSS workflow: it makes our job easier by giving us 
what we want to code in our html and css files. 
Ex: step1: create a html file.
    step2: Enter "!".
    You will get the basic html structure without writing entire code.</pre>

## <p>2. Difference between a library and frame work?</p>

<table>
    <thead>
         <tr>
        <td>Framework</td>
        <td>Library</td>
        </tr>
    </thead>
    <tr>
        <td>Framework defines the overall architecture of the application and provides a common set of conventions for building and maintaining the code.</td>
        <td>Library is typically smaller in scope than a framework and is intended to be
used as a tool to help developers accomplish specific tasks. </td>
    </tr>
     <tr>
        <td>Frameworks tend to be more tightly coupled to the application, meaning that the framework’s code is closely interwoven with the application’s code.</td>
        <td>Libraries are typically more loosely coupled, meaning that the library’s code can be used independently of the application’s code.</td>
    </tr>
</table>

#### Conclusion: 
<p>Code written in both libraries and frameworks was written by someone else (or another developer) to allow users to perform many standard tasks in different ways. Nor does it mean that users cannot create their own libraries.<br>
When a user uses the library programmatically, the user has full control, but when talking about the user using the framework, the framework itself has full control, not the user. Or you could say that program control is reversed when the user uses the framework instead of the library.</p>

## 3. What is CDN? Why do we use it?
<p>CDN can stand for <strong> content delivery network or content distribution network</strong>. When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.</p>
<br>
<p>The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication created by a network's design. </p>

## 4. Why React is known as React?
<p>React is a JavaScript library for building user interfaces. It was developed by Facebook, and the name <strong> “React” </strong> was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.</p>
<p>It "reacts" quickly to changes without reloading the whole page. It uses the virtual DOM to efficiently update parts of a webpage. It's built around components that "react" and update.</p>

## 5. What is Crossorigin in script tag?
<p>The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers.</p>

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.The crossorigin attribute, valid on the  `<link>`, `<script>`, ` <audio>`, `<img>` and `<video>` elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data.

## 6. What is diference between React and ReactDOM
<p>React provides the tools and concepts to define component-based user interfaces, ReactDOM handles the task of rendering those interfaces in a web environment. Together, they form the foundation of React web applications.</p>

## 7. What is difference between react.development.js and react.production.js files via CDN?
<p>In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.</p>
<table>
	<thead>
		<tr>
			<td>react.development.js</td>
			<td>react.production.js</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>The development link is typically used during the development phase of your application.</td>
			<td>The production link is meant for deploying your application in a production environment.</td>
		</tr>
		<tr>
			<td>It includes additional debugging tools, warnings, and helpful error messages.</td>
			<td>It excludes development-specific tools, warnings, and error messages.</td>
		</tr>
		<tr>
			<td>It is larger in file size and may negatively impact the performance of your application.</td>
			<td>It is smaller in file size, which improves the performance of your application.</td>
		</tr>
		<tr>
			<td>It is not optimised for production use.</td>
			<td>It is optimized for production use.</td>
		</tr>
	</tbody>
</table>

## 8. What is async and defer?
<p>Here we have 3 secnarios. <br>
1. html parse without any attribute in the script tag<br>
2. html parse with async attribute in the script tag<br>
3. html parse with defer attribute in the script tag<br>
</p>
 **Parsing** <p> means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers.</p>

1. HTML parser finds blocking resources, such as script without tags—particularly those without an async or defer attribute—blocks rendering, and pauses parsing of HTML.

2. HTML parser with async attribute in the script tag will fetch the code parallay with html parse and after completly fecthing the code it blocks the html parser and excutes the code. After completly excuting the code only html parse will run.
   
3. HTML parser with defer attribute is much better than the remaining two cases it will fetch the code in parllel with html parse. After completing the html parse only excutes the code. without any blocking.
