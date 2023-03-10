import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Error from './Error';
import CardComponent from './CardComponent';

const FormComponent = () => {
    const [name, setName] = React.useState('')
    const [weekend, setWeekend] = React.useState('')
    const [age, setAge] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const [successMessageObject, setSuccessMessageObject] = React.useState({})

    const hasWhiteSpace = (str) => {
        return (/\s/).test(str);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setErrorMessage('')

            const conditions = [name.length < 3, hasWhiteSpace(name), weekend.length < 6]
            const atLeastOneConditionItsTrue = conditions.some(condition => condition)

            setIsLoading(false)
            if (atLeastOneConditionItsTrue) {
                setErrorMessage('Por favor chequea que la información sea correcta.')
            } else {
                setErrorMessage('')
                setSuccessMessageObject({
                    name,
                    weekend,
                    age
                })
            }
        }, 1200);
    }

    return (
        <>
            {errorMessage && <Error errorMessage={errorMessage} />}
            {successMessageObject?.hasOwnProperty('name') && successMessageObject?.hasOwnProperty('weekend') ? <CardComponent successMessageObject={successMessageObject} />
                : (
                    <Form className='d-flex flex-column gap-3' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label id='name'>Escribe tu nombre o un apodo.</Form.Label>
                            <Form.Control type="text" placeholder="Por ejemplo Eli" onChange={
                                (e) => setName(e.target.value)
                            } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="weekend">
                            <Form.Label id='weekend'>Describe un fin de semana típico para ti.</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={
                                (e) => setWeekend(e.target.value)
                            } />
                        </Form.Group>
                        <Form.Select aria-label="age" onChange={
                            (e) => setAge(e.target.value)
                        }>
                            <option>Elige un rango de edad</option>
                            <option value="0-14">Entre 0 y 14 años</option>
                            <option value="15-25">Entre 15 y 25 años</option>
                            <option value="26-35">Entre 26 y 35 años</option>
                            <option value="36-45">Entre 36 y 45 años</option>
                            <option value="46-55">Entre 46 y 55 años</option>
                        </Form.Select>
                        <Button
                            style={{ width: '189.31px' }}
                            variant="outline-primary"
                            type="submit"
                            className='align-self-center'
                            disabled={isLoading}
                        >
                            {isLoading ? 'Cargando...' : 'Enviar respuestas'}
                        </Button>
                    </Form>
                )}
        </>
    )
}

export default FormComponent