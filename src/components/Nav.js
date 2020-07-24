import React from 'react';



const Nav = props => {

    return(
        <div className="Nav">
            <button className="prev" onClick={props.prev}>
                <b>&lt;Previous</b>
                </button>
                <p className='buttons'><b>Edit</b></p>
                <p className='buttons'><b>Delete</b></p>
                <p className='buttons'><b>New</b></p>
            <button className='next' onClick={props.next}>
                <b>Next&gt;</b>
                </button>
        </div>
             
    )
}

export default Nav;