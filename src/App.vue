<template>
  <header class="w-full border p-4">
    BMI
  </header>
  <main class="flex-1 w-full h-full p-[5rem] flex flex-col gap-12">
    <section class="flex justify-start items-center gap-4">
      <Button v-for="(gender,index) in genders" :key="`${index}-btn`" @click="isClicked(gender,index)" @toggle="toggleActiveButton" :btnStyle="`medium tertiary`" :btnText="gender.label" :isActive="index === activeButtonIndex" :index="index"/>
    </section>
    <section class="flex flex-col">
      <Range />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import Button from './components/Button.vue'
import Range from './components/Range.vue'

export default{
  components: {Button, Range},
  setup(){
    const genders = ref([
      {label:'♂ Male', value:'Male', isActive:false}, 
      {label:'♀ Female', value:'Female', isActive:false}
  ])

  const activeButtonIndex = ref(null);

  const isClicked =(gender,index)=>{
    activeButtonIndex.value = index;
    gender.isActive = true
    console.log(gender.isActive);
  }

  const toggleActiveButton = (index) => {
      // Deactivate the currently active button when a new button is toggled
      if (activeButtonIndex.value === index) {
        activeButtonIndex.value = null;
      } else {
        activeButtonIndex.value = index;
      }
  };

    return { genders, activeButtonIndex, isClicked, toggleActiveButton }
  }
}
</script>

<style scoped>

</style>
