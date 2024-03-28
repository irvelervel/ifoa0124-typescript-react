import Card from 'react-bootstrap/Card'
import { BookInterface } from '../interfaces/Book'

interface BookProps {
  bookDetails: BookInterface
}

const Book = function (props: BookProps) {
  return (
    <Card className="my-2">
      <Card.Img src={props.bookDetails.imageUrl} />
      <Card.Body>
        <Card.Title>{props.bookDetails.title}</Card.Title>
        <Card.Title>{props.bookDetails.price}</Card.Title>
      </Card.Body>
    </Card>
  )
}

// const Book = function ({ bookDetails }: BookProps) {
//   return (
//     <Card className="my-2">
//       <Card.Img src={bookDetails.imageUrl} />
//       <Card.Body>
//         <Card.Title>{bookDetails.title}</Card.Title>
//         <Card.Title>{bookDetails.price}</Card.Title>
//       </Card.Body>
//     </Card>
//   )
// }

export default Book
