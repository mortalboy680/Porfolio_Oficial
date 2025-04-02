import '../styles/components/main.css';
import 'boxicons';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='body'>
            <div className='bodyMe'>
            <h1 className='name'>
                <span className="firstName">Yago Gabriel</span>
                <span className="lastName"> Nigro Caserta</span>
            </h1>
            <h3 className='infoStudy'>
                Estudiante de ingeniera en sistemas de infromación
            </h3>
            <h4 className='age'>19 años</h4>
            </div>
            <div className='bodySkills'>
                <div className='bodySkillsBackground'></div>
                <ul className='bodySkillsUl'>
                    <li className='bodySkillsUlLi'>
                        <box-icon type='logo' name='git' className='bodySkillsUlLiIcons' color='#F05032'></box-icon> 
                    </li>
                    <li className='bodySkillsUlLi'>
                        <box-icon type='logo' name='github' className='bodySkillsUlLiIcons' color='#181717'></box-icon> 
                    </li>
                    <li className='bodySkillsUlLi'>
                        <box-icon name='html5' type='logo' className='bodySkillsUlLiIcons' color='#E34F26'></box-icon> 
                    </li>
                    <li className='bodySkillsUlLi'>
                        <box-icon name='css3' type='logo' className='bodySkillsUlLiIcons' color='#2E64FE'></box-icon> 
                        </li>
                    <li className='bodySkillsUlLi'>
                        <box-icon name='javascript' type='logo' className='bodySkillsUlLiIcons' color='#F7DF1E'></box-icon> 
                    </li>
                    <li className='bodySkillsUlLi'>
                        <box-icon name='react' type='logo' className='bodySkillsUlLiIcons' color='#61DAFB'></box-icon> 
                    </li>
                    <li className='bodySkillsUlLi'>
                    <box-icon name='nodejs' type='logo' className='bodySkillsUlLiIcons' color='#339933'></box-icon> 
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
