
import './App.css'
import { Alert, Button, Container } from 'react-bootstrap'

function App() {

  return (
    <>
     <Container className="mt-5">
      <Alert variant="success">React Bootstrap is working!</Alert>
      <Button variant="primary">Click Me</Button>
    </Container>
    </>
  )
}

export default App
