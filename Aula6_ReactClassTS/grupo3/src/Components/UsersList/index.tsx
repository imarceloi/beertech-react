import React, { Component } from "react";
import User from "../../Repository/User";
import UserComponent from "../../Components/User";
import { Grid } from "@material-ui/core";

interface IProps {
  users: User[];
}

export default class UsersList extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <Grid container justify="flex-start" spacing={2}>
        {this.props.users.length ? (
          this.props.users.map((user) => (
            <Grid key={user.id} item xs={12} sm={6} md={4}>
              <UserComponent key={user.id} userData={user} />
            </Grid>
          ))
        ) : (
          <h2>Nenhum usuário encontrado</h2>
        )}
      </Grid>
    );
  }
}
