import vueColorfulbutton from "./vue-colorful-button.vue";

const colorfulButton = {
    install(Vue, options) {
        Vue.component(vueColorfulbutton.name, vueColorfulbutton)
    }
}

if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(colorfulButton)
}

export default colorfulButton