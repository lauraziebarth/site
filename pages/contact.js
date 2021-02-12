import Link from 'next/link'
import Linkedin from '../public/images/linkedin.svg'
import Github from '../public/images/github.svg'
import Twitter from '../public/images/twitter.svg'

function Contact() {
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

            <h1>Just say hi.</h1>
            
            <h2>I'm always open to talk about new things.</h2>
            
            <div className="contact">
              <div className="email">
                <p>Mail me at</p>
                <p>lauragzie@gmail.com</p>
              </div>
              
              <div className="social">
                <p>Follow me</p>

                <div className="icons">
                  <a href="https://github.com/lauraziebarth" target="_blank" aria-label="Github">
                    <Github/>
                  </a>      
                  <a href="https://www.linkedin.com/in/laura-gabriela-ziebarth-07ab68115/" target="_blank" aria-label="Linkedin">
                    <Linkedin/>
                  </a>
                  <a href="https://twitter.com/likeamaze" target="_blank" aria-label="Twitter">
                    <Twitter/>
                  </a>
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

            h2 {
              font-weight: 300;
              font-size: 27px;
              margin-top: 15px;
              color: #858585; 
            }

            .contact {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              max-width: 30%;
              margin-top: 50px;
            }

            p:first-child {
              font-size: 15px;
              color: #858585;
            }

            .icons {
              margin-top: 7px;
            }

          `}
        </style>
      </main>
    )
  }
  
  export default Contact