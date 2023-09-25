<template>
    <div :class="style" class="h-fit w-fit">
        <button class="" @click="setActive">
            <h1 v-if="text">{{text}}</h1>
            <slot></slot>
        </button>
    </div>
</template>

<script>
import { defineProps, ref } from 'vue';

export default {
    props:{
        btnStyle:{
            type: String,
            default: 'primary large'
        },
        btnText:{
            type: String
        }
    },
    setup(props){
        const style = ref(props.btnStyle)
        const text = ref(props.btnText)

        // const setActive =()=> {
        //     style.value += ' secondary-active'
        //     console.log(style.value)
        // }
        // const removeActive =()=> {
        //     style.value -= ' secondary-active'
        //     console.log(style.value)
        // }

        return{ style, text }
 
    }
}
</script>

<style>
.large button{
    @apply px-[32px] py-[16px] text-3xl
}
.medium button{
    @apply px-[16px] py-[8px] text-xl
}
.small button{
    @apply px-[8px] py-[4px] text-base
}
.mini button{
    @apply px-[4px] py-[2px] text-xs
}

button, .primary{
    @apply transition-all duration-500 delay-75 ease-in-out
}

.primary {
    @apply bg-gradient-to-l from-primary via-secondary to-red-400 font-bold text-gray-800
}
.primary button{
    @apply bg-gradient-to-r from-primary via-secondary to-tertiary
}
.primary:hover button{
    @apply bg-transparent
}
.secondary {
    @apply bg-gray-700 font-bold text-gray-100 p-[3px]
}
.secondary button{
    @apply bg-gray-700
}
.secondary:hover button h1{
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @apply bg-gradient-to-r from-primary via-secondary to-tertiary 
}
.secondary-active{
    @apply bg-gradient-to-r from-primary via-secondary to-tertiary
}
.tertiary {
    @apply font-bold text-secondary
}
.tertiary button{
    @apply hover:underline hover:decoration-2 hover:underline-offset-4
}

.switch{

}

</style>