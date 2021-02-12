import Link from 'next/link'
import Html5 from '../public/images/html5.svg'
import Css3 from '../public/images/css3.svg'
import JavaScript from '../public/images/javascript.svg'
import Python from '../public/images/python.svg'
import MySQL from '../public/images/mysql.svg'
import Sql from '../public/images/sql.svg'
import APIRest from '../public/images/apirest.svg'
import AWS from '../public/images/aws.svg'
import Kanban from '../public/images/kanban.svg'
import Kibana from '../public/images/kibana.svg'
import Grafana from '../public/images/grafana.svg'
import Sentry from '../public/images/sentry.svg'
import Languages from '../public/images/language.svg'


function Skills() {
    return (

      <main>

        <div className="page-box">

          <div className="right-menu">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
            <Link href="/experience">
              <a>Experience</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            </div>

            <h1>Skills</h1>

            <div className="skills">
              <div className="languages">
                <div className="skills-icons">
                  <Html5/><p>HTML 5</p>
                </div> 
                <div className="skills-icons">
                  <Css3/><p>CSS 3</p>
                </div>
                <div className="skills-icons">
                  <Python/><p>Python</p>
                </div>
                <div className="skills-icons">
                  <JavaScript/><p>JavaScript</p>
                </div>
              </div>

              <div style={{ borderTop: "2px solid #dedede ", width: "80%"}}></div>

              <div className="tools">
                <div className="skills-icons">
                  <Sentry/><p>Sentry</p>
                </div>
                <div className="skills-icons">
                  <Kibana/><p>Kibana</p>
                </div>
                <div className="skills-icons">
                  <Grafana/><p>Grafana</p>
                </div>
                <div className="skills-icons">
                  <AWS/><p>AWS</p>
                </div>        
              </div>

              <div style={{ borderTop: "2px solid #dedede ", width: "80%"}}></div>

              <div className="others">
                <div className="skills-icons">
                  <Sql /><p>MySQL</p>
                </div>
                <div className="skills-icons">
                  <APIRest/><p>API Rest</p>
                </div>
                <div className="skills-icons">
                  <Kanban/><p>Kanban</p>
                </div>
              </div>

              <div style={{ borderTop: "2px solid #dedede ", width: "80%"}}></div>

              <div className="soft-skills">
                <div className="skills-icons">
                  <Languages/> <p>English (advanced) - Portuguese (native)</p>
                </div>
              </div>
              
            </div>

        </div>

  
        <style jsx>
          {`
            .page-box {
              display: flex;
              flex-direction: column;
              background-color: #F8F8F8;
              max-width: 1300px;
              margin: 100px auto;
              justify-content: space-between;
              padding-left: 70px;
            }

            .right-menu {
              display: flex;
              justify-content: flex-end;
              margin: 50px 100px;;
              font-size: 15px;
            }
  
            .right-menu a:not(:last-child) {
              margin-right: 1.5em;
            }
  
            .right-menu a:hover{
              background-color: #ffc7c7;
              border-radius: 7px;
              transition: background-color 0.2s;
            }

            a {
              text-decoration: none;
              color: #212121;
              padding: 5px;
            }

            h1 {
              font-size: 40px;
            }

            .languages, .tools, .others, .soft-skills {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 90%;
              flex-wrap: wrap;
              margin: 0 0 40px;
            }

            .skills-icons {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 40px;
              padding-right: 200px;
            }

            .skills-icons p {
              margin-left: 17px;
              font-size: 20px;
              color: #616161;
              width: 100px;
            }

            .soft-skills p {
              margin-left: 17px;
              font-size: 20px;
              color: #616161;
              width: 400px;   
            }

          `}
        </style>

      </main>

    )
  }
  
  export default Skills