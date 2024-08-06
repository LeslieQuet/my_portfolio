import Home_section from '../Components/Home_sections';
import { about_content } from '../text_contents';

const About = () => {
    return (
        <Home_section
          id='about'
          title='About me'
          subtitle='Hi! I am Leslie Quetglas, Web Designer & Web Developer'
          content={about_content}
        />
    )
}

export default About