import React from 'react';
import All from './All';
import restCountryApi from '../Api/restCountryApi';
import Header from './Header';
import Search from './Search';

class App extends  React.Component {


  constructor(props){

    super(props);

    this.state = {
      countries : []
    }
  }

  componentDidMount = async () => {

    const getAll = await restCountryApi.get('./all');
    this.setState({ countries : getAll.data});
  }

  render(){
    return (
      <div className= "container">
          <div>
            < Header/>
          </div>
          <div class="country-info">
            <Search/>
          </div>
          <div className="row">
              < All countries={this.state.countries} />
          </div>
      </div>
    
    );
  }

}

export default App;
