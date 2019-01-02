(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.VueZoomScroll = {})));
}(this, (function (exports) { 'use strict';

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    var script = {
      props: {
        initialScale: {
          default: 1,
          type: Number
        },
        maxScale: {
          default: 10,
          type: Number
        },
        minScale: {
          default: 1,
          type: Number
        },
        zoomIntensity: {
          default: 50,
          type: Number
        },
        zoomDirection: {
          default: "in",
          type: String
        },
        backgroundImage: {
          default: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          type: String
        },
        backgroundPosition: {
          default: "center",
          type: String
        },
        backgroundSize: {
          default: "cover",
          type: String
        },
        zoomOrigin: {
          default: "50% 50%",
          type: String
        },
        scrollDistance: {
          default: 2000,
          type: Number
        }
      },
      data: function data() {
        return {
          isInViewport: false,
          containerBottom: 0,
          containerHeight: 0,
          contentBottom: 0,
          stickContainerBottom: false,
          stickContainerTop: false,
          scrollProgress: 0,
          scrollRange: 0,
          scaleValue: 0,
          isLoaded: false
        };
      },
      methods: {
        handleZoomScroll: function handleZoomScroll() {
          this.containerBottom = this.$refs.zoomScrollBG.getBoundingClientRect().bottom - window.innerHeight;
          this.containerTop = this.$refs.zoomScrollBG.getBoundingClientRect().top;
          this.containerHeight = this.$refs.zoomScrollBG.getBoundingClientRect().height;
          this.contentBottom = this.containerTop * -1 + window.innerHeight;
          this.scrollRange = this.containerHeight - window.innerHeight;
          this.isInViewport = this.containerBottom >= 0 && this.containerTop <= 0 ? true : false;

          if (!this.isLoaded && this.containerBottom < 0) {
            this.scaleValue = this.initialScale + 100 / this.zoomIntensity;
            this.isLoaded = true;
          }

          if (this.isInViewport) {
            this.scrollProgress = (this.contentBottom - window.innerHeight) * 100 / this.scrollRange;

            if (this.zoomDirection == "in") {
              this.scaleValue = this.initialScale + this.scrollProgress / this.zoomIntensity;
            } else if (this.zoomDirection == "out") {
              this.scaleValue = this.initialScale - this.scrollProgress / this.zoomIntensity;
            }

            if (this.scaleValue < this.minScale) {
              this.scaleValue = this.minScale;
            }

            if (this.scaleValue > this.maxScale) {
              this.scaleValue = this.maxScale;
            }

            this.$emit("stateChange", {
              isInViewport: true,
              scrolledPercentage: parseInt(this.scrollProgress),
              currentScale: parseFloat(this.scaleValue).toFixed(4)
            });
          } else {
            if (this.containerBottom < 0) {
              this.stickContainerBottom = true;
              this.stickContainerTop = false;
              this.$emit("stateChange", {
                isInViewport: false,
                scrolledPercentage: 100,
                currentScale: parseFloat(this.scaleValue).toFixed(4)
              });
            } else {
              this.stickContainerBottom = false;
              this.stickContainerTop = true;
              this.$emit("stateChange", {
                isInViewport: false,
                scrolledPercentage: 0,
                currentScale: parseFloat(this.scaleValue).toFixed(4)
              });
            }
          }

          window.requestAnimationFrame(this.handleZoomScroll);
        }
      },
      mounted: function mounted() {
        if (this.zoomDirection == "in" && this.initialScale > this.maxScale) {
          this.scaleValue = this.maxScale;
        } else if (this.zoomDirection == "out" && this.initialScale < this.minScale) {
          this.scaleValue = this.minScale;
        } else {
          this.scaleValue = this.initialScale;
        }

        this.handleZoomScroll();
      }
    };

    /* script */
                var __vue_script__ = script;
                
    /* template */
    var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"zoomScrollBG",staticClass:"zoom-scroll__bg",style:([{ 'height': _vm.scrollDistance + 'px'}])},[_c('div',{ref:"zoomScrollContent",staticClass:"zoom-scroll__content",class:[ 
                {fixed: _vm.isInViewport},
                {stickToTop: _vm.stickContainerTop},
                {stickToBottom: _vm.stickContainerBottom}],style:([
                { transform: 'scale(' + _vm.scaleValue + ')'},
                { 'transform-origin': _vm.zoomOrigin},
                { 'background-image': 'url(' + _vm.backgroundImage + ')'},
                { 'background-position': _vm.backgroundPosition},
                { 'background-size': _vm.backgroundSize}
            ])},[_vm._t("default")],2)])};
    var __vue_staticRenderFns__ = [];

      /* style */
      var __vue_inject_styles__ = function (inject) {
        if (!inject) { return }
        inject("data-v-1d1f1a8c_0", { source: ".zoom-scroll__bg{position:relative;overflow:hidden}.zoom-scroll__content{position:absolute;left:0;height:100vh;width:100%;overflow:hidden}.zoom-scroll__content.fixed{position:fixed}.zoom-scroll__content.stickToBottom{bottom:0}.zoom-scroll__content.stickToTop{top:0}", map: undefined, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__ = undefined;
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* component normalizer */
      function __vue_normalize__(
        template, style, script$$1,
        scope, functional, moduleIdentifier,
        createInjector, createInjectorSSR
      ) {
        var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

        // For security concerns, we use only base name in production mode.
        component.__file = "vue-zoom-scroll.vue";

        if (!component.render) {
          component.render = template.render;
          component.staticRenderFns = template.staticRenderFns;
          component._compiled = true;

          if (functional) { component.functional = true; }
        }

        component._scopeId = scope;

        {
          var hook;
          if (style) {
            hook = function(context) {
              style.call(this, createInjector(context));
            };
          }

          if (hook !== undefined) {
            if (component.functional) {
              // register for functional component in vue file
              var originalRender = component.render;
              component.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context)
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = component.beforeCreate;
              component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }
        }

        return component
      }
      /* style inject */
      function __vue_create_injector__() {
        var head = document.head || document.getElementsByTagName('head')[0];
        var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
        var isOldIE =
          typeof navigator !== 'undefined' &&
          /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        return function addStyle(id, css) {
          if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

          var group = isOldIE ? css.media || 'default' : id;
          var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

          if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;

            style.ids.push(id);

            if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                ' */';
            }

            if (isOldIE) {
              style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }

            if (!style.element) {
              var el = style.element = document.createElement('style');
              el.type = 'text/css';

              if (css.media) { el.setAttribute('media', css.media); }
              if (isOldIE) {
                el.setAttribute('data-group', group);
                el.setAttribute('data-next-index', '0');
              }

              head.appendChild(el);
            }

            if (isOldIE) {
              index = parseInt(style.element.getAttribute('data-next-index'));
              style.element.setAttribute('data-next-index', index + 1);
            }

            if (style.element.styleSheet) {
              style.parts.push(code);
              style.element.styleSheet.cssText = style.parts
                .filter(Boolean)
                .join('\n');
            } else {
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index]) { style.element.removeChild(nodes[index]); }
              if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
              else { style.element.appendChild(textNode); }
            }
          }
        }
      }
      /* style inject SSR */
      

      
      var component = __vue_normalize__(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        __vue_create_injector__,
        undefined
      );

    // Import vue component

    function install(Vue) {
      if (install.installed) {
        return;
      }

      install.installed = true;
      Vue.component('VueZoomScroll', component);
    } // Create module definition for Vue.use()


    var plugin = {
      install: install
    }; // To auto-install when vue is found

    /* global window global */

    var GlobalVue = null;

    if (typeof window !== 'undefined') {
      GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
      GlobalVue = global.Vue;
    }

    if (GlobalVue) {
      GlobalVue.use(plugin);
    } // To allow use as module (npm/webpack/etc.) export component
    // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
    // export const RollupDemoDirective = component;

    exports.default = component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
