import React from 'react'
import Nav from './Nav';
import kled from '../assets/img/KFF.jpg'
import '../assets/css/Developer.css'
import Footer from './Footer'
export default function Developer() {
  return (
    <>
        <Nav/>

        <div class="container developer">
          <div class="row gy-4 justify-content-center">
            <div class="col-lg-4">
              <img src={kled} class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-5 content">
              <h2>Full Stack Developer</h2>
              <p class="fst-italic py-3">
                My name is David Lancheros a full stack developer and designer from Colombia who loves to code  learn new things and the video games
              </p>
              <div class="row">
                <div class="col-lg-6 info">
                  <ul>
                  <li><i class="bi bi-chevron-right"></i> <a href="https://signifer-portfolio.netlify.app" target="_blank"> <strong>Website</strong></a></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+57 3008624384</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bogota, Colombia</span></li>
                    <li><i class="bi bi-chevron-right"></i> <a href="https://www.linkedin.com/in/cesar-david-lancheros-buitrago-6a281313b/"target="_blank" ><strong>LinkedIn</strong> </a></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>cesardavid150@hotmail.com</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

      </div>
    <Footer/>
    </>
  )
}
