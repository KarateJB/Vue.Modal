Vue.component('pop-modal', {
    props: ['isScroll'],
    data: function () {
        return {
            modalMaskClass: {
                'modal-mask': this.isScroll,
                'modal-mask-scroll': !this.isScroll
            },
            modalBodyClass: {
                'modal-body': !this.isScroll,
                'modal-body-scroll': this.isScroll
            },
            modalMaskStyle: null
        }
    },
    methods: {

        ///Get element's exact position
        getElementExactPosition: function (el, hierarchy) {


            let xPos = 0;
            let yPos = 0;
            let poslogs = [];

            while (el) {
                if (el.tagName.toLowerCase() == "body") {
                    // deal with browser quirks with body/window/document and page scroll
                    var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                    var yScroll = el.scrollTop || document.documentElement.scrollTop;

                    xPos += (el.offsetLeft - xScroll + el.clientLeft);
                    yPos += (el.offsetTop - yScroll + el.clientTop);
                } else {
                    // for all other non-BODY elements
                    xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                    yPos += (el.offsetTop - el.scrollTop + el.clientTop);
                }

                poslogs.push({ x: xPos, y: yPos });
                el = el.offsetParent;
            }

            
            if (hierarchy != null) {
                return poslogs[hierarchy]; //指定哪一層
            }
            else {
                return poslogs[poslogs.length - 1];//最上層
            }
        },

        ///Handle the first-time-popup and resizing
        handleResize: function (windowWidth, windowHeight) {

            var vm = this;

            let left = 0;
            let top = 0;
            let exactPos = null;
            let element = document.getElementById('modalMask'); //Replace elementId with your element's Id.

            //By Vue.js
            //let modalMask = this.$refs.modalMask;
            //let left = 0 - modalMask.getBoundingClientRect().left;
            //let top = 0 - modalMask.getBoundingClientRect().top;
            //By jquery
            //$(modalMask).css("left", 0 - $("#modalMask").offset().left);
            //$(modalMask).css("top", 0 - $("#modalMask").offset().top);
            //$(modalMask).css("width", windowWidth);
            //$(modalMask).css("height", windowHeight);


            if (windowWidth <= 991) {
               
                return;
            }
            else {
                if (!windowWidth || !windowHeight) { //Popup 
                    windowWidth = Math.max(window.innerWidth, document.body.clientWidth);
                    windowHeight = Math.max(window.innerHeight, document.body.clientHeight);
                    exactPos = this.getElementExactPosition(element);
                    left = 0 - exactPos.x;
                    top = 0 - exactPos.y;
                }
                else { //Resize window

                    exactPos = this.getElementExactPosition(element, 0);

                    left = exactPos.x;
                    top = exactPos.y;
                }

                //console.log('Final pos: ', left, top, windowWidth, windowHeight);

                vm.modalMaskStyle = {
                    left: left + 'px',
                    top: top + 'px',
                    width: windowWidth + 'px',
                    height: windowHeight + 'px'
                };
            }
        },

        ///While click on the mask, emit the cancel event of parent component
        closeModal: function ($event) {
            var vm = this;

            if($event.target.parentElement.id === 'modalMask')
                vm.$emit('cancel');
        }
    },
    mounted: function () {
        let vm = this;


        if (vm.isScroll !== "true") {

            vm.handleResize();

            let observable$ = Rx.Observable.fromEvent(window, 'resize').map(function (x) {
                return { width: window.innerWidth, height: window.innerHeight };
            });

            observable$
                .map(function(es){ return Rx.Observable.of(rs).delay(200)})
                .switch()
                .subscribe(function (x) {
                    vm.handleResize(x.width, x.height);
                });

            // window.addEventListener('resize', this.handleResize);
        }
    },
    template: `
     <transition name="modal">
         <div :class="modalMaskClass" :style="modalMaskStyle" id="modalMask" ref="modalMask" v-on:click="closeModal">
            <div class="modal-wrapper center">
                <div class="modal-container">
                    <div class="modal-header">
                        <h3><slot name="header"></slot></h3>
                    </div>
                    <div :class="modalBodyClass">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success" v-on:click="$emit('close')">
                            Ok
                        </button>
                    </div>
                </div>
           </div>
       </div>
    </transition >`,
});




