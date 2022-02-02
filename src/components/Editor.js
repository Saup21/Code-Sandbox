import React, {useState, useEffect} from 'react';
import Monaco, {useMonaco} from "@monaco-editor/react";
import './Editor.css'

function Editor() {
    const monaco = useMonaco()


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
    useEffect(() => {
        if (!monaco) return;
        // do conditional chaining
        monaco.editor.setTheme("vs-dark")
        // or make sure that it exists by other ways
        if (monaco) {
            console.log("here is the monaco instance:", monaco);
        }
    }, [monaco]);
    return (
        <div>
            <div className='flex-box'>
                <Monaco
                    height="90vh"
                    width={"60vw"}
                    defaultValue={value}
                    defaultLanguage="html"
                    onChange={(val,evt) => setValue(val)}
                />
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
