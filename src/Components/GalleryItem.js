import React from 'react';
import "./GalleryItem.css"

const GalleryItem = () => {
    return ( 
        <div className="galleryItem">
            <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, sed.</p>
        </div>
     );
}
 
export default GalleryItem;