import { useState } from 'react'
import Button from 'react-bootstrap/Button'

// di default un componente a funzione NON si aspetta nessuna prop!
// dobbiamo informare FunctionalComponent che riceverà una o più prop...

// dobbiamo tipizzare l'oggetto PROPS
interface FunctionalComponentProps {
  customTitle: string
  handleClick: () => void // una funzione che torna void
}

const FunctionalComponent = function (props: FunctionalComponentProps) {
  const [myName, setMyName] = useState('Stefano')

  const [obj, setObj] = useState<null | { ciao: boolean }>(null)
  // sto andando a personalizzare il TIPO di obj (evitando che TS lo intuisca automaticamente dal valore iniziale,
  // cioè null) andando a specificare un tipo tramite un GENERIC allo useState: in questo modo specifico che il TIPO
  // ammesso per obj è l'UNIONE di null e un oggetto con dentro una proprietà booleana chiamata "ciao"

  return (
    <div>
      <h1 onClick={props.handleClick}>{props.customTitle.toLowerCase()}</h1>
      <h3>Mi chiamo: {myName}</h3>
      <Button variant="secondary" onClick={() => setObj({ ciao: true })}>
        CLICCAMI
      </Button>
    </div>
  )
}

export default FunctionalComponent

// oppure, se vi piace destrutturare gli oggetti delle props...
// const FunctionalComponent = function ({customTitle}: FunctionalComponentProps) {
//     return (
//       <div>
//         <h1>{customTitle.toLowerCase()}</h1>
//         <h3>Sottotitolo</h3>
//       </div>
//     )
//   }
