import React from 'react';
import "./paymentstyle.css";
import { Link } from 'react-router-dom';

const Failed = () => {
  return (
    <>
    <div className="container">
    <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="message-box _success _failed">
                     <i className="fa fa-times-circle" aria-hidden="true"></i>
                    <h2> Your payment failed </h2>
             <p>  Try again later </p> 
            <Link to="/"><button className="bigbutton">Back to Home Page</button></Link>
            </div> 
        </div> 
    </div> 
    </div>


       {/* <main>
	<div className="container-fluid">

		<section className="thankyou">
			<h1>Failed</h1>

			<p>
				Place Your order has been Failed.
			</p>
		</section>

		<div className="row">

			

			<div className="share">


				<div className="email">
        <Link to="/"><button className="bigbutton">Back to Home Page</button></Link>
					
				</div>

			</div>

		</div>

	</div>
</main> */}
    </>
  )
}

export default Failed
