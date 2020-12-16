//simulates taking 2 seconds to remember someone's name
// comparing using vanilla promises or async version of promises.
// async is syntactic sugar that compiles down to the same thing. easier to read, maintain and troubleshoot.
function rememberName(input) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(input)
        }, 2000)
    })
}

// Traditional Promise version
function remember(input) {
    console.log("Hi there....")
    return rememberName(input)
        .then(name => {
            return `... ${name}! Good to see you again!`
        })
}

// Async version
async function asyncRemember(input) {
    console.log("Hi there....")
    const name = await rememberName(input)
    return `... ${name}! Good to see you again!`
}

//Traditional promise call
remember("Alex")
    .then(greeting => console.log(greeting))

// Async version call
asyncRemember("Bob")
    .then(greeting => console.log(greeting))