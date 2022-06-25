
import './App.css';
import Register from './pages/auth/Register';
import { Router, Route, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  return (
    <Router history={history}>
      <Route exact path="/" component={Register} />
    </Router>
    
  );
}

export default App;
