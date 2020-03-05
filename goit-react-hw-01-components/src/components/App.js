import React from "react";
import Profile from "./profile/Profile.js";
import user from "./profile/user.json";
import Statistics from "./statisticalData/Statistics";
import FriendList from "./friendlist/FriendList.js";
import HistoryTransaction  from "./historyTransaction/HistoryTransaction.js";
import friends from "./friendlist/friendlist.json";
import statisticalData from "./statisticalData/statistical-data.json";
import transaction from "./historyTransaction/historyTransaction.json";

const App = () => (
  <>

     <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />
     <FriendList friends={friends} /> 
     <HistoryTransaction transaction={transaction} />


  </>
);

export default App;
