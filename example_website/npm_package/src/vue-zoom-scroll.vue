<template>
    <div ref="zoomScrollBG" class="zoom-scroll__bg" v-bind:style="[{ 'height': scrollDistance + 'px'}]">

        <div ref="zoomScrollContent" 
            class="zoom-scroll__content" 
            v-bind:class="[ 
                {fixed: isInViewport},
                {stickToTop: stickContainerTop},
                {stickToBottom: stickContainerBottom}]"
            v-bind:style="[
                { transform: 'scale(' + scaleValue + ')'},
                { 'transform-origin': zoomOrigin},
                { 'background-image': 'url(' + backgroundImage + ')'},
                { 'background-position': backgroundPosition},
                { 'background-size': backgroundSize}
            ]">
                
                <slot></slot>
    
        </div>
    </div>
</template>

<script>

    export default {
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
            },
        },
        data() {
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
            }
        },
 
        methods: {

            handleZoomScroll() {
                this.containerBottom = this.$refs.zoomScrollBG.getBoundingClientRect().bottom - window.innerHeight;
                this.containerTop = this.$refs.zoomScrollBG.getBoundingClientRect().top;
                this.containerHeight = this.$refs.zoomScrollBG.getBoundingClientRect().height;
                this.contentBottom = ((this.containerTop * -1) + window.innerHeight);
                this.scrollRange = this.containerHeight - window.innerHeight;
                this.isInViewport = this.containerBottom >= 0 && this.containerTop <= 0 ? true : false;

                if (!this.isLoaded && this.containerBottom < 0) {
                    this.scaleValue = this.initialScale + (100 / this.zoomIntensity);
                    this.isLoaded = true;
                }

                if (this.isInViewport) {

                    this.scrollProgress = ((this.contentBottom - window.innerHeight) * 100) / (this.scrollRange);
                    
                    if (this.zoomDirection == "in") {
                        this.scaleValue = this.initialScale + (this.scrollProgress / this.zoomIntensity);
                    } else if (this.zoomDirection == "out"){
                        this.scaleValue = this.initialScale - (this.scrollProgress / this.zoomIntensity);
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
                 window.requestAnimationFrame(this.handleZoomScroll)
            }
        },

        mounted() {
            if (this.zoomDirection == "in" && this.initialScale > this.maxScale) {
                this.scaleValue = this.maxScale
            } else if (this.zoomDirection == "out" && this.initialScale < this.minScale) {
                this.scaleValue = this.minScale
            } else {
                this.scaleValue = this.initialScale
            }
         
            this.handleZoomScroll();

        }
    }
</script>

<style>
    .zoom-scroll__bg {
        position: relative;
        overflow: hidden;
    }

    .zoom-scroll__content {
        position: absolute;
        left: 0;
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }

    .zoom-scroll__content.fixed {
        position: fixed;
    } 

    .zoom-scroll__content.stickToBottom {
            bottom: 0;
    }

    .zoom-scroll__content.stickToTop {
        top: 0;
    }
</style>
