import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  Divider,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import IUser from "../../Repository/User";
import { getFirstLetter } from "../../Utils/Utils";

interface IProps {
  userData: IUser;
}

export default class User extends Component<IProps, {}> {
  render() {
    const { userData } = this.props;
    return (
      <Card key={userData.id}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">{getFirstLetter(userData.name)}</Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={userData.name}
          subheader={userData.email}
        />
        <CardContent>
          <Typography variant="subtitle2" component="p">
            User Id - <b>{userData.id}</b>
          </Typography>
          <Divider />
          <Typography variant="subtitle2" component="p">
            User Address
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {userData.address.street}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {userData.address.suite}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {userData.address.city}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {userData.address.zipcode}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
