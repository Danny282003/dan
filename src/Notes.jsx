
//     const [ingredient, setIngredient] = React.useState([])

//     const display = ingredient.map((list)=> {
//         return (
//         <li key={list}>
//             {list}
//         </li>
//         )
//     })


//     function handleSubmit(event){
//         event.preventDefault()
//         console.log("Form Submitted")
        
//         const formData = new FormData(event.currentTarget)
//         const newingredients = formData.get("Ingredient")
//         setIngredient(previngredient => [...previngredient, newingredients])
//     }

//   return (
//     <>
       
//     </>
//   )
// }





//  const body = ["ready", "Tomato", "Rice", "Beans"]   


//     // Example 1 
//     const [result, setIsImportant] = React.useState("body")
    
//     function handleClick () {
//         return setIsImportant("definately")
//     }
    
//     // Example 2
//     const [count, setCount] = React.useState(0)

  

//     function minus (){
//         setCount(function(prevCount){
//             return prevCount - 1
//         })
//     }


//     const display = body.map((list)=>{
//         return (
//             <li key={list}>
//                 {list}
//             </li>
//         )
//     })

//     function handleSubmit(event){
//         event.preventDefault()
//         console.log("Form Submitted")
//         const formData = new FormData(event.currentTarget)
//         const newIngredients = formData.get("ingredient")
//     }

//      const [isGoingOut, setIsGoingOut] = React.useState(true)
     
//      function change (){
//         setIsGoingOut(function(previsGoingOut){
//             return !previsGoingOut
//         })
//      }


//     //  COMPLEX STATE [Arrays]
//     const things = ["let", "Her", "Go", "right", "Now"]
//      const [myFavoriteThings, setMyFavourite] = React.useState([])

     
//      function add (){
//         setMyFavourite(prevFavourite => 
//              [...prevFavourite, things[prevFavourite.length]]
//         )
       
//      }


//   return (
//     <>
//         <div className='container'>
//             <form className='ingridients' onSubmit={handleSubmit}>
//                 <input type="text" name='ingredient' placeholder='e.g. Maggi' className='box'/>
//                 <button className='button'>+ Add ingredient</button>
//             </form>

//             <ul>
//                 {display}
//             </ul>
            
//             <button onClick={handleClick}>{result}</button>


//             <div className='calculator'>
//                 <div className='area'>{count}</div>
//                 <div className='plus'><button onClick={change}>{isGoingOut ? "Yes" : "No"}</button></div>
//                 <div className='minus'><button onClick={add}>{result}</button></div>
//             </div>

//             <div className='flex'>
//                 {myFavoriteThings}
//             </div>
//         </div>
//     </>
//   )
// }

//   const [messages, setMessages] = React.useState(["a", "b", "c"])
//     function toggleDisplay (){
//         if (messages.length === 0) {
//             return "You are all Caught up"
//         } else if (messages.length === 1) {
//             return "You have 1 unread messages"
//         } else {
//             return `You have ${messages.length} unread messages`
//         }
//     }

//       <div className='states'>
//                 <h1>{toggleDisplay()}</h1>
//             </div>


//   function submitChoice(formData2) {
//         const email = formData2.get("email")
//         const password = formData2.get("password")
//         const radioBtn1 = formData2.get("parents")
//         const checkbox = formData2.getAll("mummy")
//         const selectTag = formData2.get("foodChoice")
//         console.log(email, password, radioBtn1, checkbox, selectTag)
//     }

//       <div className='flex'>
//             <form className='submitted' action={submitChoice}>
//                 <label htmlFor=""> Email:
//                     <input type="email" placeholder='email' name='email' className=' bg-white'/>
//                 </label>

//                 <label htmlFor="">Password
//                     <input type="password" placeholder='input password' name='password' className=' bg-white'/>
//                 </label>

//                 <label htmlFor="">Daddy
//                     <input type="radio" name='parents' value="Daddy"/>
//                 </label>

//                  <label htmlFor="">Grandpa
//                     <input type="radio" name='parents' value="Grandpa"/>
//                 </label>

//                 <label htmlFor=""> Mummy
//                     <input type="checkbox" name='mummy' value="Mummy"/>
//                 </label>

//                 <label htmlFor=""> Children
//                     <input type="checkbox" name='mummy' value="Children"/>
//                 </label>

//                 <select name="foodChoice" id="first" className=' bg-white'>
//                     <option value="Rice">Rice</option>
//                     <option value="Beans">Beans</option>
//                     <option value="Potato">Potato</option>
//                     <option value="Yam">Yam</option>
//                     <option value="Cassava">Cassava</option>
//                 </select>

//                 <button className=' bg-red-600'>Submit</button>
//             </div>
//             </form>





import React from 'react'
import padsData from "./pads"
import Padd from './Padd'

function Notes({ Darkmode }) {

     const [pads, setPads] = React.useState(padsData)
    //  const styles = {
    //     backgroundColor: Darkmode ? "black" : "green"
    //  }
    
    const buttonElements = pads.map((pad)=>{
        // return <button style={styles} key={pad.id}></button>
        return <Padd color={pad.color} key={pad.id} on={pad.on} />
    })
  return (
    <div>
        
        <div className='grid'>
            {buttonElements}
        </div>
    </div>
  )
}

export default Notes