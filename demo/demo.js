var app = new Vue({
    el: '#app',
    data: {
        showModal: false,
        disableModalOk: false,
        header: "Hello",
        mockArr: []
    },
    methods:{
        openModal: function(){
            console.log('test');
            this.showModal = true;
        },

        closeModal: function(){
            this.showModal =false;
            alert('You had closed the modal!');
        }
    },
    created: function(){
        this.showModal = false;
        for(let i = 0; i<30; i++){
            this.mockArr.push(`Hello${i}`);
        }
    }
})


