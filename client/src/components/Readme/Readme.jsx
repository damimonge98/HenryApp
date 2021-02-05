import React, { useState, useEffect } from "react";
import axios from "axios";
import { Remarkable } from 'remarkable';

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
   //https://api.github.com/repos/soyHenry/FT-M1/tree/master/00-IntroToCS

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
    
    const codeReadme = atob(readme)
    const newReadme = md.render(codeReadme)

    return (
         <div className = "readme">
           {!readme? <div class="spinner-border text-light" role="status"></div>
           :
           <div dangerouslySetInnerHTML={{__html: newReadme }}/>
           }
        
        </div>

    )
    


} 

