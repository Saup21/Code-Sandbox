import React, { useState } from 'react';
import '../App.css'

function Editor(props) {
    const { size } = props;
    const starter_template = `<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    
    </body>
</html>`
    const [value, setValue] = useState(starter_template);
    return (
        <div className='flex-box'>
            <textarea
                name="html"
                id="editor"
                style={{fontSize: size}}
                value={value}
                onChange={(event) => { setValue(event.target.value) }}
            >
            </textarea>
            <iframe
                id='display'
                srcDoc={value}
                sandbox="allow-same-origin allow-scripts"
                frameBorder="0"
            />
        </div>
    )
}

export default Editor;
