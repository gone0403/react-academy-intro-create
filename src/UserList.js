import React from 'react';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  handleOnChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div>
        {this.state.searchTerm}
        <form>
          <input
            placeholder="Busca entre los usuarios"
            onChange={this.handleOnChange}
          />
        </form>
        <h4>{this.props.users[0].name}</h4>
        <h4>{this.props.users[1].name}</h4>
        <h4>{this.props.users[2].name}</h4>
      </div>
    );
  }
}

export default UserList;
