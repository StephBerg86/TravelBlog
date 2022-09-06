import React, { useState } from "react";
import { Button, Text } from "../../Constants/OverallStyles";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/3cf3e280-2dff-11ed-9d7d-1fea1503699b";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <Text style={{ fontWeight: 600, marginBottom: "8px" }}>
          Bedankt voor je bericht!
        </Text>
        <Text style={{ fontWeight: 600 }}>
          Ik stuur zo snel mogelijk een antwoord.
        </Text>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input
          style={{
            width: "200px",
            fontFamily: "Montserrat,sans-serif",
            marginBottom: "8px",
          }}
          type="text"
          placeholder="Naam"
          name="name"
          required
        />
      </div>
      <div>
        <input
          style={{
            width: "200px",
            fontFamily: "Montserrat,sans-serif",
            marginBottom: "8px",
          }}
          type="email"
          placeholder="E-mailadres"
          name="email"
          required
        />
      </div>
      <div>
        <textarea
          style={{
            width: "400px",
            height: "100px",
            fontFamily: "Montserrat,sans-serif",
            marginBottom: "8px",
          }}
          placeholder="Type hier jouw bericht"
          name="message"
          required
        />
      </div>
      <div>
        <Button type="submit">Verstuur</Button>
      </div>
    </form>
  );
};

export default ContactForm;
