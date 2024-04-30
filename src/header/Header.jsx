import React, { useState,useContext} from 'react'
import { MyContext } from '../App'

// import ItemList from '../assets/ItemList'
function Header() {

    const [selectedMovies, setSelctedMovies] = useState("")
    const {filterFuction} = useContext(MyContext)

    const onChangeHandler = (e) => {
        console.log(e.target.value)
        let userSelection = e.target.value;
        setSelctedMovies(userSelection)

        filterFuction(userSelection)


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
                        <option value="Telugu">Telugu</option>
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
                        <option value="English">English</option>
                    </select>
                </div>
                <div className="col-3 mt-3">
                    <label htmlFor="" className='text-white'>Filter By Country</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">India</option>
                        <option value="2">Nepal</option>
                        <option value="3">United Kingdom</option>
                        <option value="3">Australia</option>
                        <option value="3">Canada</option>
                        <option value="3">France</option>
                        <option value="3">Ireland</option>
                        <option value="3">Kuwait</option>
                        <option value="3">Singapor</option>
                        <option value="3">United Arab Emirates</option>
                        <option value="3">United State</option>
                        <option value="3">Germany</option>
                        <option value="3">Finland</option>
                        <option value="3">Mexico</option>
                        <option value="3">Egypt</option>
                        <option value="3">Israel</option>
                        <option value="3">Indonesia</option>
                        <option value="3">Netherlands</option>
                        <option value="3">Sweden</option>
                        <option value="3">Thailand</option>
                        <option value="3">South Africa</option>
                        <option value="3">Portugal</option>
                        <option value="3">Japan</option>
                        <option value="3">Chile</option>
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
