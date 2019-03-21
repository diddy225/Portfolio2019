import React from "react";
import { Button, Header, Grid, Icon, Card } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import portfolioInfo from "./portfolioInfo";
import "./homeinfo.css";

const projectInfo = portfolioInfo.map(project => {
  return (
    <ProjectCard 
      name={project.name}
      year={project.year}
      url={project.url}
      description={project.description}
      icon={project.icons.map(icon => <Icon name={icon}/>)}
    />
  )
})

const HomeInfo = () => {
  return (
    <div>
      <Grid
        stackable
        divided="vertically"
        centered
        style={{ marginTop: "100px" }}
      >
        <Grid.Row columns={2} style={{ marginBottom: "50px" }}>
          <Grid.Column width={9}>
            <Header as={"h1"} style={{ color: "#A0924C" }}>
              FULL-STACK WEB DEVELOPER
            </Header>
            <p>
              Web Developer and US Army Veteran with more than 3 years of
              experience getting my hands dirty with coding and electronics. I
              am a graduate of General Assembly’s Front End Web Development
              Course, and Georgia Tech’s Full Stack Coding Bootcamp. I have
              experience with web development tech like React, CSS3, HTML5,
              NodeJs, Express, and Databases. I’m a lifelong learner who enjoys
              learning new languages to add to my skill set. Writing code is
              fun, but watching my applications come to life is satisfying. The
              Army taught me, attention to detail, communication, adaptability,
              patience, and problem-solving. As a Web Developer, I have built
              responsive websites and web apps, using the skills and tools
              listed above.
            </p>
          </Grid.Column>

          <Grid.Column width={3} textAlign="center">
            <Header as={"h1"} style={{ color: "#A0924C" }}>
              {" "}
              CONTACT ME{" "}
            </Header>
            <p>
              Feel free to contact me with any questions, opportunities, resume
              requests or anything else you might need!
            </p>
            <Button
              as={"a"}
              href="mailto:matthew.j.carpenter1@gmail.com"
              basic
              style={{ width: "250px" }}
            >
              Email
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} style={{ paddingTop: "50px" }}>
          <Grid.Column width={9}>
            <Header as="h1">EXPERIENCE</Header>
            <Grid.Column className="experience">
              <Header as="h3">
                <Icon name="certificate" style={{ color: "#a0924c" }} />
                GEORGIA TECH - FULL STACK CODING BOOTCAMP(GRADUATE)
              </Header>
              <ul className="list">
                <li>
                  <Icon name="flask" />
                  Computer Science applied to JavaScript
                </li>
                <li>
                  <Icon name="database" />
                  Databases (MySQL, MongoDB)
                </li>
                <li>
                  <Icon name="server" />
                  Server Side Development (Node.js, Express, MERN Stack)
                </li>
                <li>
                  <Icon name="computer" />
                  Browser Based Technologies (HTML, CSS, Javascript, Jquery,
                  Bootstrap)
                </li>
                <li>
                  <Icon name="reply" />
                  Deployement (Heroku, Git)
                </li>
                <li>
                  <Icon name="microsoft" />
                  C# (ASP.Net)
                </li>
                <li>
                  <Icon name="write" />
                  Quality Assurance (Writing Tests)
                </li>
                <li>
                  <Icon name="github" />
                  Github Version Control
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column className="experience">
              <Header as="h3">
                <Icon name="certificate" style={{ color: "#a0924c" }} />
                GENERAL ASSEMBLY - FRONT END WEB DEVELOPER(GRADUATE)
              </Header>
              <ul className="list">
                <li>
                  <Icon name="html5" />
                  HTML 5
                </li>
                <li>
                  <Icon name="css3" />
                  CSS 3
                </li>
                <li>
                  <Icon name="js" />
                  JavaScript
                </li>
                <li>
                  <Icon name="js square" />
                  jQuery
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column className="experience">
              <Header as="h3">
                <Icon name="certificate" style={{ color: "#a0924c" }} />
                Strayer University - Information Systems (2016)
              </Header>
            </Grid.Column>
            <Grid.Column className="experience">
              <Header as="h3">MY SKILLS</Header>
              <p>
                Currently Learning: Docker/K8S, RabbitMQ, Golang <br />
                <br />
                HTML5 | CSS3 | Javascript | jQuery | NodeJS | REST| Express |
                MongoDB | EJS | AJAX | Bootstrap | GIT | Github | Media Queries
                | JSON | API | The Command Line(Bash) | Computer Science
                Fundamentals | mySQL | Sequelize | React | Yarn | Redux | React
                Router Dom | React Router
              </p>
            </Grid.Column>
          </Grid.Column>

          <Grid.Column width={3} textAlign="center">
            <Grid.Column className="experience aboutme">
              <Header as={"h1"} style={{ color: "#A0924C" }}>
                ABOUT ME
              </Header>
              <p>
                I have been in technology my entire life. I spent 8 years in the
                U.S. Army, as a system administrator. While in the military, I
                also worked for Verizon Wireless in various roles. I am a recent
                graduate of the Georgia Tech Coding Bootcamp where we focused on
                the MERN stack, I also possess a certificate of completion from
                General Assembly Front End Web Developer course.
              </p>
              <Button
                as={"a"}
                href="https://www.github.com/diddy225"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "200px" }}
                basic
              >
                PROJECTS
              </Button>
            </Grid.Column>
            <Grid.Column className="aboutme" style={{ marginBottom: "50px" }}>
              <Header as="h4" style={{ color: "#A0924C" }}>
                WHAT YOU WILL GET FROM ME
              </Header>
              <p>
                I am very detailed, motivated, and willing to learn. I have
                learned many skills throughout my life. Working with Verizon
                Wireless and The U.S. Army for 13 years, I have management
                skills as well as a sales background. I consistanly push myself
                to learn new technology and use those skills to build new
                things.
              </p>
            </Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Header style={{ textAlign: "center", textDecoration: "underline" }}>
        PROJECTS
      </Header>
      <Card.Group centered itemsPerRow="5" style={{ marginBottom: "20px" }}>
        {projectInfo}
      </Card.Group>
    </div>
  );
};

export default HomeInfo;
