import { useState } from "react";
import { Form, Button, Spinner } from 'react-bootstrap'

export default function Search () {
    const [product, setProduct] = useState('');

    const handleChange = (event) => {
        setProduct(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(product)
    };

    const searchBar = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Veuillez entrer votre code barre</Form.Label>
                    <Form.Control type='text' onChange={handleChange} value={product}/>
                </Form.Group>
                <Button type="submit">Entrer</Button>
            </Form>
        )
    };

    const loader = () => {
        return (
            <Spinner />
        )
    }

    return (
        <>
            {searchBar()}
            {loader()}
        </>
    )
}