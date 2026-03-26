import { useState } from "react"; 

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Unexpected error occurred.");
        }
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(err => {
        alert("Failed to connect to server.");
        console.error(err);
      });
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;