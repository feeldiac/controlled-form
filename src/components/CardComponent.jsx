import React from 'react'
import Card from 'react-bootstrap/Card'

const CardComponent = ({ successMessageObject }) => {
    const { name, weekend, age } = successMessageObject
    return (
        <div className='d-flex justify-content-center align-items-center mt-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Gracias por participar</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Tu respuesta nos ayuda a conocerte mejor</Card.Subtitle>
                    <Card.Text>
                        ¡{name}! <br />
                        Tu fin de semana típico consiste en: <br />
                        {weekend} <br />
                        <span className='fst-italic'>Esto nos ayuda a identificar mejor tu personalidad.</span>
                    </Card.Text>
                    <Card.Link href="https://www.hobbies.co.uk/" className='text-end'>Visítanos</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardComponent