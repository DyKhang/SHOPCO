import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contexts/MyContext";

class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left login-block">
          {this.context.token === "" ? (
            <div>
              <Link to="/login">Login</Link> | <Link to="/signup">Sign-up</Link>{" "}
              | <Link to="/active">Active</Link>
            </div>
          ) : (
            <div>
              Hello <b>{this.context.customer.name}</b> |{" "}
              <Link to="/home" onClick={() => this.lnkLogoutClick()}>
                Logout
              </Link>{" "}
              | | <Link to="/myorders">My orders</Link>
            </div>
          )}
        </div>
        <div className="float-right">
          | have <b>{this.context.mycart.length}</b> items
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken("");
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;
