<template>
    <div>
        <div>
            <HomePage v-if="selected == 1" />
            <ContactPage v-if="selected == 3" />
            <LocationPage v-if="selected == 2" />
            <CalendarPage v-if="selected == 4" />
        </div>
        <SwipeBottomNavigation swiper-color='#614A43' icon-color='#614A43'  :options="options" v-model="selected" />
    </div>
</template>

<script>
import { SwipeBottomNavigation  } from "bottom-navigation-vue";
import HomePage from '@/views/home/home.vue'
import ContactPage from '@/views/contact/contact.vue'
import LocationPage from '@/views/location/location.vue'
import CalendarPage from '@/views/calendar/calendar.vue'
import "bottom-navigation-vue/dist/style.css";

export default {
    name: 'Main-Page',
    components: { 
        HomePage,
        ContactPage,
        LocationPage,
        CalendarPage,
        SwipeBottomNavigation  
    },
    data() { 
        return {
            selected: 1,
            options: [
                { id: 2, icon: 'fa-solid fa-location-dot', title: 'Location', color: '#ac4793' },
                { id: 3, icon: 'fa-solid fa-heart', title: 'Contact', color: '#e2a93a' },
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