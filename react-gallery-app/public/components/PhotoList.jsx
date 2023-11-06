import React from "react";
import Photo from './Photo';

function PhotoList ({ photos }){
  return (
    <ul className="photo-list">
     {photos.map((photo,index)} => (
     <Photo key ={index} url={photo.url} alt{photo.alt} />
  ))}
  </ul>
 );
}

export default PhotoList;