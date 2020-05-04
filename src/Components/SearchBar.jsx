import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ searchterm: e.target.value });
    console.log(e.target.value);
  }
  handlesubmit(e) {
    const { searchterm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchterm);
    e.preventDefault();
  }
  render() {
    return (
      <div className="search-section">
        <form onSubmit={this.handlesubmit}>
          <label className="search-label"></label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder="Search for videos"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
