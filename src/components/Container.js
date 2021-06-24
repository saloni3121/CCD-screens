import React from 'react'

function Container({children,width}) {
    const containerStyle={
        background: '#fff',
        margin:'auto',
        width,
        marginTop:'10%'
    }
    return (
        <div style={containerStyle}>
            {children}
        </div>
    )
}

Container.defaultProps={
  width:'70%'
}

export default Container
