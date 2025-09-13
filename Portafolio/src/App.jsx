import { useState } from "react";
import foto from './assets/foto.jpeg';
import salud from './assets/salud.png';
import gym from './assets/gym.png';
import ecommerce from './assets/ecommerce.png';
import cineFamily from './assets/cineFamily.png';
import cv from './assets/Ezequiel-Nieva-CV.pdf';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("experiencia");

  const proyectos = [
    { title: "Gym FitZone", desc: "Trabajo Grupal", tech: "Nest.js, Next.js, PostgreSQL...", img: gym, code: "https://github.com/EzequielNieva/GymFitZone", demo: "https://fitzzone.vercel.app" },
    { title: "Ecommer", desc: "Trabajo Individual", tech: "Nest.js, Swagger, PostgreSQL...", img: ecommerce, code: "https://github.com/EzequielNieva/Ecommer" },
    { title: "CineFamily", desc: "Trabajo Individual", tech: "JS, Express, MongoDB...", img: cineFamily, code: "https://github.com/EzequielNieva/CineFamily" },
    { title: "Proyecto Salud", desc: "Trabajo Grupal", tech: "Java, Spring Boot, MySQL...", img: salud, code: "https://github.com/EzequielNieva/ServicioSalud" }
  ];

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-left">
          <img src={foto} alt="Ezequiel Nieva" className="profile-photo mb-3" />
          <h2 className="mb-1">Ezequiel Nieva</h2>
          <h5 className="text-white mb-3">Full Stack Developer</h5>
          <div className="d-flex flex-column gap-2">
            <a href={cv} className="btn btn-warning btn-sm">Descargar CV</a>
            <a href="https://github.com/EzequielNieva" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/ezequielnieva/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">LinkedIn</a>
            <a href="mailto:nievaezequiel3@gmail.com" className="btn btn-success btn-sm">Contactame</a>
          </div>
        </div>
        <div className="profile-right">
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button className={`nav-link ${activeTab === "experiencia" ? "active" : ""}`} onClick={() => setActiveTab("experiencia")}>
                Experiencia
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === "proyectos" ? "active" : ""}`} onClick={() => setActiveTab("proyectos")}>
                Proyectos
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === "educacion" ? "active" : ""}`} onClick={() => setActiveTab("educacion")}>
                Educación
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === "sobreMi" ? "active" : ""}`} onClick={() => setActiveTab("sobreMi")}>
                Sobre Mi
              </button>
            </li>
          </ul>

          <div className="tab-content">
            {activeTab === "experiencia" && (
              <div>
                <h4>Experiencia Profesional</h4>

                <div className="mb-3">
                  <h5>Thaskify – Full Stack Web Developer</h5>
                  <p className="text-muted">Jun 2025 – Actualidad</p>
                  <ul>
                    <li>Desarrollo de funcionalidades críticas en el sistema de gestión de proyectos, incrementando la eficiencia de los usuarios y la escalabilidad de la plataforma.</li>
                    <li>Rediseño de componentes UI/UX que mejoran la navegación y reducen errores de usuario.</li>
                    <li>Refactorización de la lógica de recompensas y relaciones de base de datos, optimizando integridad y tiempos de respuesta.</li>
                    <li>Participación en revisiones de código, planificación de sprints y control de versiones con GitHub.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h5>Proyectos Destacados</h5>
                  <ul>
                    <li>
                      <strong>Gym FitZone (2024) – Proyecto grupal:</strong> Desarrollo de plataforma integral para gimnasios, incluyendo membresías, reservas, pagos y rutinas. Integración de Mercado Pago y diseño de base de datos relacional escalable. Tecnologías: Nest.js, Next.js, PostgreSQL.
                    </li>
                    <li>
                      <strong>E-commerce Backend (2024) – Proyecto individual:</strong> API RESTful escalable para gestión de productos, carrito y órdenes, documentada con Swagger. Tecnologías: Node.js, Nest.js, PostgreSQL.
                    </li>
                    <li>
                      <strong>Gestor de Turnos (2024) – Proyecto individual:</strong> Sistema de registro/login con notificaciones por email y módulo de reservas dinámicas. Tecnologías: React.js, Node.js, PostgreSQL, Nodemailer.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "proyectos" && (
              <div>
                <h4>Proyectos</h4>
                <div className="proyectos-carrusel">
                  {proyectos.map((p, i) => (
                    <div key={i} className="card proyecto-card">
                      <img src={p.img} className="card-img-top" alt={p.title} />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.desc}</p>
                        <p className="card-text text-muted">{p.tech}</p>
                        <div className="mt-auto">
                          {p.code && <a href={p.code} className="btn btn-warning me-2 mb-2 btn-sm" target="_blank" rel="noopener noreferrer">Código</a>}
                          {p.demo && <a href={p.demo} className="btn btn-warning mb-2 btn-sm" target="_blank" rel="noopener noreferrer">Demo</a>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "educacion" && (
              <div>
                <h5>Educación Profesional</h5>
                <ul>
                  <li>
                    <strong>Tecnicatura Universitaria en Programación – UPATecO</strong> (En curso)<br />
                    Formación en Frontend, Backend, bases de datos y desarrollo de apps móviles.
                    <br />Tecnologías aprendidas: Java, JavaScript, Python, C#, SQL.
                    <br />Metodologías: Agile, Scrum.
                    <br />Proyectos prácticos: diseño UI/UX, desarrollo full stack, integración de bases de datos y apps móviles.
                  </li>
                  <li>
                    <strong>Full Stack Web Developer – Henry Bootcamp</strong> (2024)<br />
                    800 horas de formación práctica en desarrollo web.
                    <br />Tecnologías: React.js, Node.js, PostgreSQL, MongoDB.
                    <br />Metodologías: Scrum y trabajo colaborativo.
                    <br />Proyectos prácticos: aplicaciones web completas con backend y frontend, control de versiones con GitHub.
                  </li>
                  <li>
                    <strong>Programador Full Stack – Argentina Programa 4.0</strong> (2023–2024)<br />
                    Formación en desarrollo web integral.
                    <br />Tecnologías: Java, Spring Boot, Spring Security, Spring Data, HTML, CSS, JavaScript, MySQL.
                    <br />Metodologías: Agile, Scrum.
                    <br />Proyectos prácticos: desarrollo de proyectos integradores frontend y backend con buenas prácticas.
                  </li>
                </ul>
                <h5>Educación Complementaria</h5>
                <ul>
                  <li>
                    <strong>Curso de Java – UTN Mendoza</strong> (2024, 70 h)<br />
                    Aprendizaje de fundamentos de Java y POO, desarrollo de aplicaciones de consola y manejo de estructuras de datos.
                  </li>
                  <li>
                    <strong>Java: De Cero a Experto – Udemy / Global Mentoring</strong> (2024, 106 h)<br />
                    Desarrollo de aplicaciones prácticas, introducción a frameworks, buenas prácticas de programación y testing.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "sobreMi" && (
              <div>
                <p>
                  Me llamo Ezequiel Nieva, soy de Salta, Argentina, y soy Desarrollador Full Stack con experiencia en desarrollo y programación de aplicaciones web y móviles escalables.
                </p>
                <p>
                  Actualmente estudio la Tecnicatura Universitaria en Programación en la Universidad Provincial UPATECO de Salta, buscando expandir mis conocimientos y entender a fondo el funcionamiento del software.
                </p>
                <p>
                  Desde mis primeros pasos en la programación, he enfrentado desafíos que han moldeado mis habilidades y enfoque profesional. Mi curiosidad por entender las aplicaciones web me llevó a adquirir competencias en diversas áreas de desarrollo.
                </p>
                <p>
                  He trabajado en proyectos individuales y grupales, lo que me ha permitido aprender a colaborar, enfrentar problemas complejos y mejorar mis habilidades técnicas y blandas. Me considero proactivo, adaptable y enfocado en los objetivos, con capacidad de liderazgo cuando se requiere y siempre abierto a nuevas ideas y aprendizajes.
                </p>

                <h5>Tecnologías y Frameworks</h5>
                <div className="d-flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "Node.js", "Express.js", "Nest.js", "Java", "Spring Boot"].map((s, i) => (
                    <span key={i} className="badge bg-secondary">{s}</span>
                  ))}
                </div>

                <h5>Bases de Datos</h5>
                <div className="d-flex flex-wrap gap-2">
                  {["MongoDB", "PostgreSQL", "MySQL"].map((s, i) => (
                    <span key={i} className="badge bg-secondary">{s}</span>
                  ))}
                </div>

                <h5>Herramientas y DevOps</h5>
                <div className="d-flex flex-wrap gap-2">
                  {["GitHub", "Docker", "Swagger", "Postman", "VS Code", "Slack"].map((s, i) => (
                    <span key={i} className="badge bg-secondary">{s}</span>
                  ))}
                </div>

                <h5>Metodologías de Trabajo</h5>
                <div className="d-flex flex-wrap gap-2">
                  {["Agile", "Scrum", "Trabajo Colaborativo", "Control de Versiones"].map((s, i) => (
                    <span key={i} className="badge bg-secondary">{s}</span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
