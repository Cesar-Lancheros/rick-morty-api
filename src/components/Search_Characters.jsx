import React, { useEffect,useState } from 'react'
import Nav from './Nav'
import '../assets/css/characters.css'; 
import Footer from './Footer'
import axios from 'axios';


export default function Search_Characters() {
 
  const [characters, setCharacters] =useState([]);
  const [state, setState]= useState("");
  const [name, setName]= useState("");
  const [info,setInfo]=useState([]);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  var url =`https://rickandmortyapi.com/api/character/?name=${name}&status=${state}`

  const  getCharacters=(url)=>{

    axios.get(url).then((response)=> {
        setCharacters(response.data.results);
        setInfo(response.data.info);

    }).catch((error)=>{
        setCharacters([]);
    })
  }
  const handleSumbit= (e)=>{
    getCharacters(url);
    e.preventDefault()
  }
  const handleState=(e)=>{
    setState(e.target.value);
  }
  const handleName=(e)=>{
    setName(e.target.value);
  }  
  const handleNextPage=()=>{
      url=info.next;
      handleSumbit();
  }
  const handlePrevPage=()=>{
      url=info.prev;
      handleSumbit()
  }

  useEffect(() => {
    getCharacters(url);

    setHasPreviousPage(info.prev !== null);
  }, []);
  

  return (
    <>
      <Nav/>
      <section className='characters '>
        <h1 className='text-center pt-4 fst-italic'>Search for your favorite characters</h1>
        <div className='offset-1 text-whites'>
          <form onSubmit={handleSumbit} className='form'>
            <div className='row'>
          <label className='col col-sm-4 fs-4 ' htmlFor="">Type the name of the character that you want to look for:</label><br /><br />
          <label className='col col-sm-6 fs-4' >Select the status of your character</label>
          </div>
          <input type="text"className='inpName' onChange={handleName}/>
          <select className='sel-status'  onChange={handleState}>
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>  
            <option value="unknown">Unknown</option>
          </select><br/>
          <button type='button' onClick={handleSumbit}>Search</button>
          </form>
        </div>
        <div className='container-fluid d-flex justify-content-center '>
          {info.prev==null ?(
              <button disabled>Previous</button>
            ):<button className='' onClick={handlePrevPage}>Previous</button>

          }

          {
            info.next && characters.length > 0 ?
            (
              <button className='mx-5' onClick={handleNextPage}>Next</button>
            ): <></>
          }
        </div>
      <div className='characters row'>
        {
          characters.length===0?( 
            <div className='alert alert-danger '> No results</div>           
          ):(
            characters.map((characters,index)=>{

              return(                               
                <div className='col-lg-3 col-md-6 col-sm-12 my-4 offset-1' key={index}>
                  <div className='character-container'>
                        <img src={characters.image} alt={name} />                       
                        <div className="character-details">
                        <h3 className='d-flex justify-content-start'>{characters.name}</h3>
                          <p>Status: {characters.status}</p>
                          <p>Species: {characters.species}</p>
                          <p>Gender: {characters.gender}</p>
                          <p>Origin: {characters.origin.name}</p>
                          <p>Location: {characters.location.name}</p>
                        </div>
                      </div>

                </div>    
              )             
            })          
            
          )
        }

      </div>
      </section>
      <Footer/>
      </>
  )
  document.addEventListener('DOMContentLoaded',handleName())
}
