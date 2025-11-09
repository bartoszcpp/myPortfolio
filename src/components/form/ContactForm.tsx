import React from "react"
import HookForm from "./HookForm"

const ContactForm: React.FC = () => {
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    disable,
    messeg,
  } = HookForm()

  return (
    <div className="contact">
      <h3>Skontaktuj się ze mną!</h3>
      <form
        onSubmit={handleSubmit}
        className="form"
        method="POST"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="name"
          placeholder="Imię"
          onChange={handleInputChange}
          value={inputs.name || ""}
          required
          disabled={disable}
        />

        <input
          type="text"
          name="subject"
          placeholder="Temat"
          onChange={handleInputChange}
          value={inputs.subject || ""}
          required
          disabled={disable}
        />
        <input
          type="email"
          name="email"
          placeholder="Adres e-mail"
          onChange={handleInputChange}
          value={inputs.email || ""}
          required
          disabled={disable}
        />
        <textarea
          name="message"
          placeholder="Wiadomość"
          onChange={handleInputChange}
          value={inputs.message || ""}
          required
          disabled={disable}
        ></textarea>
        <div className="buttonSend">
          <button
            type="submit"
            value="wyślij"
            disabled={disable}
            className="submit btn-mod btn-border btn-large"
          >
            WYŚLIJ
          </button>
          <p>{messeg.text}</p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

