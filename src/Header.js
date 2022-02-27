import React from 'react'

const Header = () => {
  return (
    <header>
        <h1 style={h1Style}>
            Gallery Shift Calculator
        </h1>
    </header>
  )
}

const h1Style = {
    background: '#34495e',
    color: 'white',
    margin: '0',
    padding: '10px 20px',
    textTransform: 'uppercase',
    fontSize: '22px',
    fontWeight: '400',
    textShadow: '1px 1px 1px #2c3e50',
    textAlign: 'center',
    borderRadius: '5px'
}

export default Header