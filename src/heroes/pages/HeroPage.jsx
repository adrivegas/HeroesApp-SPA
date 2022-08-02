import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  // useParams sirve para obtener los parámetros
  // en este caso tomo el id de HeroesRoutes
  const { id } = useParams();

  const hero = getHeroById(id);
  // console.log(hero);

  //Si es undefined nos dará un error al tratar de leer propiedades de 
  //undefined, por eso la siguiente condición: sino existe héroe navega a marvel
  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <>
      <h1>{hero.superhero}</h1>
    </>
  )
}
