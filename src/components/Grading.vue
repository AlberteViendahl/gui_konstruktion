<script lang="js">
    export default {
        name: 'Grading',

        props: {
            grading: {
                type: String,
                required: true,
                default: 'A'
            }
        }
    }
</script>

<template>

<!-- Button trigger modal -->
<button type="button" class="custom-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <div class="grade-container">

        <div class="circle">
            <p>{{ grading }}</p>
        </div>

        <div class="question-mark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"/>
            </svg>
        </div>
    </div>
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
            <div class="card">
                <div class="card-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle warning-icon" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                        </svg>
                        <p>Kvalitetssikring</p>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p>Vi har klassificeret hvert parti med en A, B eller C-Grade baseret på en visuel inspektion af stand, mål og mængde.</p>
                    <p>Partier fra private sælgere er vurderet ud fra billeddokumentation og sælgers oplysninger. 
                        For den højeste garanti, se efter A-Grade materialer.</p>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

    .custom-btn {
        background-color: transparent;
        border: none;
    }

    .grade-container {
        position: relative;

        .circle {
            border: 1px solid black;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                padding: 0px;
                margin: 0px;
            }
        }

        .question-mark {
            position: absolute;
            bottom: 25px;
            left: 25px;
        }

    }

    .card {
        background-color: #FBF7EF;

        .card-header {
            display: flex;
            align-items: center;

            p {
                margin: 0px 0px 0px 5px;
                padding: 0px;
                color: #A64B2A;

             }

             .warning-icon {
                fill: #A64B2A;
            }
        }
        
        .card-body {
            p {
                font-size: 16px;
            }
        }
    }

</style>