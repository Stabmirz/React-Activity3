import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Image(){
    return (<img src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg" className="image" alt="avatar" />);
}
function Details(){
    return(
        <div className="me">
            <p>Name : Miaw </p>
            <p>Date of Birth : 02-25-2002 </p>
            <p>Country : Bangladesh</p>
            <p>Course : Web Development </p>
        </div>
    );
}


function Title(){
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="content">
                <Image/>
                 <Details/>
            </div>
            
        </div>
    );
}
ReactDOM.render(<Title />, document.getElementById('root'));

