import React, { useState } from "react";
import "@snowpak/react-credit-cards/es/styles-compiled.css";
import Cards from "@snowpak/react-credit-cards";

export const CreditCards = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        alignItems: "center",
      }}
    >
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />

      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <input
          className="form-control"
          type="tel"
          name="number"
          maxLength={16}
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <div style={{ display: "flex", gap: "20px" }}>
          <input
            className="form-control"
            type="text"
            name="expiry"
            maxLength={4}
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />

          <input
            className="form-control"
            type="tel"
            name="cvc"
            maxLength={3}
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
      </form>
    </div>
  );
};
