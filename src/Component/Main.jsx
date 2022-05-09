import CardComponent from "./CardComponent";
import UpdateWallet from "../Forms/UpdateWallet";
import AddWallet from "../Forms/AddWallet";
import React from "react";
import { APP_URL } from "../config";
import axios from "axios";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWalletAvailable: false,
      walletInformation: [],
      key:1,
    };
  }
  componentDidMount() {
    this.getWallet();
  }
  getWallet = () => {
    console.log("fiuna;;uyyyyyyyyyy")
    axios
      .get(`${APP_URL}/wallet`)
      .then(async (response) => {
        console.log("resssssssss",response)
        await this.setState({
          isWalletAvailable: true,
          walletInformation: response.data,
          key:this.state.key+1
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  updateWallet = async() => {
    console.log("hello------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.")
    await this.getWallet();
  };
  render() {
    console.log("this.walletInformation",this.state.walletInformation);
    return (
      <div>
        {this.state.isWalletAvailable ? (
          <div key={this.state.key}>
            <CardComponent
              walletInformation={this.state.walletInformation}
              updateWallet={this.updateWallet}
            />
          </div>
        ) : (
          <div className="">
            <AddWallet />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
