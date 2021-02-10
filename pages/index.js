import Link from 'next/link'
import Linkedin from '../public/images/linkedin.svg'
import Github from '../public/images/github.svg'
import Twitter from '../public/images/twitter.svg'

export default function Home() {
  
  const profilePhoro = 'https://avatars.githubusercontent.com/u/38667871?s=460&u=9026f6564ea2ca4056f7c44ca0200f159c442a73&v=4';

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
      
      <div className="profile">
        <div className="profile-text">
          <div className='name'>
            <h1>I'm</h1>
            <h1>Laura Gabriela Ziebarth</h1>
          </div>
          <h2>Beginner Full-Stack Web Developer. Interested in JS, Python, design systems & a11y.</h2>
        </div>  

        <div className='profile-image'>
            <img src={profilePhoro}/>
        </div>
      </div>

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


      <style jsx>
        {`
          .page-box {
            display: flex;
            flex-direction: column;
            background-color: #f7f7f7;
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
            padding-right: 1.5em;
          }

          .right-menu a:hover{
            background-color: #ffc7c7;
            border-radius: 7px;
            transition: background-color 0.2s;
          }

          .profile {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 100px;
          }

          .profile-text {
            display: flex;
            flex-direction: column;
            padding: auto;
            width: 70%;
          }
          
          .name {
            display: flex;
            justify-content: collum;
            margin: 0px;
            padding: 0px;
          }

          .name h1:not(:last-child){
            font-size: 50px;
            font-weight: 300;
            margin: 0px;
            padding-right: 10px;
          }

          .name h1:not(:first-child){
            font-size: 50px;
            font-weight: 500;
            margin: 0px;
          }

          .profile-text h2 {
            font-weight: 300;
            font-size: 27px;
            margin-top: 15px;
            color:#565759; 
          }

          .profile-image {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
          }

          .profile-image img {
            border-radius: 5px;
            width: 220px;
            height: 220px;
          }

          .icons {
            margin: 50px 100px;
          }

          a {
            text-decoration: none;
            color: #000000;
            padding: 5px;
          }

          .icons a:not(:last-child) {
            padding-right: 1.5em;
          }
        `}
      </style>
    
    </main>
  )
}