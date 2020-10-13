import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import './style.scss'
interface IProps {
  searchUser: Function;
}

interface IState {
  query: string;
}

export default class SearchBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      query: ''
    }
  }

  handleSetQuery = (event: any) => {
    const { value } = event.target;

    this.setState({
      query: value
    })

    this.props.searchUser(value);
  }

  render() {
    const { query } = this.state;

    return (
      <TextField
        size="medium"
        id="outlined-basic"
        label="Buscar Usuário"
        variant="outlined"
        onChange={this.handleSetQuery}
        value={query}
      />
    );
  }
}
