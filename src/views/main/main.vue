<template>
    <div>
        <div>
            <HomePage v-if="selected == 1" />
            <LocationPage v-if="selected == 2" />
            <CalendarPage v-if="selected == 4" />
        </div>
        <SwipeBottomNavigation  :options="options" v-model="selected" />
    </div>
</template>

<script>
import { SwipeBottomNavigation  } from "bottom-navigation-vue";
import HomePage from '@/views/home/home.vue'
import LocationPage from '@/views/location/location.vue'
import CalendarPage from '@/views/calendar/calendar.vue'
import "bottom-navigation-vue/dist/style.css";

export default {
    name: 'Main-Page',
    components: { 
        HomePage,
        LocationPage,
        CalendarPage,
        SwipeBottomNavigation  
    },
    data() { 
        return {
            selected: 1,
            options: [
                { id: 2, icon: 'fa-solid fa-location-dot', title: 'Location', color: '#ac4793' },
                { id: 3, icon: 'fa-solid fa-heart', title: 'Likes', color: '#e2a93a' },
                { id: 1, icon: 'fa-solid fa-home', title: 'Home', color: '#5639af' },
                { id: 4, icon: 'fa-solid fa-calendar', title: 'Calendar', color: '#4493a7' },
                { id: 5, icon: 'fa-solid fa-ring', title: 'About Us', color: '#4493a7' }
            ]
        }
    }
}

</script>

<style>


</style>