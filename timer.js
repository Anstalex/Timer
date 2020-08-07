const displayTime = document.querySelector('.timer')
const btnStart = document.querySelector('.play')
const btnStop = document.querySelector('.reset')
let switcher = true;
let interval;
let start = 0;

function handler(button,event,method){
    button.addEventListener(event,method)
}
function TimerStart(step,speed){
    if(switcher) {
        switcher = false;
        clearInterval(interval);
        interval = setInterval(way, speed);

        function way() {
            start = start + step;
            displayTime.innerHTML = start;
        }
    }
        else{
            switcher = true
        clearInterval(interval);
            displayTime.innerHTML = start;

        }
}
function timerStop(){
    start = 0;
    clearInterval(interval);
    displayTime.innerHTML = '0';
}

handler(btnStart,'click',function (){
    TimerStart(1,1000);
})
handler(btnStop,'click',function () {
    timerStop()
}
);






















/*const Timer = function (play,stop,start,finish){
    function handler(button,event,method){
        button.addEventListener(event,method)
    }
    this.handler(play,'click',)
        this.way = function (){
        }
        function timerStart(){

        }
} */

/*
const timer1 = new Timer({
    container: '.element',
    default: 10,
    step: 10,
    speed: 2,
    stop: 100,
    update(count) {
        console.log(count)
    },
    pause(count){
        console.log('Pause: ' + count)
    },
    start(count){
        console.log('Pause: ' + count)
    }
});

const timer2 = new Timer({
    container: '.element-2',
    default: 0,
    step: 1,
    speed: 1,
    stop: 10
});

const string = 'Nastya ' + 10 //'Nastya 10'
const string2 = `Nastya ${10}`;*/


/*function Alerts(props = {}){
    this.text = props.text || 'none text';
    const self = this;

    this.start = function(){
        console.log(self.text)
    }
}


const alertss = new Alerts();

console.log(alertss)


alertss.start();
*/