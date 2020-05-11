import React from 'react';

import '../css/Search.css';

class Search extends React.Component{

    constructor() {
        super();
        this.state = {
            searchText: "",
            countries: []
        };
    }

    onChangeHandle(event) {
      this.props.onChangeHandle(event.target.value);
    }

    render() {
      return (
          <main>
              <section class="search">
                  <form>
                      <input
                          id="country-name"
                          placeholder="Enter your Country"
                          type="text"
                          onChange={event => this.onChangeHandle(event)}
                      />
                  </form>
              </section>

          </main>
      );
    }
}
export default Search;