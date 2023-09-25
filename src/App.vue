<template>
  <header class="w-full border p-4">
    BMI
  </header>
  <main class="flex-1 w-full h-full p-[5rem] flex flex-col gap-12">
    <section class="flex justify-start items-center gap-4">
      <Button v-for="(gender,index) in genders" :key="`${index}-btn`" @click="selectedGender = gender.value" :btnStyle="`medium secondary ${{ 'secondary-active': selectedGender === gender.value }}`" :btnText="gender.label" />
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
      {label:'♂ Male', value:'Male'}, 
      {label:'♀ Female', value:'Female'}
  ])
  const selectedGender = ref(null);

    return { genders, selectedGender }
  }
}
</script>

<style scoped>

</style>
