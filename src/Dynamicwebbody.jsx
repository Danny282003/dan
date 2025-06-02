import React from 'react'
import Notes from './Notes'

function Dynamicwebbody() {
    const [ingredient, setingredient] = React.useState([])   


    const display = ingredient.map((list)=>{
        return (
            <li key={list}>
                {list}
            </li>
        )
    })

    function signUp(formData){
        const newIngredients = formData.get("ingredient")
        setingredient(previngredient => [...previngredient, newIngredients])
    }


    // //  COMPLEX STATE [Arrays]
    // const things = ["let", "Her", "Go", "right", "Now"]
    //  const [myFavoriteThings, setMyFavourite] = React.useState([])

     
    //  function add (){
    //     setMyFavourite(prevFavourite => 
    //          [...prevFavourite, things[prevFavourite.length]]
    //     )
       
    //  }


   
    


  
  return (
    <>
        <div className='container'>
            <form className='ingridients' action={signUp}>
                <input type="text" name='ingredient' placeholder='e.g. Maggi' className='box'/>
                <button className='button'>+ Add ingredient</button>
            </form>
            <h2 className='hand'>Ingredients on Hand:</h2>
            <ul className='list'>
                {display}
            </ul>

            {  ingredient.length > 3 ? <div className='generateRecipe'>
                <div className='sub1'>
                    <p className='ready'>Ready for a recipe?</p>
                    <p className='generate'>Generate a recipe from your list of ingredients.</p>
                </div>
                <div className='sub2'>
                    <button className='get'>Get a recipe</button>
                </div>
            
            </div> : null}
            

        </div>

      
        <Notes/>
    </>
  )
}

export default Dynamicwebbody