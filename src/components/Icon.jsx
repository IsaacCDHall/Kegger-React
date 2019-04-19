import React from 'react';


function Icon(){
  return (
    <div>
      <style jsx>{`
					div{
						display: flex;
						justfy-content: space-around;
						position: absolute;
						right 10px;
            margin-top: -2rem;
					}
					i {
						padding-right: 15px;
						padding-left: 5px;
            transition: color .3s ease;
					}
          i:hover{
            color: #EF8726;
            cursor: pointer;
          }

			`}</style>
      <i className="fab fa-facebook-f fa-2x"></i>
      <i className="fab fa-instagram fa-2x"></i>
    </div>
  );
}

export default Icon;
