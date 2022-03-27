import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/store';
import { Container } from '@material-ui/core/';
import Header from './Components/Header';
import MainRoutes from './MainRoutes';

const App = () => {
  return(
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <MainRoutes />
        </Router>
      </Container> 
    </Provider>
  )
}

export default App;
