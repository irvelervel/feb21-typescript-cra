import './App.css'
import Header from './components/Header'
import DetailComponent from './components/DetailComponent'

import data from './data/data.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Title passed from App" subTitle="show this only if present" />
        <Header title="another one" />
        <DetailComponent data={data} />
      </header>
    </div>
  )
}

export default App
