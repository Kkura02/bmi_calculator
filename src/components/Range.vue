<template>
    <div class="flex flex-col gap-8">
        <h2>Height</h2>
        <Button text="Feet" btnStyle="mini"/>
        <p>{{ heightInCm }}</p>
        <input type="range" min="0" max="228" step="0.1" v-model="heightInCm">
        <p>{{ heightInFtIn }}</p>
        <input type="range" v-model="heightInFt" min="0" max="7.5" step="0.1">
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import {Button} from '../components'
export default {
    components:{
        Button
    },
    setup(){
        const heightInCm = ref(0)
        const heightInFt = ref(0)
        const heightInFtIn = ref(`0'0"`)

        const convertToFeetInches = () => {
            // Ensure feet is a numeric value
            const feetValue = parseFloat(heightInFt.value);

            // Check if it is a valid number
            if (!isNaN(feetValue)) {
                // Calculate the whole number part (feet)
                const wholeFeet = Math.floor(feetValue);

                // Calculate the decimal part as inches
                const decimalPart = Math.round((feetValue - wholeFeet) * 12);

                // Combine feet and inches into a string
                heightInFtIn.value = `${wholeFeet}'${decimalPart}"`;
            } else {
                // If the input is not a valid number, reset feetInches
                heightInFtIn.value = '';
            }
        };

        watch(heightInFt,() => {
            convertToFeetInches();
            console.log(heightInFtIn.value, heightInFt.value)
        })

        

        return { heightInCm, heightInFt, convertToFeetInches, heightInFtIn}
    }
}
</script>

<style>
/* Style the range input */
input[type="range"] {
  width: 100%;
  height: 5px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  -webkit-appearance: none; /* Remove default styles on Safari */
}

/* Style the range track */
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  border-radius: 5px;

  @apply bg-gradient-to-r from-primary via-secondary to-tertiary
}

/* Style the range thumb */
input[type="range"]::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  -webkit-appearance: none; /* Remove default styles on Safari */
  position: relative; /* Add relative positioning */
  top: 50%; /* Adjust the vertical alignment */
  transform: translateY(-50%); /* Center the thumb vertically */
  border: 2px solid white;

  @apply bg-gradient-to-l from-primary to-secondary
}
</style>