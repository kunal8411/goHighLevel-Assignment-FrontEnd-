import React from "react";
import UpdateWallet from "../Forms/UpdateWallet";
import Transactiontable from "./Transactiontable";
import moment from "moment";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTransTable: false,
    };
  }
  showTransactionTable = () => {
    this.setState({isTransTable:!this.state.isTransTable})
  };
  render() {
    return this.props.walletInformation.map((wallet, index) => {
      return (
        <div>
          <div class="card bg-[#15263F] w-80 h-[32rem] rounded-xl p-6 space-y-4 ">
            <a href="#">
              <img
                class="w-full h-64 rounded-md transition hover:bg-cyan-300"
                src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </a>
            <div id="description" class="space-y-4">
              <a href="#">
                <h2 class="text-white font-semibold text-xl transition hover:text-cyan-300">
                  {wallet.name}
                </h2>
              </a>
              <p class="text-slate-500 text-sm select-none">
                It is a digital wallet that helps you to perform cashless
                transactions
              </p>
              <div class="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
                <span
                  id="price"
                  class="text-cyan-300 flex justify-between items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-1"
                    viewBox="0 0 320 512"
                    fill="#67E7F9"
                  >
                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                  </svg>
                  {wallet.balance} $
                </span>
                <span class="text-slate-500 flex justify-between items-center select-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {moment(wallet.createdAt).fromNow()}
                  {/* 3 days left */}
                </span>
              </div>
              <div class="flex text-sm items-center">
                <button
                  class="ml-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded flex items-center justify-center"
                  onClick={this.props.setFlag}
                >
                  Update Wallet
                </button>
                <button
                  class="ml-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded flex items-center justify-center"
                  onClick={this.showTransactionTable}
                >
                  Transaction History
                </button>
              </div>
            </div>
          </div>
          {this.state.isTransTable ? <Transactiontable /> : null}
        </div>
      );
    });
  }
}

export default Card;
