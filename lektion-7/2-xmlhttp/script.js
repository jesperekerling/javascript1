/* // HTTP METHODS: GET, POST, PUT, DELETE

// GET - get data from server - not crypted
// POST - send data to server - crypted in a body
// PUT - update data on server - Update all data, sent in a body
// PATCH - update data on server - Update some data, sent in a body
// DELETE - delete data on server - Delete an object



// 1. Create an XMLHttpRequest object

const getRequest = (method, endpoint, cb) => {

    const http = new XMLHttpRequest();
    http.addEventListener('readystatechange', () => {
        if (http.readyState === 4) {
            cb(http.responseText)
            
        }
        else if(http.readyState === 4) {
            cb('Something went wrong')
        }

    });

    http.open(method, endpoint);
    http.send();
}




// PROMISES

const getRequestPromise = (method, endpoint) => {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.addEventListener('readystatechange', () => {
            if (http.readyState === 4 && http.status === 200) {
                resolve(http.responseText)
            }
            else if(http.readyState === 4) {
                reject('Something went wrong')
            }
    
        });
    
        http.open(method, endpoint);
        http.send();
    })
} */



fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
    }   )
    .catch(err => {
        console.log(err)
    }
)

