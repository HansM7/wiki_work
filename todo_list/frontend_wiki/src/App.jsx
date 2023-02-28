import Routing from "./AppRouting/Routing"
import Footer from "./containers/Footer"
import Task from "./containers/Task"


function App() {
  return (
    <div className="App">
      <Routing>
        <Task></Task>
        
        <Footer></Footer>

      </Routing>
    </div>
  )
}

export default App
