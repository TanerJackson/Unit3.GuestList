import { createContext, useContext, useState } from "react";

// Sample data (could come from API later)
const initialGuests = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "123-456-7890",
    bio: "Loves events and meeting new people.",
    job: "Event Planner",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "987-654-3210",
    bio: "Coffee enthusiast and avid hiker.",
    job: "Software Engineer",
  },
];

const GuestContext = createContext(null);

export function GuestProvider({ children }) {
  const [guests, setGuests] = useState(initialGuests);
  const [selectedGuest, setSelectedGuest] = useState(null);

  return (
    <GuestContext.Provider
      value={{
        guests,
        setGuests,
        selectedGuest,
        setSelectedGuest,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
}

export function useGuest() {
  const context = useContext(GuestContext);
  if (!context) throw new Error("useGuest must be used inside GuestProvider");
  return context;
}
