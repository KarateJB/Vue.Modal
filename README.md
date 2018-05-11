# vue-slim-modal

A slim modal component for Vue.js


## Install

```
$ npm install vue-slim-modal --save
```

## Usage

* Non-fit height

[Demo]()

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

* Fit height and enable scrollbar for long content

[Demo]()

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