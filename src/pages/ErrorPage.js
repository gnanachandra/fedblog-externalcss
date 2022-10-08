import React from 'react'
import { Link } from 'react-router-dom'
import './pagestyles.css';
function ErrorPage() {
  return (
    <div class="error">
        <h1>404</h1>
        <h4>page not found</h4>
        <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default ErrorPage