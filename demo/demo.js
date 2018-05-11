var app = new Vue({
    el: '#app',
    data: {
        showModal: false,
        msg: {
            header: "Hello", 
            content: "Hello, world!"
        }
    },
    methods:{
        openModal: function(){
            this.showModal = true;
        },

        closeModal: function(){
            alert('You had closed the modal!');
        }
    },
    mounted: function(){
        this.showModal = false;
    }
})


