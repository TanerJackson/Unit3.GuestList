import { useGuest } from "./GuestContext";
import GuestList from "./GuestList";
import GuestDetails from "./GuestDetails";

function MainContent() {
  const { selectedGuest } = useGuest();
  return selectedGuest ? <GuestDetails /> : <GuestList />;
}

export default function App() {
  return (
    <>
      <h1>Event Guests</h1>
      <MainContent />
    </>
  );
}
