import React from 'react'
import "./success.css"

const success = () => {
    return (
        <section className='successbody'>
        <div className="thank-you-container">
          <div className="thank-you-card">
            <h1>🎉 Thank You! 🎉</h1>
            <p>Your message has been successfully sent. We appreciate your effort and will get back to you shortly!</p>
            <button onClick={() => window.location.href = '/'}>Go Back to Home</button>
          </div>
        </div>
        </section>
      );
}

export default success