import React from 'react';

function ({url, alt}){
    return (
    <li className="photo-item">
    <img src ={url} alt= {alt} />
</li>

    );
}

export default Photo;