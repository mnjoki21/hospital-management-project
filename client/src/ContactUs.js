import React from "react";
import "./ContactUs.css"

function ContactUs(){
    return(
        <div class="containerr">
		<div class="contact-boxx">
			<div class="lefty"></div>
			<div class="righty">
				<h2>Contact Us</h2>
				<input type="text" class="field1" placeholder="Your Name" />
				<input type="text" class="field1" placeholder="Your Email" />
				<input type="text" class="field1" placeholder="Phone" />
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn1">Send</button>
			</div>
		</div>
	</div>
    )
}

export default ContactUs;