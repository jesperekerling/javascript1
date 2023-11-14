// Example of aync

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    }
getData();


const getData2 = async () => {
    return 'hej'
}
console.log(getData2())

getData2().then(data => console.log(data));
       {

}

let user = {
    firstName: 'John',
    lastName: 'Doeyyy'
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        user = data
        document.body.innerHTML = user.firstName;
    })
    console.log(user)


    const getUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }
    getUser().then(data => console.log(data));