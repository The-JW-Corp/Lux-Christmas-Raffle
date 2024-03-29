import React from "react";
import "./MintPage.css";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const MintPage = ({
  isMintOn,
  mintPrice,
  handleNumberChange,
  number,
  mint,
  mintPriceInETH,
  handleConnectWallet,
  accounts,
  isConnect,
}) => {
  return (
    <>
      <div className="mint-selector">
        <div className="text-mint-container">
          <p>
            {isMintOn ? (
              <span>
                The Christmas sale is open! Discover the project by{" "}
                <a
                  href="https://luxresorts-nft.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  clicking here
                </a>
              </span>
            ) : (
              <span>
                The Christmas sale is open! Discover the project by{" "}
                <a
                  href="https://luxresorts-nft.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  clicking here
                </a>
              </span>
            )}
          </p>
          <p>The price of the collectible is 0,765 ETH $1000 ~ $1070</p>
        </div>
        {isConnect ? (
          ""
        ) : (
          <button
            className="button-28 mintpage-connect-button"
            onClick={handleConnectWallet}
          >
            Connect wallet
          </button>
        )}
        {isMintOn && (
          <>
            <div className="select-mint">
              <select
                className="button-28 button-select"
                onChange={handleNumberChange}
                value={number}
              >
                <option value="0">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <span>
                <button className="button-28" rol="button" onClick={mint}>
                  MINT
                </button>
              </span>
            </div>
            <span className="mint-ou">OR</span>
          </>
        )}
        <CrossmintPayButton
          className="crossmint-button"
          clientId="f2336d13-f3d3-4cbe-a8ab-36fd702742c0"
          mintConfig={{
            type: "erc-721",
            totalPrice: "0.765",
            _quantity: "1",
          }}
        />
        <div>
          Need help ? Contact our 
           <a href="https://wa.me/message/JQNMP7NMPCB3H1" target="_blank">WhatsApp hotline</a> a
          member of our team will help you!
        </div>
      </div>
    </>
  );
};
export default MintPage;
