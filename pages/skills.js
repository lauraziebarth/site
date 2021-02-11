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
import Idioma from '../public/images/idioma.svg'


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

            <div className="skills-icons">
              <div className="languages">
                <div className="a">
                  <Html5/><p>HTML 5</p>
                </div> 
                <div className="a">
                  <Css3/><p>CSS 3</p>
                </div>
                <div className="a">
                  <Python/><p>Python</p>
                </div>
                <div className="a">
                  <JavaScript/><p>JavaScript</p>
                </div>
              </div>

              <div style={{ borderTop: "2px solid #dedede ", width: "80%"}}></div>

              <div className="tools">
                <div className="a">
                  <Sentry/><p>Sentry</p>
                </div>
                <div className="a">
                  <Kibana/><p>Kibana</p>
                </div>
                <div className="a">
                  <Grafana/><p>Grafana</p>
                </div>
                <div className="a">
                  <AWS/><p>AWS</p>
                </div>        
              </div>

              <div style={{ borderTop: "2px solid #dedede ", width: "80%"}}></div>

              <div className="others">
                <div className="a">
                  <Sql /><p>MySQL</p>
                </div>
                <div className="a">
                  <APIRest/><p>API Rest</p>
                </div>
                <div className="a">
                  <Kanban/><p>Kanban</p>
                </div>
              </div>

              <div style={{ borderTop: "2px solid #dedede ", width: "80%"}}></div>

              <div className="soft-skills">
                <div className="a">
                  <Idioma/> <p>English (advanced) / Portuguese (native)</p>
                </div>
              </div>
              
            </div>

        </div>

  
        <style jsx>
          {`
            .page-box {
              display: flex;
              flex-direction: column;
              background-color: #f7f7f7;
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
              color: #000000;
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
              margin-bottom: 30px;
            }

            .a {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 30px;
              margin-right: 200px;
            }

            .a p {
              margin-left: 17px;
              font-size: 20px;
              color: #616161;
            }
            
          `}
        </style>

      </main>

    )
  }
  
  export default Skills