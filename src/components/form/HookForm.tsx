import { useState, FormEvent, ChangeEvent } from "react"
import axios from "axios"

interface FormInputs {
  name?: string
  subject?: string
  email?: string
  message?: string
}

interface FormMessage {
  success?: boolean
  text?: string
  error?: unknown
}

interface UseFormReturn {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  handleInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  inputs: FormInputs
  disable: boolean
  messeg: FormMessage
}

const HookForm = (): UseFormReturn => {
  const [inputs, setInputs] = useState<FormInputs>({})
  const [disable, setDisable] = useState<boolean>(false)
  const [messeg, setMesseg] = useState<FormMessage>({})

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
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
        .then(() => {
          setMesseg({
            success: true,
            text: "Wiadomość została wysłana pomyślnie!",
          })
          setDisable(true)
        })
        .catch((err) => {
          setMesseg({
            success: false,
            text: "Wystąpił błąd! Spróbuj później.",
            error: err,
          })
          setDisable(false)
        })
    }
  }
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const target = event.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [target.name]: target.value,
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

