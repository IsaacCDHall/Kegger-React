
import React from 'react';
import { Link } from 'react-router-dom';

function Links() {


  return(
    <div>
      <style jsx>{`
					div {
						display:flex;
						justify-content: flex-start;
						text-align: center;
            flex-flow: row wrap;
            margin-top: 2rem;
        	}
					a {
            display: flex;
            justify-content: flex-end;
            flex-flow:column wrap;
						width: 6rem;
            text-decoration: none;
            font-family: 'Allerta', sans-serif;
            padding-left: 1rem;
            // color: #EF8726;
            // color: #29A0C3;
            color: #FCFD46;
            font-size: 1.1rem;
            list-style: none;
            transition: color .8s ease;

					}

          h1{
            font-family: 'Monoton', cursive;
            color: gold;

          }

          a:hover{
            color: #EF8726;
          }

				`}</style>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <a>Home</a>
      </Link>
      <Link to="/Kombucha_On_Tap" style={{ textDecoration: 'none' }}>
        <a>Kombucha</a>
      </Link>



    </div>
  );
}
export default Links;
// <Link to="/Login" style={{ textDecoration: 'none' }}>
//   <a>Login</a>
// </Link>
// <Link to="/Register" style={{ textDecoration: 'none' }}>
//   <a>Register</a>
// </Link>
// <Link to="/Beer_On_Tap" style={{ textDecoration: 'none' }}>
//   <a>Beer</a>
// </Link>
