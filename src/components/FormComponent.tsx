import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FormEvent, useEffect, useState } from 'react'

const initialFormValue = {
  largeText: '',
  normalText: '',
  smallText: '',
}

const FormComponent = function () {
  const [formValues, setFormValues] = useState(initialFormValue)
  // questa volta il valore iniziale rispetta perfettamente la forma che avrà quest'oggetto

  const handleSubmit = function (e: FormEvent) {
    e.preventDefault()
    console.log('FORM INVIATO', formValues)
  }

  useEffect(() => {
    console.log('COME COMPONENTDIDMOUNT')
  }, [])

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Large text"
          value={formValues.largeText}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              largeText: e.target.value,
            })
          }}
        />
      </div>
      <div className="my-2">
        <Form.Control
          type="text"
          placeholder="Normal text"
          value={formValues.normalText}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              normalText: e.target.value,
            })
          }}
        />
      </div>
      <div>
        <Form.Control
          size="sm"
          type="text"
          placeholder="Small text"
          value={formValues.smallText}
          onChange={(e) => {
            setFormValues({
              ...formValues,
              smallText: e.target.value,
            })
          }}
        />
      </div>
      <Button type="submit">INVIA</Button>
    </Form>
  )
}
export default FormComponent
