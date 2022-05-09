import React, { useState } from "react";

import Card from "./Card";
import UpdateWallet from "../Forms/UpdateWallet";

export default function CardComponent(props) {
  const [updateWalletFlag, setUpdateWalletFlag] = useState(false);
  const setFlag = () => {
    setUpdateWalletFlag(!updateWalletFlag);
  };
  const updateSuccessfully = () => {
    console.log("first steo")
    setUpdateWalletFlag(!updateWalletFlag);
    props.updateWallet();
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col	">
      <Card setFlag={setFlag} walletInformation={props.walletInformation} />
      {updateWalletFlag ? (
        <UpdateWallet
          walletInformation={props.walletInformation}
          updateSuccessfully={updateSuccessfully}
        />
      ) : null}
    </div>
  );
}
