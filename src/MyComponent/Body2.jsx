import React, { useRef } from 'react'
import End from './End';
import { click } from '@testing-library/user-event/dist/click';
import emailjs from 'emailjs-com'


export default function Body2() {
    return (
        <>


            <div className='main' id='skill'>
                <h2 className='h2card'>My Expertise</h2>

                <div className='main2'>
                    <div className='main3'>
                        <div className='mainin'>
                            <img src='java.png' alt='...'></img>
                        </div>
                    </div>
                    <div className='main3'>
                        <div className='mainin'>
                            <img src='react.png' alt='...'></img>
                        </div>
                    </div>


                    <div className='main3'>
                        <div className='mainin'>
                            <img src='node.png' alt='...'></img>
                        </div>
                    </div>
                    <div className='main3'>
                        <div className='mainin'>
                            <img src='mongo.png' alt='...'></img>
                        </div>
                    </div>
                </div>



                <h2 className='h2card' id='project'>Projects</h2>
                <div className='project'>

                    <div className="procard">
                        <div className="card-body">
                            <img src="shop.png" className="card-img-top" alt="..." />
                            <h4 className="card-title">E-Commerce Website | Frontend (Currently working)</h4>
                            <ul>
                           <li> <p className="card-text">Created an e-commerce site using that has multiple categories using components and props.</p></li>
                            <li><p className="card-text">Login and SignUp Option with Form validation.</p></li>
                            <li><p className="card-text">Technologies Used : React , JavaScript , Bootstrap.</p></li>
                            </ul>
                            <i a href="#" className="fa fa-github"></i>
                            <p className="card-text"><small href='#' className="text-body-secondary">Live Link</small></p>
                        </div>
                    </div>


                    <div className=" procard">
                        <div className="card-body">
                            <img src="website.png" className="card-img-bottom" alt="..." />
                            <h4 className="card-title">Porfolio Website</h4>
                            <ul>
                            <li><p className="card-text">Created and hosted Portfolio Website to show my projects and About me</p></li>
                           <li> <p className='card-text'>User can Contact to me through me using Message Me feature which shows me Messages from User</p></li>
                           <li> <p className='card-text'>Technologies Used : React , Bootstrap , Material UI , JavaScript , NodeJS , MongoDB</p></li>
                            </ul>
                            <i a href="#" className="fa fa-github"></i>
                            <p className="card-text"><small a href='#' className="text-body-secondary">Live Link</small></p>
                        </div>
                    </div>

                    <div className=" procard">
                        <div className="card-body">
                            <img src="shop.png" className="card-img-bottom" alt="..." />
                            <h4 className="card-title">CREATE and READ operation Using API</h4>
                            <ul>
                            <li><p className="card-text">A Fetched Name and Email which stores in API</p></li>
                            <li><p className="card-text">Technologies Used : Axios , React , Bootstrap , NodeJS , Express.JS </p></li>
                            </ul>
                            <i a href="#" className="fa fa-github"></i>
                            <p className="card-text"><small a href='#' className="text-body-secondary">Live Link</small></p>
                        </div>
                    </div>

                    <div className=" procard">
                        <div className="card-body">
                            <img src="shop.png" className="card-img-bottom" alt="..." />
                            <h4 className="card-title">Payment Gateway Site</h4>
                            <ul>
                            <li><p className="card-text">Donation Website that uses Razorpay's Payment Portal</p></li>
                            <li><p className="card-text">Accepts Transactions through UPI and Net banking and gives user receipt of transaction</p></li>
                            <li><p className="card-text">Technologies Used : PHP , HTML , CSS , JavaScript</p></li>

                            </ul>
                            <i a href="#" className="fa fa-github"></i>
                            <p className="card-text"><small a href='#' className="text-body-secondary">Live Link</small></p>
                        </div>
                    </div>

                </div>


                {/* <End /> */}
                {/* <div className='pro1'>
                    <div className='proo1'></div>

                </div>
                <div className='pro2'>
                    <div className='proo2'></div>

                </div>
                <div className='pro3'>
                    <div className='proo3'></div>

                </div>
                <div className='pro4'>
                    <div className='proo4'></div>

                </div> */}



























            </div>
            <About />
            {/* <End /> */}

        </>
    )
}



function About() {

const form = useRef()


    function click (e) { 
        e.preventDefault(); 
        emailjs.sendForm(
            'service_sf54v9s',
            'template_3pf91ue',
             form.current,
             'BDrBfJ9o7gPUm1YKo'
             ).then(res=>{
            console.log(res);

        }).catch(err=>console.log(err));
    }

    const click2=()=>{
alert("Your message is sent")
    }
    return (
        <>
            <div className='mainmain'>
                <End />
                <div className='form1'>
                    <form ref={form} onSubmit={click}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label"></label>
                            <input type="text" name='message' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Message' />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"></label>
                            <input type="email" name='user_email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                        <button type="submit" onClick={click2} className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export { About };
