import './App.css';
import { Container, Card, Row, Col } from 'react-bootstrap'
import Search from './Containers/Search/Search'

function App() {
  
  return (
    <div className="App">
    <Container className="p-3">
  
      <p className="header">Si tout se passe bien ici je devrai pouvoir afficher un element de openfoodfact</p>
      <Search>

      </Search>
    
  </Container>
    </div>
  );
}

export default App;
