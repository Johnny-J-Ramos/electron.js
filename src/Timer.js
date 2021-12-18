import { App } from './App.js';
import { View } from './View.js';

const Timer = {
   time: 60 * 60,
   currentTime: 0,  //hora atual
   interval: null,

   timeToMinutes: time => Math.floor(time/ 60),
   timeToSeconds: time => time % 60,


   formatTime: time => String(time).padStart(2, '0'),
   
   init(time) {
      Timer.time = time || Timer.time,
      Timer.currentTime = Timer.time,
      Timer.interval = setInterval(Timer.countdowm, 1000)
   },

   countdowm() {
      Timer.currentTime = Timer.currentTime -1 

      const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
      const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))

      View.render({
         minutes,
         seconds
      })

      if(Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      Emitter.emit('conuntdwn-end')
      return; 
      
     }
  }
}

export { Timer }

