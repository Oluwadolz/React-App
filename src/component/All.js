import React from 'react';
import '../css/All.css';
import  Search  from './Search';

class All extends  React.Component {

    constructor(props) {
        super(props);
    }

    renderAll(props){
        const showAllList = this.props.countries.map((country) => {

            return (
                <tr key={country.altSpellings}>
                    <td>{country.name}</td>
                    <td>{country.alpha3Code}</td>
                    <td>{country.callingCodes}</td>
                    <td>{country.capital}</td>
                    <td>{country.region}</td>
                    <td>{country.population}</td>
                    <td><img src={country.flag}/></td>
                </tr>
            );

        });

        return showAllList;
    }

    render (){
        return (
            <div className="form-group">
              <table className="table">
                  <thead>
                      <tr>
                        <td>Name</td>
                        <td>Alpha-3-Code</td>
                        <td>Calling-code</td>
                        <td>Capital</td>
                        <td>Region</td>
                        <td>Population</td>
                        <td>Flag</td>
                      </tr>
                  </thead>
                  <tbody>
                      {this.renderAll()}
                  </tbody>
              </table>
            </div>
    
          );
    }
}

export default All;