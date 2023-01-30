import React from 'react'
import { Link } from 'react-router-odm'



export default function Post(props) {
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{ post.title}</h5>
            <p className="card-text"> {post.body} </p>
            <Link className='btn btn-primary' to='/'> see more </Link>
        </div>
    </div>
  )
}
