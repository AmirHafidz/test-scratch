<template>
    <div class="p-4" style="height: 100vh">
        <h3 class="mb-4">Configuration</h3>
        <div class="container overflow-hidden text-center">
            <div class="row gy-2 gx-2">
                <div class="col-12 mb-4">
                    <div class="card p-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style="border: 1px solid #90807B; background-color: #EFECEC; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z"/></svg>
                        </div>
                        <h3>Send Wish</h3>
                    </div>
                </div>
                <div class="col-12 mb-4">
                    <div class="card p-3" data-bs-toggle="modal" data-bs-target="#exampleModal" style="border: 1px solid #90807B; background-color: #EFECEC">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"/></svg>
                        </div>
                        <h3>RSVP</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Send Wish</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="form-group mb-3">
                    <label for="" class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="Enter Your Name" v-model="form.name">
                </div>
                <div class="form-group mb-3">
                    <label for="" class="form-label">Message</label>
                    <textarea name="" id="" rows="6" class="form-control" placeholder="Enter Your Message" v-model="form.message"></textarea>
                </div>

                <div class="text-end">
                    <button class="btn btn-success">Send</button>
                </div>
            </div>
        </div>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">RSVP</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group mb-3">
                            <label for="" class="form-label">Full Name</label>
                            <input type="text" class="form-control" placeholder="Enter Your Fullname" v-model="form.name">
                        </div>
                        <div class="form-group mb-3">
                            <label for="" class="form-label">Contact No.</label>
                            <input type="text" class="form-control" placeholder="Enter Your Contact No." v-model="form.cpntact">
                        </div>
                        <div class="form-group mb-3">
                            <label for="" class="form-label">Attendance</label>
                            <select class="form-select form-select-lg mb-3" aria-label="Large select example" v-model="form.attendance">
                                <option selected></option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
            form: {
                name: '',
                contact: '',
                attendace: ''
            }
        }
    }
}
</script>