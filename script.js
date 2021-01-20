let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let timeDOM = document.querySelector('#timer')

let clock = new Timer()
console.log(clock)
// STEP 3: Create an object from the timer class

function updateTime(){
   // update the time DOM here
   // console.log('Here')

   timeDOM.innerHTML = clock.time
   console.log('Update method', clock.time)
}


startBtn.addEventListener('click', () => {
    // Call the timer start method
    clock.start(updateTime)

})


stopBtn.addEventListener('click', () => {
    clock.stop()
})