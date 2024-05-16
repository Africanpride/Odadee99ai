import React from 'react';
import { helix } from "ldrs";

helix.register();


const HelixAnimation = () => {
  return (
    <div><l-helix size={45} speed="2.5" color="#2563eb" /></div>
  )
}

export default HelixAnimation