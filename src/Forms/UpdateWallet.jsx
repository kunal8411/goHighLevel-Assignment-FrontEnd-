import React from "react";
import axios from "axios";
import { APP_URL } from "../config";
class UpdateWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tAmount: "",
      tMode: "CREDIT",
      tDescription: "",
    };
  }

  submitButton = async () => {
    let payload = {
      amount: this.state.tAmount,
      type: this.state.tMode,
      description: this.state.tDescription,
    };
    await axios
      .post(
        `${APP_URL}/transact/${this.props.walletInformation[0]._id}`,
        payload
      )
      .then((res) =>
        this.setState({ tAmount: "", tMode: "CREDIT", tDescription: "" })
      )
      .catch((err) => console.log(err.message));
   await this.props.updateSuccessfully();
  };
  changeTransactionMode = (e) => {
    this.setState({ tMode: e.target.value });
  };
  addDescription = (e) => {
    this.setState({ tDescription: e.target.value });
  };
  addtransactionAmount = (e) => {
    this.setState({ tAmount: e.target.value });
  };

  render() {
    return (
      <div className="flex items-center justify-center  from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
        <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
          <div className="max-w-md mx-auto space-y-6">
            <form action="">
              <h2 className="text-2xl font-bold ">Submit your application</h2>

              <hr className="my-6" />
              <label className="uppercase text-sm font-bold opacity-70">
                Transaction Amount
              </label>
              <input
                type="number"
                className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                onChange={this.addtransactionAmount}
                name="tAmount"
              />
              <label className="uppercase text-sm font-bold opacity-70">
                Description
              </label>
              <input
                type="text"
                className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                onChange={this.addDescription}
                name="tDescription"
              />

              <label className="uppercase text-sm font-bold opacity-70">
                Transaction Mode
              </label>
              <select
                className="w-full p-3 mt-2 mb-4  bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
                onChange={this.changeTransactionMode}
                name="tMode"
              >
                <option value="credit">CREDIT</option>
                <option value="debit">DEBIT</option>
              </select>
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
                SAVE
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateWallet;
