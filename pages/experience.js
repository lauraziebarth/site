import Link from 'next/link'

export default function Experience() {
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

          <h1>Experience</h1>

          <h2>Technical Support - Mercos (January 2017 - Present)</h2>

          <p>
            At Mercos I am responsible for identifying bugs in production, performing tests, debugging and if possible fixing this problems. 
            I also work with MySQL everyday, making queries to identify and solve problems, and extract data to help other teams in customer related activities. To help other sectors understand how the product/features works, I have daily conversations and I'm used to lead trainings.
            I am also responsible for conducting homologation meetings with partners, helping the developers to do the best integration, with quality, according to our API. Finally, I've created and I still update internal documentation about the product, such as the API.  
          </p>

          <div style={{ borderTop: "2px solid #dedede ", width: "80%"}}></div>
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

            h2 {
              font-weight: 500;
              font-size: 20px;
              margin-top: 30px;
              text-align: justify:
              color:#565759; 
            }

            p {
              color: #858585;
              width: 80%;
              font-size: 15px;
              line-height: 25px;
              margin-top: 0px;
            }
          `}
        </style>

      </main>
    )
  }