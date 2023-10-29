import { Component } from 'react';
import Search from '../components/Search';
import Cards from '../components/Cards';

class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        <Cards />
      </div>
    );
  }
}

export default Home;
