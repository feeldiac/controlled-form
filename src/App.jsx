import FormComponent from './components/FormComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-xl d-flex flex-column m-auto" style={{ fontFamily: "Outfit, sans- serif" }}>
      <h1 className='text-primary fw-bold text-center mt-4'>Cuestionario de Hobbies</h1>
      <FormComponent />
    </div>
  )
}

export default App
