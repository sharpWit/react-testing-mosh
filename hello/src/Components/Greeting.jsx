import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GusetGreeting";

export default function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}
