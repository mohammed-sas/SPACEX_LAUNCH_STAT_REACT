import spacex from './spacex.jpeg'
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri : '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={spacex} alt="SpaceX" style={{width: 300,display:'block',margin : 'auto'}} />
          <Route exact path='/' component={Launches}/>
          <Route exact path='/launch/:flight_number' component={Launch} />

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
