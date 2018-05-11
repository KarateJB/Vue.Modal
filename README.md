# vue-pop-modal

A slim pop-modal component for Vue.js


## Install

```
$ npm install vue-pop-modal --save
```

## Usage

### Non-fit height

[Demo](http://karatejb.github.io/demo/vue-pop-modal/demo1.html)

```
<pop-modal v-if="showModal" v-on:close="closeModal" v-on:cancel="showModal=false">
    <p slot="header">
        {{ myHeader }}
    </p>
    <div slot="body">
        {{ myContent }
    </div>
    <p slot="header">
        {{ myFooter }}
    </p>
</pop-modal>
```

### Fit height and enable scrollbar for long content

[Demo](http://karatejb.github.io/demo/vue-pop-modal/demo2.html)

```
<pop-modal v-if="showModal" is-fit="true" v-on:close="closeModal" v-on:cancel="showModal=false">
    <p slot="header">
        {{ myHeader }}
    </p>
    <div slot="body">
        {{ myContent }
    </div>
    <p slot="header">
        {{ myFooter }}
    </p>
</pop-modal>
```


## License

MIT