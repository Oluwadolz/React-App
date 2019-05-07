import React from 'react';

class Search extends React.Component{
     
    constructor() {
        super();
        this.state = {
            searchText: "",
            countries: []
        };
    }
    onChangeHandle(event) {
        this.setState({ searchText: event.target.value });
    }





render() {
     this.props.countries.filter(
         (country) => {
             return country.name.indexOf(this.state.searchText) !== -1;
         }
     );
    return (
        <main>
            <section class="search">
                <form>
                    <input 
                        id="country-name" 
                        placeholder="Enter your Country" 
                        type="text" 
                        onChange={event => this.onChangeHandle(event)}
                        value={this.state.searchText}
                    />
                </form>
            </section>
    
        </main>
    );
}
}
export default Search;