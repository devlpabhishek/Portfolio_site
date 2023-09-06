import React from 'react'
import './Style.css'




export default function Head() {


 const click= (URL)=>{
//    window.location('https://drive.google.com/file/d/136iRUDgj1E8GEDoSosPFe2D_Sgs7mPlU/view?usp=drive_link');
//    window.location.href='https://drive.google.com/file/d/136iRUDgj1E8GEDoSosPFe2D_Sgs7mPlU/view?usp=drive_link';
window.open(URL,"_blank", "noreferrer");    
   }; 




    return (
        <>


            <div className='nav1'>
                <ul className="nav justify-content-center ">


                    <li className="nav-item">
                        <a className="nav-link" href="#skill">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#project">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>

                    <button className='btn  btn-outline-primary nav-btn btn1' type="submit" role="link" onClick={()=>click('https://drive.google.com/file/d/136iRUDgj1E8GEDoSosPFe2D_Sgs7mPlU/view?usp=sharing')}>Download Resume</button>
                </ul>
            </div>


        </>
    )
}
