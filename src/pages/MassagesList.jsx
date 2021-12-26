import React from 'react';
import MassagesCards from '../components/MassagesCards';
import { MassagesType } from '../data/MassagesType';
import bazzi from '../assets/bazzi.png'
import { useLocation } from 'react-router';

const layout = { 
  backgroundImage:`url(${bazzi})`,
  backgroundPosition: 'top',
  position:'fixed',
  minWidth:'100%',
  minHeight:'100%',
  backgroundSize:'cover',

};

function MassagesList() {

  const location = useLocation();
  console.log(location)
  return (
    <div style={layout}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {MassagesType.map((item) => (
          <div className='col-md-4'>
            <MassagesCards massage={item} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default MassagesList;
