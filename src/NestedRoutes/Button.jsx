import React from 'react';

function Button({handleClick,children}) {
    console.log('Rendering button - ',children)
  return (
    <div>
      {/* <h1>Button</h1> */}
      <button onClick={handleClick}> {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
