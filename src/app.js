import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
 
// const notify = Notifyer.notify({
//   title: "Hora do Post",
//   body: "Crie algum conteúdo para ajudar a comunidade"
// })


const App = {
  async start() {
    try {
    
    
    
      Timer.init()
    } catch (err) {
      console.log(err.message)
    }
  }
}

export { App }