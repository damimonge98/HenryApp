import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Remarkable } from 'remarkable';
import "./readme.css"

export default function Readme (props) {
    console.log (props.title);
    console.log (props.url)

    const [readme, setReadme] = useState(null)
    const md = new Remarkable();
  
    var ReadmeUrl = props.url
    ReadmeUrl = ReadmeUrl.replace("https://github.com/","https://api.github.com/repos/" )
    ReadmeUrl = ReadmeUrl.replace("/tree/master", "/contents")
    ReadmeUrl = ReadmeUrl + "/README.md?ref=master"
    console.log(ReadmeUrl)


    const getRepoReadme = function () {
      axios.get(ReadmeUrl, {
        headers: {
          "Authorization": "token 2a0f242d2cf120c65ad72c8ba5804bf5404eff3c"
        }
      })
      .then ((res) => 
      setReadme(res.data.content))};

    useEffect (()=> {
        getRepoReadme()
    }, [ReadmeUrl])
    
    console.log(readme)

    var codeReadme = atob(readme)
    console.log(codeReadme)
    const firstTag = codeReadme.indexOf("<")
    const lastTag = codeReadme.lastIndexOf(">")
    console.log(firstTag)
    console.log(lastTag)
    const deleteHTML = codeReadme.substring(firstTag, lastTag)
    codeReadme = codeReadme.replace(deleteHTML, "")
    const newReadme = md.render(codeReadme)
    console.log(newReadme)
    return (
         <div className = "readme">
           {!readme? <div class="spinner-border text-light" role="status"></div>
           :
           <Fragment>
            <div className = "readme">
           <h1>Readme</h1>
           <div dangerouslySetInnerHTML={{__html: newReadme }}/>
           </div>
           </Fragment>
           }
        
        </div>

    )
    


} 

