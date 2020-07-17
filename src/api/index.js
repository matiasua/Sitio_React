export function login(usuario){
    return fetch('http://127.0.0.1:5000/login',{
        method: 'POST',
        body: JSON.stringify({
            correo: usuario.email,
            password: usuario.password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export function getDeliveries() {
    const token = localStorage.getItem('token');
    return fetch('http://127.0.0.1:5001/deliveries', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}