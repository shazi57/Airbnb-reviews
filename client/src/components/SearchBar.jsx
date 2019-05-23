class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  // <SearchBar original_data={this.state.original_data} 
  //           showSearchResult={this.showSearchResult}
  //           editSearchText={this.editSearchText} 
  //           dataSlicer={this.dataSlicer.bind(this)}
  //           search_text={this.state.search_text}
  //           clearSearchText={this.clearSearchText}/>


  submitSearch(e) {
    e.preventDefault();
    let res = [];
    const data = this.props.original_data;
    const search_text = this.props.search_text;
    //edge case: if search_text is empty
    if (search_text === '') {
      this.props.dataSlicer(data);
      return;
    }
    data.forEach((item) => {
      let words = item.sentence.split(/\b/);
      if(words.indexOf(search_text) >= 0) {
        res.push(item);
      }
    });
    this.props.dataSlicer(res);
  }

  render() {
    if(this.props.search_text.length === 0) {
      return (
        <span className="searchBar">
          <span>
            <form onSubmit={this.submitSearch.bind(this)}>
              <input className="searchTextArea" type="text" id="searchTextArea" placeholder="Search reviews" onChange={this.props.editSearchText}></input>
            </form>
          </span>
        </span>
      )
    } else {
      //show cancellation button while the text bar in not empty
      return (
        <span className="searchBar">
          <span>
            <form onSubmit={this.submitSearch.bind(this)}>
              <input className="searchTextArea" type="text" id="searchTextArea" placeholder="Search reviews" onChange={this.props.editSearchText}></input>
            </form>
          </span>
          <button className="cancelSearchButton" onClick={this.props.clearSearchText}>X</button>
        </span>
      )
    }
  }
}

export default SearchBar;