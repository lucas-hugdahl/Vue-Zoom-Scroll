# Vue Zoom Scroll

Vue Zoom Scroll is an awesome lightweight scroll to zoom component that is easy to drop into any project. This plugin makes it easy to add a fun interactive element to any project. 

View an example and full documentation [here.](https://lucas-hugdahl.github.io/Vue-Zoom-Scroll/)  

[GitHub Repo](https://github.com/lucas-hugdahl/Vue-Zoom-Scroll) 

# Tested In
Chrome, Firefox, Safari, Edge


# Getting Started
Installation
`npm install --save vue-zoom-scroll`


Here is a usage example:

```javascript
<script> 
import  ZoomScroll  from  "vue-zoom-scroll"
export  default {
	components: {
		ZoomScroll
	}
}
</script>

<template>
	<ZoomScroll
		initialScale="1"
		maxScale="5"
		zoomIntensity="50">
	
		<p>You can put any html here like this</p>
		
	</ZoomScroll>
</template>
```

# Options

Here are all of the props you can pass in. Their default values and types are listed below.

<br/>

#### initialScale   
*Default Value:*  **1**  
*Type:*  **Number**  
The starting scale value for your scroll animation. If you are zooming in, this value is the contents smallest point. If you are zooming out, this value is the contents largest point.

<br/>
<br/>

#### zoomDirection  
*Default Value:*  **in**  
*Type:*  **String**  
Can be set to "in" or "out".    

<br/>
<br/>

#### zoomIntensity  
*Default Value:*  **50** 
*Type:*  **Number**   
How fast and how much the content is zoomed. A lower number will result in a faster more extreme animation.     

<br/>
<br/>

#### maxScale  
*Default Value:*  **10**
*Type:*  **Number**    
The max scale value for the content when **zoomDirection** is set to "in".     

<br/>
<br/>

#### minScale  
*Default Value:*  **0**  
*Type:*  **Number**  
The minimum scale for the content when the **zoomDirection** is set to "out".    

<br/>
<br/>

#### zoomOrigin  
*Default Value:* **50% 50%**  
*Type:*  **String**   
Controls the CSS `transform-origin` property for the content that is scaled.     

<br/>
<br/>

#### scrollDistance  
*Default Value:* **2000**  
*Type:*  **Number**  
Controls how tall the scroll area is in pixels. No need to append "px" to the value.    

<br/>
<br/>

#### backgroundImage   
*Default Value:* **Some random picture of a computer**  
*Type:*  **String**  
Provide a url to any background image you want to use. If you don't want a background image, set this to an empty string.     

<br/>
<br/>

#### backgroundPosition  
*Default Value:*  **center**  
*Type:*  **String**  
Controls the CSS `background-position` property for the provided background image.     

<br/>
<br/>

#### backgroundSize   
*Default Value:* **cover**  
*Type:*  **String**  
Controls the CSS `background-size` property for the provided background image.     

