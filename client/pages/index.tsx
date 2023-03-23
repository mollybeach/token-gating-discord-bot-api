import { useAddress, useSDK } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import SignIn from "../components/SignIn";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress(); // Get the user's address
  const { data: session } = useSession(); // Get the user's session which contains the user's address
  const sdk = useSDK(); // Get the Thirdweb SDK

  async function requestGrantRole() {
    // First, login and sign a message
    const loginPayload = await sdk?.auth.login("http://localhost:3000"); // This will open a modal to login and sign a message
    // Then make a request to our API endpoint.
    try {
      const response = await fetch("api/grant-role", {
        method: "POST",
        body: JSON.stringify({
          loginPayload // This is the payload you got from the login step,
        }),
      });

      const data = await response.json();
      console.log('data');
      console.log(data);
      // have the alert read the console and format the message
      (function() {
        var exLog = console.log;
        console.log = function(msg) {
            // @ts-ignore
            exLog.apply(this, arguments);
            msg = JSON.stringify(msg, null, 4);
            // remove the first and last characters
            msg = msg.substring(18, msg.length - 3);
            alert(msg);
        }
    })();
    console.log(data);
      //alert("Check the console for the response!"); 
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <div className={styles.container} style={{ marginTop: 0 }}>
        <SignIn />
        {address && session && (
          <div className={styles.collectionContainer}>
            <button className={styles.mainButton} onClick={requestGrantRole}>
              Give me the role!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
