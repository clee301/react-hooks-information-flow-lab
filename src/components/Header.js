import React from 'react';

function Header({ onDarkModeClick, isDarkMode }){

    function handleClick(){
        onDarkModeClick()
    }

    return (
    <div>
        <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
    )
}

export default Header