<template>
    <div style="background-color: #EFECEC; height: 100vh">
        <div class="row mx-0 my-0">
            <div class="card py-4" style="border-radius: 0; border: none; background-color: #EFECEC">
                <div class="col-12 d-flex justify-content-center mb-3">
                    <div class="col-11">
                        <h3 class="mb-3" style="color: #624A44">Configuration</h3>
                        <div class="row mx-0 bg-danger justify-content-between px-0">
                            <div class="col-6 col-md-auto mx-0 px-0">
                                <div class="card text-center p-4" style="border-radius: 0;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <div class="mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21q-.825 0-1.413-.588T1 19V6.5h2V19h16.5v2H3Zm4-4q-.825 0-1.413-.588T5 15V5q0-.825.588-1.413T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.588 1.413T21 17H7Zm7-4.7l7-4.875V5l-7 4.85L7 5v2.425l7 4.875Z"/></svg>
                                    </div>
                                    <h3>test</h3>
                                </div>
                            </div>
                            <div class="col-6 col-md-auto mx-0 px-0">
                                <div class="card text-center p-4" style="border-radius: 0;">
                                    <div class="mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21q-.825 0-1.413-.588T1 19V6.5h2V19h16.5v2H3Zm4-4q-.825 0-1.413-.588T5 15V5q0-.825.588-1.413T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.588 1.413T21 17H7Zm7-4.7l7-4.875V5l-7 4.85L7 5v2.425l7 4.875Z"/></svg>
                                    </div>
                                    <h3>test</h3>
                                </div>
                            </div>
                            <div class="col-6 col-md-auto mx-0 px-0">
                                <div class="card text-center p-4" style="border-radius: 0;">
                                    <div class="mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21q-.825 0-1.413-.588T1 19V6.5h2V19h16.5v2H3Zm4-4q-.825 0-1.413-.588T5 15V5q0-.825.588-1.413T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.588 1.413T21 17H7Zm7-4.7l7-4.875V5l-7 4.85L7 5v2.425l7 4.875Z"/></svg>
                                    </div>
                                    <h3>test</h3>
                                </div>
                            </div>
                            <div class="col-6 col-md-auto mx-0 px-0">
                                <div class="card text-center p-4" style="border-radius: 0;">
                                    <div class="mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21q-.825 0-1.413-.588T1 19V6.5h2V19h16.5v2H3Zm4-4q-.825 0-1.413-.588T5 15V5q0-.825.588-1.413T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.588 1.413T21 17H7Zm7-4.7l7-4.875V5l-7 4.85L7 5v2.425l7 4.875Z"/></svg>
                                    </div>
                                    <h3>test</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            ...
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