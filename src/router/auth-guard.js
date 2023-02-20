

const isAuthenticatedGuard = (to, from, next) => {

    return new Promise( () => {
        const randon =  Math.random() * 100
        if (randon > 50) {
            next()
        }else{
            console.log("bloqueado por el guard")
            next( {name: 'pokemon-home'})
        }
    })
    console.log( {to, from, next} );
}

export default isAuthenticatedGuard