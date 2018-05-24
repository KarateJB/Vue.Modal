# vue-pop-modal

A slim pop-modal component for Vue.js



## Install

```
$ npm install vue-pop-modal --save
```

## Usage

### Non-fixed height

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

### Fixed height and enable scrollbar for long content

[Demo](http://karatejb.github.io/demo/vue-pop-modal/demo2.html)

```
<pop-modal v-if="showModal" is-fix="true" v-on:close="closeModal" v-on:cancel="showModal=false">
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

## Props

| Property | Description | Type | Required | Default  |
|------------|--------------------------------------------------------|---------|------|----------|
|  isFix     | "true" for fixed modal or "false" for non-fixed modal. | String  |      | "false"  |
|  disableOk | Disable OK button, usually used for form validation.   | Boolean |      |  false   |


<br />
<br />

## Release notes

### v1.0.2
- Add `disable-ok` prop and fix wrong CSS 

### v1.0.1 
- Move modal to center when resizing it on non-fit mode 

### v1.0.0 
- First version




## License

MIT