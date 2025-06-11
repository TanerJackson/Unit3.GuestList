import { useGuest } from "./GuestContext";

export default function GuestDetails() {
  const { selectedGuest, setSelectedGuest } = useGuest();

  if (!selectedGuest) return null;

  const { name, email, phone, bio, job } = selectedGuest;

  return (
    <div>
      <h2>Guest Details</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Bio: {bio}</p>
      <p>Job: {job}</p>
      <button onClick={() => setSelectedGuest(null)}>Back</button>
    </div>
  );
}
