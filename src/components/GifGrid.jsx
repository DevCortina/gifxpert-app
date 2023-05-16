import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export function GifGrid  ({ category }) {

  const {images, isLoading } = useFetchGifs( category );
  console.log({images, isLoading });

  return (
    <>
      <h3>{category}</h3>

      { isLoading && <h2> Cargando Imagenes....</h2> }


      <div className="card-grid">
      {
        images.map(( gif ) =>(
            <GifItem key={gif.id} 
                     { ...gif } 
                            />
        ))
      }
      </div>
    </>
  )
}
