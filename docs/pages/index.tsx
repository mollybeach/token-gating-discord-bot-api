import { ConnectButton, useActiveAccount, ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

console.log('Client ID:', process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID);


const Home: NextPage = () => {
  // Move client creation inside the component
  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
    secretKey: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY as string
  });

  return (
    <ThirdwebProvider>
      <div>Connect to Discord Community</div>
      <div className={styles.container}>
        <ConnectButton client={client} />
        <HomeContent />
      </div>
    </ThirdwebProvider>
  );
};

// Move the content to a separate component to use the hook
function HomeContent() {
  const account = useActiveAccount();

  async function requestGrantRole() {
    try {
      if (!account) return;
      
      const response = await fetch("api/grant-role", {
        method: "POST",
        body: JSON.stringify({
          address: account.address
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      {account && (
        <div className={styles.collectionContainer}>
          <button className={styles.mainButton} onClick={requestGrantRole}>
            Give me the role!
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
