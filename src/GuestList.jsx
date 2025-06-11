import { useGuest } from "./GuestContext";

export default function GuestList() {
  const { guests, setSelectedGuest } = useGuest();

  return (
    <div>
      <h2>Guest List</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id} onClick={() => setSelectedGuest(guest)}>
            {guest.name}– {guest.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
