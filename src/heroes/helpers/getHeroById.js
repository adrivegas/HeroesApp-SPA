import { heroes } from "../data/heroes"

export const getHeroById = ( id ) => {
  return heroes.find( hero => hero.id === id );
}

// Función que recibe el id del héroe
// Regresa el héroe que coincida con el id, sino existe regresa undefined
