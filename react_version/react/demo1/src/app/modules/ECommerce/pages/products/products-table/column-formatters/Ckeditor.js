import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import React, { useState } from "react"

import './ckeditor.css'


function Ckeditor() {
    const [text, setText] = useState("")
    return (
        <div>
            <div>
                <CKEditor 
                    editor={ClassicEditor}
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setText(data)
                    }}
                />
            </div>
            <div>
                <h2>Content</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Ckeditor