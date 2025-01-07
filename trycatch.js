const getProducts = () => {
    try {
        const data = []
        console.log('data obtenida');
        
        setTimeout(() => {
            try {
                throw new Error('Error de timeout')
            } catch (error) {
                if(Object.getOwnPropertyNames(error).includes('stack', 'message')){
                    console.log(error.message);
                }
                // console.log(Object.getOwnPropertyNames(error))
            }
        }, 100)
    } catch (error) {
        console.log('Hubo un error')
    }
}

getProducts()