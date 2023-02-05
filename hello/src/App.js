import "./UserList.css";
import UserList from "./Components/UserList";
const users = [1, 2, 3, 4];

function App() {
  return (
    <>
      <UserList users={users} />
    </>
  );
}
export default App;
