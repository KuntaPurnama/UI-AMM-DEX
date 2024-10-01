import { ConnectButton } from "web3uikit";

export default function NavigationBar() {
  return (
    <div className="flex justify-between">
      <div>
        <a className="">Swap</a>
        <a className="">Pool</a>
        <a className="">Token</a>
      </div>
      <div>
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  );
}
