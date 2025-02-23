import React from 'react';
import '../css/Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            
            <div>
                <p><strong>Phone:</strong> 8072990913</p>
                <p><strong>Location:</strong> Chennai, Tamilnadu</p>
                <p>
                    <strong>Email:</strong> 
                    <a href="mailto:saabikaroshni@gmail.com"> saabikaroshni@gmail.com</a>
                </p>
                <p>
                    <strong>LinkedIn:</strong> 
                    <a href="https://www.linkedin.com/in/saabika-roshni-647269258" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/saabika-roshni
                    </a>
                </p>
                <p>
                    <strong>GitHub:</strong> 
                    <a href="https://github.com/Saabikaroshni" target="_blank" rel="noopener noreferrer">
                        github.com/Saabikaroshni
                    </a>
                </p>
            </div>
            
        </div>
    );
};

export default Contact;
