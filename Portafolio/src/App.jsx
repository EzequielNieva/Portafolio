import foto from './assets/foto.jpeg';
import salud from './assets/salud.png';
import gym from './assets/gym.png'
import ecommerce from './assets/ecommerce.png'
import cineFamily from './assets/cineFamily.png'
import cv from './assets/CV-Ezequiel-Nieva.pdf'
import './App.css';

function App() {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark border-body" data-bs-theme="dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" id='inicio' aria-current="page" href="#incio">Inicio</a>
                <a className="nav-link" href="#proyectos">Mis Proyectos</a>
                <a className="nav-link" href="#MiCamino">Mi Camino</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="container my-5">
          <div className="bg-dark text-light p-5 rounded">

            <div className="center-image col-sm-8 py-5 mx-auto">
              <img src={foto} alt="Descripción de la imagen" className="bd-placeholder-img rounded-circle" width="160" height="160" />
              <h1 className="display-5 fw-normal">Ezequiel Nieva</h1>
              <p className="fs-4">Desarrollador web FullStack "Backend"</p>
              <p className="fs-5">Bienvenido a mi espacio creativo, dedicado a construir soluciones efectivas. Navega por mi portfolio para conocer más sobre mis proyectos y habilidades. ¡Espero que disfrutes la visita!</p>
              <p>
                <a className="btn btn-warning mb-2 me-2 me-sm-3" href="https://github.com/EzequielNieva" target="_blank" role="button">GitHub</a>
                <a className="btn btn-warning mb-2 me-2 me-sm-3" href="https://www.linkedin.com/in/ezequielnieva/" target="_blank" role="button">LinkedIn</a>
                <a className="btn btn-warning mb-2 me-2 me-sm-3" href="https://mail.google.com/mail/?view=cm&to=nievaezequiel3@gmail.com" target="_blank" role="button">Contactáme</a>
                <a className="btn btn-warning mb-2 me-2 me-sm-3" href={cv} role="button" download>Descargar CV</a>
              </p>
            </div><hr />

            <div id="proyectos" className="col-sm-8 py-5 mx-auto">
              <h1 className="display-6 fw-normal text-center">Mis Proyectos Destacados</h1>

              <div className="row row-cols-1 py-3 row-cols-md-2 g-4">

                <div className="col">
                  <div className="card bg-secondary text-light h-100 d-flex flex-column">
                    <img src={gym} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">Gym FitZone</h5>
                      <p className="card-text">Trabajo Grupal</p>
                      <p className="card-text">
                        Tecnologias: Nest.js, Next.js, Bcrypt, Cloudinary, Mercadopago, Nodemailer, TypeORM, PostgreSQL, Passport-google-oauth20, Formik, Tailwind CSS, Render y Vercel.
                      </p>
                      <div className="mt-auto">
                        <a href="https://github.com/EzequielNieva/GymFitZone" className="btn btn-warning me-1" target="_blank">Codigo</a>
                        <a href="https://fitzzone.vercel.app" className="btn btn-warning" target="_blank">Enlance</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-secondary text-light h-100 d-flex flex-column">
                    <img src={salud} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">Servicio Salud</h5>
                      <p className="card-text">Trabajo Grupal</p>
                      <p className="card-text">
                        Tecnologias: Java, Html, Css, JavaScript , Spring Boot, Spring Security, Spring Data JPA, Thymeleaf, Lombok, MySQL, Bcrypt.
                      </p>
                      <div className="mt-auto">
                        <a href="https://github.com/EzequielNieva/ServicioSalud" className="btn btn-warning" target="_blank">Codigo</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-secondary text-light h-100 d-flex flex-column">
                    <img src={ecommerce} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">Ecommer</h5>
                      <p className="card-text">Trabajo Individual</p>
                      <p className="card-text">
                        Tecnologias: Nest.js, Swagger, JWT, Bcrypt, PostgreSQL, TypeORM y Cloudinary.
                      </p>
                      <div className="mt-auto">
                        <a href="https://github.com/EzequielNieva/Ecommer" className="btn btn-warning" target="_blank">Codigo</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-secondary text-light h-100 d-flex flex-column">
                    <img src={cineFamily} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">CineFamily</h5>
                      <p className="card-text">Trabajo Individual</p>
                      <p className="card-text">
                        Tecnologias: JavaScript, Express, Axios, Mongoose, MongoDB y Bootstrap.
                      </p>
                      <div className="mt-auto">
                        <a href="https://github.com/EzequielNieva/CineFamily" className="btn btn-warning" target="_blank">Codigo</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <hr />

            <div id="MiCamino" className="col-sm-8 py-5 mx-auto">
              <h1 className="display-6 fw-normal text-center">Desafíos Superados y Habilidades Adquiridas</h1>

              <div className="row mt-4 align-items-center">
                <div className="col-md-4 mb-4 mb-md-0">
                  <img src={foto} alt="Ezequiel Nieva - Desarrollador Web" className="bd-placeholder-img rounded-circle img-fluid" width="180" height="180" />
                </div>
                <div className="col-md-8">
                  <p className="fs-5">
                    Desde mis primeros pasos en la programación, he enfrentado desafíos que han moldeado mis habilidades y enfoque profesional. Mi viaje comenzó con la curiosidad por entender las aplicaciones web, y con el tiempo he adquirido competencias en diversas áreas de desarrollo.
                  </p>
                  <p className="fs-5">
                    He trabajado en proyectos tanto individuales como grupales, lo que me ha permitido aprender a colaborar y enfrentar problemas complejos. Cada desafío ha sido una oportunidad para crecer y mejorar mis habilidades técnicas y blandas.
                  </p>
                </div>
              </div>

              <h2 className="mt-4">Tecnologías que Manejo</h2>
              <p className="mt-3 fs-5">
                <span className="badge bg-secondary me-1">JavaScript</span>
                <span className="badge bg-secondary me-1">Node.js</span>
                <span className="badge bg-secondary me-1">Express</span>
                <span className="badge bg-secondary me-1">Nest.js</span>
                <span className="badge bg-secondary me-1">TypeScript</span>
                <span className="badge bg-secondary me-1">Java</span>
                <span className="badge bg-secondary me-1">Spring Boot</span>
                <span className="badge bg-secondary me-1">Spring Security</span>
                <span className="badge bg-secondary me-1">Swagger</span>
                <span className="badge bg-secondary me-1">PostgreSQL</span>
                <span className="badge bg-secondary me-1">MySQL</span>
                <span className="badge bg-secondary me-1">MongoDB</span>
                <span className="badge bg-secondary me-1">HTML</span>
                <span className="badge bg-secondary me-1">CSS</span>
                <span className="badge bg-secondary me-1">React</span>
                <span className="badge bg-secondary me-1">Thymeleaf</span>
                <span className="badge bg-secondary me-1">Axios</span>
                <span className="badge bg-secondary me-1">Bootstrap</span>
                <span className="badge bg-secondary me-1">GitHub</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-light text-center py-3 mt-5">
        <div className="container">
          <p className="mb-0">
            © 2024 Ezequiel Nieva. Todos los derechos reservados.
            <a id='inicio' className="text-warning me-2 ms-4" href="#inicio">Inicio</a>
            <a href="https://mail.google.com/mail/?view=cm&to=nievaezequiel3@gmail.com" className="text-warning ms-2" target="_blank" rel="noopener noreferrer">Contactame</a>
          </p>
        </div>
      </footer>


    </>
  );
}

export default App;
