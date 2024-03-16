import Profile from "./components/Profile/Profile";
import profile from "./data/profile.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import "./App.css";

function App() {
  return (
    <div>
      <Profile
        name={profile.username}
        tag={profile.tag}
        location={profile.location}
        image={profile.avatar}
        status={profile.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
