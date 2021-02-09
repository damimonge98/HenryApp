import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Remarkable } from 'remarkable';
import "./readme.css";



export default function Readme(props) {
  if (props.url) {
  const [readme, setReadme] = useState(null);
  const md = new Remarkable();

  var ReadmeUrl = props.url;
  ReadmeUrl = ReadmeUrl.replace("https://github.com/", "repos/");
  ReadmeUrl = ReadmeUrl.replace("/tree/master", "/contents");
  ReadmeUrl = ReadmeUrl + "/README.md?ref=master";



  const getRepoReadme = () => {
    axios.post("http://localhost:5000/readme/", { ReadmeUrl })
      .then(
        res => {
          if (!res.data.content) {
            return;
          }
          setReadme(res.data.content);
        }
      );
  };

  useEffect(() => {
    getRepoReadme();
  }, [ReadmeUrl]);

  var codeReadme = atob(readme);
  codeReadme = codeReadme.replaceAll("Ã©", "e");
  codeReadme = codeReadme.replaceAll("Ã³", "o");
  codeReadme = codeReadme.replaceAll("Ã", "á");
  codeReadme = codeReadme.replaceAll("á¡", "á");
  codeReadme = codeReadme.replaceAll("Â", "");
  codeReadme = codeReadme.replaceAll("áº", "ú");
  codeReadme = codeReadme.replaceAll("aá", "ai");
  var newReadme = md.render(codeReadme);
  const firstTag = newReadme.indexOf("<h2>");
  const deleteHTML = newReadme.substring(firstTag);
  newReadme = deleteHTML;


  return (

    <div className="readme">
      { !readme ?
        <Fragment>

          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </Fragment>

        :
        <Fragment>
          <h1 className="h1">Readme</h1>
          <div dangerouslySetInnerHTML={{ __html: newReadme }} />
        </Fragment>
      }

    </div>

  )} else {
    return (
      <div>
      <h1 className = "h1Image">Esta lecture  <br/> no tiene Readme </h1>
      <img src = "https://www.sciener.my/wp-content/uploads/2018/10/scienerc-404-error-.png" className = "image"/>
      </div>
      )
  }



}
