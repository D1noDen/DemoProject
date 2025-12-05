import VectorOne from './assets/Vector1.png'
import VectorTwo from './assets/Vector2.png'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <div className='relative h-screen w-full'>
      <img src={VectorOne} alt="Vector One" className='absolute' />
      <Header/>
      <img src={VectorTwo} alt="Vector Two" className='absolute right-0 bottom-0' />
    </div>
  )
}

export default App
