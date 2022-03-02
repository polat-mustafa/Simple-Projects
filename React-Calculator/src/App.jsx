import Body from './components/Body'
import { CalculatorProvider } from './context/Body'

function App() {


  return (
    <CalculatorProvider>
      <div className="App">
        <h1 className='mt-5 mb-3' style={{ fontSize: "4rem", fontFamily: "monospace", borderBottom: "1px solid white", display: "inline-block", color: "White" }} >Calculator</h1>
        <Body />
      </div>
    </CalculatorProvider >
  )
}

export default App