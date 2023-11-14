// Example of aync

/* const getData = async () => {
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


fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        user = data
        document.body.innerHTML = user.firstName;
    })
    console.log(user) */


    let user = {
        name: 'John',
        email: 'Doeyyy'
    }
    const getUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        user = data
        document.body.innerHTML = user.name;
        console.log('hej')
    }
    getUser()

    // When fetch, always use 2 thens or 2 awaits
    //IMPORTANT TO KNOW: When using async, you can't use return, you have to use await

    