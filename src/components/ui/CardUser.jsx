import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
function CardUser({user}) {
    async function handleDelete(id) {
        const userId = { id : id};
        const response = await fetch('http://localhost:3000/user',{
            method:'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userId),
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message);
        }
    }

    return (
        <Card className='p-2 mx-1 border-3 bg-dark rounded-3'>
            <Card.Body className='bg-dark text-light d-flex flex-wrap row'> 
                <img style={{ height: '6rem'}} src={user.photo} alt={user.name} />                
                <Card.Text className='fw-bold fs-2'>{user.name}</Card.Text>
                <Card.Subtitle className='text-info'>{user.email}</Card.Subtitle>
            </Card.Body>
            <Button onClick={() => handleDelete(user.id)}>Delete User</Button>
        </Card>
    );
}

export default CardUser