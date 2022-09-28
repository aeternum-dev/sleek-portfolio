import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader, publicationsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import PublicationData from "../../shared/opensource/publications.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div style={{marginTop : "30vh", width : "100vw"}}>
        <h3 style={{textAllign : "center"}}>Hello, the projects section is currently under development</h3>
        <h3 style={{textAllign : "center"}}>In the meanwhile, check out my github by clicking here 👉 <a href="github.com/aeternum-dev">Click me!</a></h3>
        </div>
      </div>
    );
  }
}

export default Projects;
