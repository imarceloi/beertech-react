import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import UsersList from "../Components/UsersList";
import SearchBar from "../Components/SearchBar";
import Title from "../Components/Title";

import IUser from "../Interfaces/IUsers";
import User from "../Repository/User";

import APIService from "../Services/APIService";
import AxiosHandler from "../Services/AxiosHandler";

const apiService = new APIService(new AxiosHandler());

interface IProps {}
interface IState {
  users: User[];
}

export default class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    apiService.getUsers().then((response: IUser) => {
      this.setState({
        users: response.data,
      });
    });
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Title>
            <h1>Beertech Talents - Aula6 React Class Components grupo 3</h1>
          </Title>

          <SearchBar />

          <UsersList users={users}></UsersList>
        </Container>
      </>
    );
  }
}
