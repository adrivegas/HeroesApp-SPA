import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) =>{

    const validPublishers = ['DC Comics','Marvel Comics'];
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}

// Función a la que le mando el publisher y me regresa la información si está dentro de validPublishers 