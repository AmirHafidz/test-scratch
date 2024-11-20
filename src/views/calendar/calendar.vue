<template>
        <!-- <div class="d-flex justify-content-center">
            <div class="card py-2 m-0 bg-warning" style="border-radius: 0; border: none;">
                <h3 class="mb-3">Calendar</h3>
                <VCalendar />
                <VDatePicker style="border: none; width: 80vw;" v-model="dateWed" />
             </div>
        </div> -->
    <div class="mt-4">
        <div class="row mx-0 my-0">
            <div class="card py-4" style="border-radius: 0; border: none;">
                <div class="col-12 d-flex justify-content-center mb-3">
                    <div class="col-11">
                        <h3 class="mb-3" style="color: #624A44">Date</h3>
                        <VDatePicker style="border: none; width: 80vw;" v-model="dateWed" />
                    </div>
                </div>
            </div>

            <div class="card py-4" style="border-radius: 0; border: none;">
                <div class="col-12 d-flex justify-content-center mb-3">
                    <div class="col-11">
                        <h3 class="mb-3" style="color: #624A44">Countdown</h3>
                        <p>Tower, 4, @ PFCC, Jalan Puteri 1/2, Bandar Puteri Puchong, 47100 Puchong, Selangor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'calendar-page',
    data() {
        return {
            dateWed: ''
        }
    }
}
</script>