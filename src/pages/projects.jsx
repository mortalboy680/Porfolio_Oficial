import '../styles/pages/projects.css';
import 'boxicons';

const projects = [
    {
        title: "Mi página web",
        image: "./Proyectos/proyecto1.png",
        technologies: ["javascript", "css3", "git", "react"]
    },
    {
        title: "Otro Proyecto",
        image: "/Proyectos/proyecto2.png",
        technologies: ["html5", "sass", "github"]
    },
    {
        title: "Otro Proyecto",
        image: "/Proyectos/proyecto2.png",
        technologies: ["html5", "sass", "github"]
    },
    {
        title: "Otro Proyecto",
        image: "/Proyectos/proyecto2.png",
        technologies: ["html5", "sass", "github"]
    },
    {
        title: "Otro Proyecto",
        image: "/Proyectos/proyecto2.png",
        technologies: ["html5", "sass", "github"]
    },
    {
        title: "Otro Proyecto",
        image: "/Proyectos/proyecto2.png",
        technologies: ["html5", "sass", "github"]
    },
    
];


function Home() {
    return (
        <div className='body'>
            <div className='proyectDivBody'>
            {projects.map((project, index) => (
                <div key={index} className='proyectDivElement'>
                    <h2>{project.title}</h2>
                    <div className='proyectDivElementImg'>
                        <img src={project.image} alt={project.title} />
                    </div>
                    <ul className="proyectDivElementUl">
                        {project.technologies.map((tech, techIndex) => (
                            <li key={techIndex} className='proyectDivElementUlLi'>
                                <box-icon type='logo' name={tech}></box-icon>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Home;