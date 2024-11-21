<template>
    <div>
        <div style="background-color: #EFECEC">
            <HomePage v-if="selected == 1" style="background-color: #EFECEC" />
            <ContactPage v-if="selected == 3" style="background-color: #EFECEC" />
            <LocationPage v-if="selected == 2" style="background-color: #EFECEC" />
            <CalendarPage v-if="selected == 4" style="background-color: #EFECEC" />
            <AboutPage v-if="selected == 5" />
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
import AboutPage from '@/views/about/about.vue'
import "bottom-navigation-vue/dist/style.css";

export default {
    name: 'Main-Page',
    components: { 
        HomePage,
        ContactPage,
        LocationPage,
        CalendarPage,
        AboutPage,
        SwipeBottomNavigation  
    },
    data() { 
        return {
            selected: 3,
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