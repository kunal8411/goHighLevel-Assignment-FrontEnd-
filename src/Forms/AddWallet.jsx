import React from "react";
import UpdateWallet from './UpdateWallet';

class AddWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tAmount: "",
      tMode: "CREDIT",
      addWallet: false,
    };
  }

  submitButton = () => {
  };
  changeTransactionMode = (e) => {
    this.setState({ tMode: e.target.value });
  };
  addtransactionAmount = (e) => {
    this.setState({ tAmount: e.target.value });
  };
  changeFormFlag = () => {
    console.log("hello")
    this.setState({ addWallet: true });
  };

  render() {
    return (
      <div>
        {
          !this.state.addWallet ?(
            <div className="flex items-center justify-center m-24">
          <button
            name="data"
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            onClick={this.changeFormFlag}
          >
            ADD WALLET
          </button>
        </div>
          ):null
        }
        {this.state.addWallet ? (
          <div className="flex items-center justify-center  from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
            <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
              <div className="max-w-md mx-auto space-y-6">
                <form action="">
                  <h2 className="uppercase text-2xl font-bold ">Add Wallet</h2>

                  <hr className="my-6" />
                  <label className="uppercase text-sm font-bold opacity-70">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                    onChange={this.addtransactionAmount}
                    name="tAmount"
                  />

                  <label className="uppercase text-sm font-bold opacity-70">
                    Initial Balance
                  </label>
                  <input
                    type="number"
                    className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                    onChange={this.addtransactionAmount}
                    name="tAmount"
                  />
                  <button
                    name="data"
                    type="button"
                    className={
                      this.state.tAmount?.length > 0
                        ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        : "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                    }
                    onClick={this.submitButton}
                    disabled={this.state.tAmount?.length === 0}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}

      </div>
    );
  }
}

export default AddWallet;
