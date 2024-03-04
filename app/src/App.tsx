import Antonio from './assets/pepece.jpg'
import Detto from './assets/detto.jpg'
import Luis from './assets/luis.jpg'
import Tavinho from './assets/tavinho.jpg'
import './App.css'

function App() {
  return (
    <div className='main'>
      <h1>Formação de Quadrilha 🗡🔫</h1>
      <img src={Antonio} height={200} width={200} />
      <img src={Detto} height={200} width={200} />
      <img src={Tavinho} height={200} width={200} />
      <img src={Luis} height={200} width={200} />
    </div>
  )

}

export default App
