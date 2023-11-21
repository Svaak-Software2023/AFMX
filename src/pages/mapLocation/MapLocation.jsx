import React from 'react'
import ChatBot from '../ChatBot/ChatBot'

function MapLocation() {
    return (
        <>
        <div className="container p-0 my-3">

            <div style={{ width: '100%' }}>
                <iframe
                    width="100%"
                    height={600}
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+()&t=&z=14&ie=UTF8&iwloc=B&output=embed">
                    &lt;a href="https://www.maps.ie/population/"&gt;Population mapping&lt;/a&gt;
                </iframe>
            </div>
        </div>
        {/* <ChatBot/> */}
        </>
    )
}

export default MapLocation