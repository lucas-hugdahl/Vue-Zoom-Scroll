<template>
 
  <div id="app">
    <link href="./assets/blackboard.css" rel="stylesheet" type="text/css">

    <b-row class="justify-content-center px-3">
        <b-col cols="4">
            <img alt="Vue logo" src="./assets/logo.png">
            <h1 class="pt-5"><strong>Vue Zoom Scroll</strong></h1>
            <p class="py-3">Vue Zoom Scroll is an awesome lightweight scroll to zoom component that is easy to drop into any project. This plugin makes it easy to add a fun interactive element to any project.</p>
            <!-- <p class="pb-5"><strong>info@qudocreative.com</strong></p> -->
        </b-col>
    </b-row>

    <ZoomScroll v-on:stateChange="onZoomChange($event)">
        <b-row class="h-100 justify-content-center align-items-center">
            <b-col cols="4">
                <p class="code-block text-left">
                    <span class="d-block c3">//v-on:stateChange="yourFunction($event)"</span>
                    <span class="d-block">{</span>
                    <span class="d-block ml-4">
                        <span class="c1">isInViewport: </span> 
                        <span class="c2">{{zoomScrollDetails.isInViewport}}</span>,
                    </span>
                    <span class="d-block ml-4">
                        <span class="c1">scrolledPercentage: </span> 
                        <span class="c2">{{zoomScrollDetails.scrolledPercentage}}</span>,
                    </span>
                    <span class="d-block ml-4">
                        <span class="c1">currentScale: </span> 
                        <span class="c2">{{zoomScrollDetails.currentScale}}</span>,
                    </span>
                    <span class="d-block">}</span>
                </p>
            </b-col>
        </b-row>
    </ZoomScroll>

    <div class="doc-section px-4 pt-5">
        <h1><strong>Getting Started</strong></h1>
        <hr>
        <h4 class="py-3"><strong>Installation</strong></h4>
        <pre class="code-block"><code>npm install --save vue-zoom-scroll</code></pre>


        <h4 class="py-3 pt-4"><strong>Usage</strong></h4>
        <pre class="code-block">
            <code data-language="javascript">
&lt;script> 
    import  ZoomScroll  from  "vue-zoom-scroll"
    export  default {
        components: {
            ZoomScroll
        }
    }
&lt;/script>

&lt;template>
    &lt;ZoomScroll
        initialScale="1"
        maxScale="5"
        zoomIntensity="50">
    
        &lt;p>You can put any html here like this&lt;/p>
        
    &lt;/ZoomScroll>
&lt;/template>
            </code>
        </pre>
            
    </div>


    <div class="doc-section px-4 pt-5">
        <h1><strong>Events</strong></h1>
        <hr>
        <p>
            Vue Zoom Scroll emmits an event called 'stateChange' whenever the user enter, 
            is currently in, or exits the Vue Zoom Scroll container. 
            The payload of this event is an object identical to the one in the demo above.
        </p>

        <h4 class="py-3"><strong>Recommended Use</strong></h4>
        <p>Add the event listener on the Vue Zoom Scroll component and store the data in your state:</p>
        <pre class="code-block">
            <code> 
&lt;template>
    &lt;ZoomScroll v-on:stateChange="yourFunction($event)">
&lt;/template>
            </code>
        </pre>
        <pre class="code-block">
            <code>
&lt;script>
    import ZoomScroll from './vue-zoom-scroll'
    export default {
        components: {
            ZoomScroll
        },
        data() {
            return {
                zoomScrollDetails: {},
            }
        },
        methods: {
            yourFunction(data) {
                this.zoomScrollDetails = data;
            }
        }
    }
&lt;/script>
            </code>
        </pre>

    </div>


     <div class="doc-section px-4 py-5">
        <h1><strong>Props</strong></h1>
        <hr>
        <p class="pb-4">
           Here are all of the availible options you can pass in as prop values. The default values and types are listed below.
        </p>

        <div class="doc-section__prop" v-for="(prop, index) in availableProps" :key="index">
            <h5><strong>{{prop.name}}</strong></h5>
            <hr>
            <p><i>Default Value:</i> <strong> {{prop.default}}</strong></p>
            <p><i>Type:</i> <strong> {{prop.type}}</strong></p>
            <p>{{prop.description}}</p>
        </div>
     </div>

  </div>
</template>

<script>
import ZoomScroll from 'vue-zoom-scroll'


export default {
  name: 'app',
  components: {
    ZoomScroll
  },
  data() {
      return {
            zoomScrollDetails: {},
            availableProps: [
                {
                    name: "initialScale",
                    default: "1",
                    type: "Number",
                    description: "The starting scale value for your scroll animation. If you are zooming in, this value is the contents smallest point. If you are zooming out, this value is the contents largest point."
                },
                {
                    name: "zoomDirection",
                    default: "in",
                    type: "String",
                    description: "Can be set to 'in' or 'out'."
                },
                {
                    name: "zoomIntensity",
                    default: "50",
                    type: "Number",
                    description: "How fast and how much the content is zoomed. A lower number will result in a faster more extreme animation."
                },
                {
                    name: "maxScale",
                    default: "10",
                    type: "Number",
                    description: "The max scale value for the content when zoomDirection is set to 'in'."
                },
                {
                    name: "minScale",
                    default: "0",
                    type: "Number",
                    description: "The minimum scale for the content when the zoomDirection is set to 'out'."
                },
                {
                    name: "zoomOrigin",
                    default: "50% 50%",
                    type: "String",
                    description: "Controls the CSS 'transform-origin' property for the content that is scaled."
                },
                {
                    name: "scrollDistance",
                    default: "2000",
                    type: "Number",
                    description: "Controls how tall the scroll area is in pixels. No need to append 'px' to the value."
                },
                {
                    name: "zoomOrigin",
                    default: "50% 50%",
                    type: "String",
                    description: "Controls the CSS 'transform-origin' property for the content that is scaled."
                },
                {
                    name: "backgroundImage",
                    default: "Some random picture of a computer",
                    type: "String",
                    description: "Provide a url to any background image you want to use. If you don't want a background image, set this to an empty string."
                },
                {
                    name: "backgroundPosition",
                    default: "center",
                    type: "String",
                    description: "Controls the CSS 'background-position' property for the provided background image."
                },
                {
                    name: "backgroundSize",
                    default: "cover",
                    type: "String",
                    description: "Controls the CSS 'background-size' property for the provided background image."
                }
            ]
      }
  },
  methods: {
      onZoomChange(data) {
          this.zoomScrollDetails = data;
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow-x: hidden;
}


.code-block {
    background: rgb(50,50,50);
    font-family: "Courier New";
    color: white;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.247);

    .c1 {
        color: rgb(224, 71, 71);
    }

    .c2 {
        color: orange
    }

    .c3 {
        color: grey;
    }
}

.doc-section {
    text-align: left;

    &__prop {
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.116);
        padding: 1rem;
        margin: 1.5rem auto;
    }
}
</style>
