// import React, { useContext, useMemo } from 'react'
// import '../Style.css';
import './hero.css'

import ItemList from '../../assets/ItemList.js'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { BsStarFill, BsStarHalf, BsHeart, BsShare } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { globleData } from '../../App.js'

const Hero = () => {

  // const { searchItem } = useContext(globleData)

  // let listItem = useMemo(()=>{

  // },[])

  console.log(ItemList)

  const addcart = (id) => {
    // productview(id)
    console.log(id)
  }


  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 12;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = ItemList.slice(firstIndex, lastIndex);
  const npages = Math.ceil(ItemList.length / recordPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1)






  return (
    <>
      <div className="container-fluid card_container my-4">
        <div className="row ">


          {records && records.map((item, index) => {
            return (
              <div key={index} className="col-6 col-lg-3 mt-3 cart_item">
                <div className="card p-2" style={{ width: "" }}>
                  <div className='top_heading'>
                    <h5 className="card-title text-size">{item.movietitle} </h5>
                    <BsHeart id='heart' />
                    <BsShare id='share' />
                  </div>

                  <img src={item.moviemainphotos} className="img-fluid card-img" alt="..." style={{ height: "y" }} onClick={() => addcart(item.id)} />

                  <div className="card-body card-main">

                    <h6 className='text-size'><span className='text-success '>Off By:</span>{item.imdbmovieid}</h6>
                    <h6 id='rating'>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </h6>
                    <div className="action-btn">

                      <button onClick={() => addcart(item.id)} className='btn btn-primary me-2'>Watch Now</button>


                      {/* <button className='btn btn-primary'>Go More</button> */}
                    </div>

                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>


      <nav className='d-flex justify-content-center mb-3'>
        <ul className='pagination'>
          <li className='page-item'>
            <a href="#" className='page-link' onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <a href="#" className='page-link' onClick={() => changeCurrPage(n)}>{n}</a>
              </li>
            ))
          }
          <li className='page-item'>
            <a href="#" className='page-link' onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>

    </>

  )

  function prePage() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  function nextPage() {
    if (currentPage !== npages) setCurrentPage(currentPage * 1)
  }
  function changeCurrPage(id) {
    setCurrentPage(id)
  }




}

export default Hero