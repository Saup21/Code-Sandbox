import React, {useState, useEffect} from 'react';
import './Editor.css'

function Editor() {

    const [value, setValue] = useState(`<h1>
Welcome to Code-Sandbox 
</h1>
<h3>
    Hello! This is a HTML/CSS/JS playground!
</h3>
<ul>
    <li>You can create a html/css/js project here</li>
    <li>Feel free to use it as your local development environment</li>
    <li>Customize your code in whatever way you like</li>
    <li>Code-Sandbox is awesome! And hope you would love to use it!</li>
</ul>
    `);

    return (
        <div>
            <div className='flex-box'>
                <textarea 
                    name="html" 
                    id="editor" 
                    cols="10" 
                    rows="10"
                    value={value}
                    onChange={(event) => { setValue(event.target.value) }}
                >
                </textarea>
                <iframe
                    id='display'
                    srcDoc={value}
                    title="output" 
                    sandbox="allow-scripts" 
                    frameBorder="0" 
                /> 
            </div>
        </div>
    )
}

export default Editor;
