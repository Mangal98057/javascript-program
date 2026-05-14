function login (username){
    if(username===undefined){
        console.log('please enter username')
        return
    }
    return (`login sucessfully ${username}`)
}
console.log(login('mangal'))

