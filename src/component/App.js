import React from 'react';
import All from './All';
import restCountryApi from '../Api/restCountryApi';
import Header from './Header';
import Search from './Search';

class App extends  React.Component {


  constructor(props){

    super(props);

    this.allCountries = [];
    this.state = {
      countries : []
    }
  }

  componentDidMount = async () => {

    const getAll = await restCountryApi.get('./all');
    this.allCountries = getAll.data;
    this.setState({ countries : getAll.data});
  }

  doSearch = term => {
    const filtererCountries = this.allCountries.filter(country => country.name.includes(term));
    this.setState({
      countries: filtererCountries
    });
  }

  render(){
    return (
      <div className= "container">
          <div>
            < Header/>
          </div>
          <div className="country-info">
            <Search onChangeHandle={this.doSearch} />
          </div>
          <div className="row">
              < All countries={this.state.countries} />
          </div>
      </div>

    );
  }

}

export default App;
