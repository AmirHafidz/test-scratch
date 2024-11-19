<template>
    <div>
        <h1>This is Main</h1>
        <i class="fa-solid fa-home"></i>
        <SwipeBottomNavigation  :options="options" v-model="selected" />
    </div>
</template>

<script>
import { SwipeBottomNavigation  } from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

export default {
    name: 'Main-Page',
    components: { SwipeBottomNavigation  },
    data() { 
        return {
            selected: 1,
            options: [
                { id: 1, icon: 'fa-solid fa-home', title: 'Home', color: '#5639af' },
                { id: 2, icon: 'fa-solid fa-magnifying-glass', title: 'Search', color: '#ac4793' },
                { id: 3, icon: 'fa-solid fa-heart', title: 'Likes', color: '#e2a93a' },
                { id: 4, icon: 'fa-solid fa-gear', title: 'Settings', color: '#4493a7' }
            ]
        }
    }
}

</script>

<style>


</style>