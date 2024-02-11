import Form from "./components/Form"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <main className="d-flex align-items-center text-center">
      <div className="container">
        <h1 className="mb-5">Movie Search</h1>
        <Form/>
      </div>
    </main>
  )
}

export default App