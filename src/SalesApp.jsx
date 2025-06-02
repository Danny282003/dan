import React, { useRef, useState } from 'react'

function SalesApp() {
    let [row1,setRow1] = useState({
        price:'',
        cost:''
    })

    let [row2, setRow2] = useState({
        price2:"",
        cost2: ""
    })

    let [row3, setRow3] = useState({
        price3: "",
        cost3: ""
    })

    let [total1, setTotal1] = useState(0)

    let qty1 = useRef()
    let qty2 = useRef()
    let qty3 = useRef()

    function change () {
        setRow1((prev)=>({
            ...prev,
            price:2000
        }))
    }

    function change2 (){
        setRow2((prevRow2)=>({
            ...prevRow2,
            price2: 15000

        }))
    }

    function change3 (){
        setRow3((prevRow3)=>({
            ...prevRow3,
            price3: 5000
        }))
    }

    function forQty1() {
         setRow1((prev)=>({
            ...prev,
            cost: qty1.current.value * row1.price
        }))
    }

    function forQty2(){
        setRow2((prevRow2)=>({
            ...prevRow2, 
            cost2: qty2.current.value * row2.price2
        }))
    }

    function forQty3(){
        setRow3((prevRow3)=>({
            ...prevRow3,
            cost3: qty3.current.value * row3.price3
        }))
    }

    function total (){
        setTotal1(row1.cost + row2.cost2 + row3.cost3)
    }




    // =()=>{}

  return (
    <div>
        <table className=' w-[650px] text-center border-2 '>
            <thead className=' border'>
                <tr>
                    <th>Items</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" onClick={change}/> Bag</td>
                    <td><input type="number" placeholder='Qty' className=' border border-black' ref={qty1} onInput={forQty1}/></td>
                    <td><input type="number" placeholder='Price' className=' border border-black' value={row1.price}/></td>
                    <td><input type="number" placeholder='Cost' className=' border border-black' value={row1.cost}/></td>
                </tr>

                <tr>
                    <td><input type="checkbox" onClick={change2}/> Shoes</td>
                    <td><input type="number" placeholder='Qty' className=' border border-black' ref={qty2} onInput={forQty2}/></td>
                    <td><input type="number" placeholder='Price' className=' border border-black' value={row2.price2}/></td>
                    <td><input type="number" placeholder='Cost' className=' border border-black' value={row2.cost2}/></td>
                </tr>

                <tr>
                    <td><input type="checkbox" onClick={change3}/> slippers</td>
                    <td><input type="number" placeholder='Qty' className=' border border-black' ref={qty3} onInput={forQty3}/></td>
                    <td><input type="number" placeholder='Price' className=' border border-black' value={row3.price3}/></td>
                    <td><input type="number" placeholder='Cost' className=' border border-black' value={row3.cost3}/></td>
                </tr>

                <tr>
                    <td><input type="checkbox" onClick={total}/>Total</td>
                    <td><input type="number" placeholder='Total' className=' border border-black h-[50px] mt-9' value={total1}/></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default SalesApp