import Header from './components/Header/Header'
import Routers from './route/Routers'
import './App.css'

const App = () => {
  return ( 
    <>
      <Header />
      <div className='container'>
        <Routers />
      </div>
    </>
  )
}

export default App
