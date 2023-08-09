import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import '../assets/css/characters.css'; 
import Footer from './Footer'
import axios from 'axios';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  var url = 'https://rickandmortyapi.com/api/character/';

  const getCharacters = (url) => {
    axios.get(url)
      .then((response) => {      
        setCharacters(response.data.results);
        setInfo(response.data.info);
      })
      .catch((error) => {
        setCharacters([]);
      });
  };

  const handleSumbit= (e)=>{
    getCharacters(url);
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
  }, []);

  return (
    <>
      <Nav />
      <section className='characters'>
        <h1 className='text-center pt-4 fst-italic'>Characters from Rick and Morty</h1>
        <div className='offset-1 text-whites'>        
        </div>
        <div className='container-fluid d-flex justify-content-center '>
          {info.prev==null?(
              <></>
            ):<button className='' onClick={handlePrevPage}>Previous</button>
          }
          {
            info.next ?
            (
              <button className='mx-5' onClick={handleNextPage}>Next</button>
            ): <></>
          }
     </div>
        <div className='characters row'>
          {characters.map((character, index) => {
            return (                               
              <div className='col-lg-3 col-md-6 col-sm-12 my-4 offset-1' key={index}>
                <div className='character-container'>
                  <img src={character.image} alt={character.name} />                       
                  <div className="character-details">
                    <h3 className='d-flex justify-content-start'>{character.name}</h3>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                    <p>Location: {character.location.name}</p>
                  </div>
                </div>
              </div>   
            );            
          })}                               
        </div>
      </section>
      <Footer/>
    </>
  );
}
