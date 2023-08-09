import React from 'react';
import Nav from './Nav';
import '../assets/css/Home.css'; 
import Footer from './Footer'
import logo from '../assets/img/logo.jpg'
import hbo from '../assets/img/hbo.png'
import chris from '../assets/img/chris-parnell.jpg'
import dan from '../assets/img/dan-harmon.jpg'
import justin from '../assets/img/justin-roiland.jpg'
import kari from '../assets/img/kari-wahlgren.jpg'
import gif from '../assets/gif/portal_home.gif'
import maurice from '../assets/img/maurice-lamarche.jpg'
import nolan from '../assets/img/nolan-north.jpg'
import sarah from '../assets/img/sarah-chalke.jpg'
import spencer from '../assets/img/spencer-grammer.jpg'
import tom from '../assets/img/tom-kenny.jpg'
import brandon from '../assets/img/brandon-johnson.jpg'


function Home() {

  const [showGIF, setShowGIF] = React.useState(false);

  const handleClick = () => {
    const img = document.querySelector(".card-img-logo");
    img.classList.add("rotate");
  
    // Listen for the end of the animation
    img.addEventListener("animationend", () => {
      img.classList.remove("rotate");
      setShowGIF(true); 
      setTimeout(() => {
        setShowGIF(false); // Hide the GIF container after 8 seconds
      }, 8000);
    }, { once: true }); // Ensure the event listener runs only once
  };

  return (
    <div>
      <Nav/>
      
      <section className="section-info col-sm-12 pt-5">
          <div className="row ">
           {/* Card with image and description */}
              <div className="card card-logo col-sm-6 col-lg-6 ">
               <img src={logo} alt="Show Logo" className="card-img-logo"
                onClick={handleClick}
                />
                <div className="card-body row  bg-gradient " id='logo'
                 onClick={() => window.open("https://play.hbomax.com/player/urn:hbo:episode:GXkRkPgoDro7CZgEAABqh", "_blank")}>
                <div className="provider col-lg-2" >
                      <img src={hbo} alt="Provider Logo" />
                    </div>
                  <a className="card-text col fs-4 fw-semibold  ">
                    Where to watch Rick & Morty                   
                  </a>                 
                </div>
              </div>
            {/* Description container */}
              <div className="section-info-container container col pt-9  bg-dark bg-gradient p-2 text-dark bg-opacity-75   ">
              <h1 className='overview'><strong >Overview</strong></h1>
                <h5><p className="desc1 text-white fst-italic"><hr />Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and a misanthropic grandfather dragging his grandson into hijinks. <br /> <br /> Roiland voiced the eponymous characters, with Chris Parnell, Spencer Grammer, and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future created by Roiland for Channel 101, a short-film festival cofounded by Harmon. Since its debut, the series has received critical acclaim for its originality, creativity, and humor. It has been nominated for three Primetime Emmy Awards for Outstanding Animated Program and won the award in 2018 and 2020. The series has also received two Annie Awards. At times, the series has been the most viewed television comedy for adults between 18 and 24. The popularity of Rick and Morty has made it a hundred-million dollar merchandising and media franchise.</p>
                </h5> 
              </div>
          </div>

          {showGIF && (
        <div className="gif-container">
          <img src={gif} alt="Your GIF" className="gif-image" />
        </div>
      )}

      </section>

      {/* Casting Carrousel */}
      <section className="casting container.fluid  py-5 d-flex overflow-auto vw-100">

        <h1 className='fw-bold'>Series Cast</h1>
        <div className='container d-flex flex-row'>
          <div className="casting-card p-1 " >
            <img src={justin} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Justin Roiland</strong></h5>
            <p className='px-4'>as Rick Sanchez, Morty Smith</p>
          </div>        
          <div className="casting-card p-1 offset-1" >
            <img src={dan} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Dan Harmon</strong></h5>
            <p className='px-4'>as Birdperson</p>
          </div> 
          <div className="casting-card p-1 offset-1" >
            <img src={spencer} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Spencer Grammer</strong></h5>
            <p className='px-4'>as Summer Smith</p>
          </div> 
          <div className="casting-card p-1 offset-1" >
            <img src={chris} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Chris Parnell</strong></h5>
            <p className='px-4'>as Jerry Smith</p>
          </div> 
          <div className="casting-card p-1 offset-1" >
            <img src={sarah} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Sarah chalke</strong></h5>
            <p className='px-4'>as Beth Smith</p>
          </div> 
          <div className="casting-card p-1 offset-1" >
            <img src={kari} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Kari Wahlgren</strong></h5>
            <p className='px-4'>as Jessica</p>
          </div> 
          <div className="casting-card p-1 offset-1" >
            <img src={maurice} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Maurice LaMarche</strong></h5>
            <p className='px-4'>as Morty Jr.</p>
          </div> 
          <div className="casting-card p-1 offset-1" >
            <img src={tom} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Tom Kenny</strong></h5>
            <p className='px-4'>as Squanchy</p>
          </div> 
          <div className="casting-card p-1 offset-1" >
            <img src={brandon} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Brandon Johnson</strong></h5>
            <p className='px-4'>as Mr. Goldenfold</p>
          </div> 
          <div className="casting-card p-1 offset-1" >
            <img src={nolan} class="" alt="..."/>
            <h5 className="casting-name px-2"><strong>Nolan North</strong></h5>
            <p className='px-4'>as Scroopy Noopers</p>
          </div> 
     

        </div>
      </section>

      {/* Videos */}
      <section className="videos p-5 bg-dark">
        <h1 className='text-white mb-4'>WANT TO KNOW MORE ? </h1>
        <iframe className='col-lg-12 col-md-3' width="560" height="240" src="https://www.youtube.com/embed/27dO09ZG31s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className='col-lg-12 col-md-3' width="560" height="240" src="https://www.youtube.com/embed/zExyedBbU6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className='col-lg-12 col-md-3' width="560" height="240" src="https://www.youtube.com/embed/bg1FQ5ts5pM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;
