import React, { useState } from 'react'
import ItemList from '../assets/ItemList'
function Header() {

         const [selectedMovies, setSelctedMovies] = useState("")

         const onChangeHandler = (e) =>{
           console.log(e.target.value)
           let userSelection = e.target.value;
           setSelctedMovies(userSelection)
           
        //   const result = ItemList.filter((item,i)=>{
        //      return item.movielanguages
        //    })
        
        const result = ItemList.map((item ,i)=>{
              let ans = item.movielanguages;

            // let a = ans.filter((it, index)=>{
            //       if(it === selectedMovies) return it;
            // })
             
            // console.log(a)
            //  console.log(ans)
        })

            //  console.log(ans)

         }




    return (
        <div className='container '>
            <div className="row d-flex justify-content-evenly">
                <div className="col-3 mt-3">
                    <label htmlFor="" className='text-white'>Filter By Language</label>
                    <select className="form-select" aria-label="Default select example" value={selectedMovies} onChange={onChangeHandler}>
                        <option value="NA">Open this select menu</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Telgu">Telgu</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Malyalama">Malyalama</option>
                        <option value="Bhojpuri">Bhojpuri</option>
                        <option value="Bangali">Bangali</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Nepaii">Nepaii</option>
                        <option value="Haryanvi">Haryanvi</option>
                        <option value="Punjabi">Punjabi</option>
                        <option value="Oriya">Oriya</option>
                        <option value="Urdu">Urdu</option>
                        <option value="Assamese">Assamese</option>
                    </select>
                </div>
                <div className="col-3 mt-3">
                <label htmlFor="" className='text-white'>Filter By Country</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-3 mt-3">
                <label htmlFor="" className='text-white'>Filter By Language</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header
