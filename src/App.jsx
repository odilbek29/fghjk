
import './App.css'
import Card from './components/Card/Card'
import data from '../public/data'

function App() {
  return (
    <div className='container'>
      <h2>Users</h2>
    <div className="ota">
         {data.map((odam,i)=>{
          return  <Card key={i} ism={odam.name} kasb={odam.position} ></Card>
        })}
    </div>
        

       
 
    </div>
  )
}

export default App
