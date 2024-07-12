import React from 'react';


function AppWrap(props) {
  return (
    <div>
      <Navbar>
        <Avatar
        image='https://plus.unsplash.com/premium_photo-1720012323443-1cc54a53990e?q=80&w=1163&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        name='Bob'
        size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
      <Navbar>
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

function Navbar({children}) {
  return(
    <header style={{backgroundColor:'yellow'}}>{children}</header>
  );
}

function Avatar({image, name, size}) {
  return(
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{borderRadius:'50%'}}
      />
    </div>
  );
}

export default AppWrap;
