import { useState } from "react"
import axios from "axios"

const HookForm = () => {
  const [inputs, setInputs] = useState({})
  const [disable, setDisable] = useState(false)
  const [messeg, setMesseg] = useState({})

  const handleSubmit = event => {
    if (event) {
      event.preventDefault()
      setDisable(true)

      axios({
        method: "POST",
        url: "https://getform.io/f/d9ed422f-e4d4-4ba3-adeb-7426c57d5898",
        data: inputs,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(response => {
          setMesseg({
            success: true,
            text: "Wiadomość została wysłana pomyślnie!",
          })
          setDisable(true)
        })
        .catch(err => {
          setMesseg({
            success: false,
            text: "Wystąpił błąd! Spróbuj później.",
            error: err,
          })
          setDisable(false)
        })
    }
  }
  const handleInputChange = event => {
    event.persist()
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    disable,
    messeg,
  }
}

export default HookForm
