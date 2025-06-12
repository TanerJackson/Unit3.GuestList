import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const GuestContext = createContext(null);

export function GuestProvider({ children }) {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch(
          "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-et-web-ft/guests"
        );
        const data = await response.json();
        setGuests(data.data);
      } catch (error) {
        console.error("Failed to fetch guests:", error);
      }
    };

    fetchGuests();
  }, []);

  return (
    <GuestContext.Provider
      value={{ guests, setGuests, selectedGuest, setSelectedGuest }}
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
