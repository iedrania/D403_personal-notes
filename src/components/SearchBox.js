import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    }
  
    this.onQueryChangeEventHandler = this.onQueryChangeEventHandler.bind(this);
  }
  
  onQueryChangeEventHandler(event) {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input placeholder='Cari catatan...' onChange={this.onQueryChangeEventHandler} />
    );
  }
}

export default SearchBox;
