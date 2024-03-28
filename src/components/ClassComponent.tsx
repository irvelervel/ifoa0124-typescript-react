import { Component } from 'react'

interface ClassComponentProps {
  customTitle: string
  subTitle?: string
}

interface ClassComponentState {
  myName: string
  obj: null | { ciao: boolean }
}

// forniamo la nostra interfaccia delle PROPS al componente a classe sovrascrivendo il PRIMO GENERIC di Component,
// quello che internamente viene chiamato P (e che di default è un'interfaccia vuota)
class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state: ClassComponentState = {
    myName: 'Stefano',
    obj: null,
  }

  render() {
    return (
      <div>
        <h1>{this.props.customTitle}</h1>
        <h3>
          {this.props.subTitle
            ? this.props.subTitle.toLowerCase()
            : 'Sottotitolo di default'}
        </h3>
        <p>{this.state.myName}</p>
      </div>
    )
  }
}

export default ClassComponent
