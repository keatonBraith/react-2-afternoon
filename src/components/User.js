import React from 'react'

const User = props => {
    const {singleUser, userInfo, index} = props
    return(
        <div className="User">
            <h2 className='name'>
                {singleUser.name.first} {singleUser.name.last}
            </h2>
            <div className='from'>
                <b>From:</b> {singleUser.city}, {singleUser.country}
            </div>
            <div className='job'>
            <b>Job Title:</b> {singleUser.title}
            </div>
            <div className='employer'>
                <b>Employer:</b> {singleUser.employer}
            </div>
            <div className='fav'>
                <b>Favorite Movies:</b> <ol>{singleUser.favoriteMovies.map((el,ind) => {
                    return <li>{el}</li>
                })}</ol>
            </div>
            <div className='number'>
               <b>{index + 1}/{userInfo.length}</b>
            </div>
        </div>
    )
}

export default User;