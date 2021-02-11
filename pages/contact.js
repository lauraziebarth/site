import Link from 'next/link'

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

            <h1>Contact</h1>

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
          `}
        </style>
      </main>
    )
  }
  
  export default Contact