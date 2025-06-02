import React from 'react'

function Box() {
  return (
    <>
        <div className=' h-28 bg-blue-500 w-[200px] text-3xl font-bold'>Box</div>
        <section className=' h-[300px] grid grid-cols-4 gap-2'>
            <div className=" bg-fuchsia-500"></div>
            <div className=" bg-yellow-400 rounded-[10px]"></div>
            <div className=" bg-gray-400 rounded-bl-[25px]"></div>
            <div className=" bg-neutral-300 bg-[url(dice1.png)] bg-cover bg-center text-yellow-400">
                {/* <img src="dice 1.png" alt="" /> */}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci, molestias similique fuga placeat quo necessitatibus dicta voluptatem doloribus corrupti a, voluptatibus obcaecati illum consequatur enim consequuntur distinctio soluta, esse voluptates. Tenetur, sint voluptate? Pariatur autem ullam incidunt error eligendi tempore, fuga optio qui at, modi enim! Aliquam, quis eaque.
            </div>
        </section>
        <h1 className=' text-3xl font-extrabold text-center'>Welcome to tailwind</h1>
        <button className=' bg-red-500 p-1.5 rounded-[5px]'>click me</button>
        <input type="text" className=' p-2 border' />
    </>
    
  )
}

export default Box