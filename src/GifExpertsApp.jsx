import { useState } from "react"
import { AddCategory, GifGrid  } from "./components";

export function GifExpertApp(){

  const [categories, setCatagories] = useState(['Dragon Ball']);
  
  const onAddCategory = (newCategory) => {
    if( categories.includes(newCategory)) return;

    setCatagories([ newCategory, ...categories  ])
  }

    return (
      <>
        <a href="/gifxpert-app/" className="link">
          <h1>GifExpertApp</h1>
        </a>

        <AddCategory 
          onNewCategory={ (val) => onAddCategory(val)}
           />
          { categories.map(category =>(
            <GifGrid 
              key={category}
              category={category} />

          )) }
      </>
    )
}