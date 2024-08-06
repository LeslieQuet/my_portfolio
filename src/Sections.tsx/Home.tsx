import './../styles.css';
import { CssBaseline, Container, Typography } from '@mui/material';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* Home Section */}
        <header id="home" style={{ textAlign: 'center', padding: '50px 0' }}>
          <Typography variant="h4" component="p">Hello, I'm</Typography>
          <Typography variant="h2" component="h1">LESLIE QUETGLAS</Typography>
          <Typography variant="h5" component="span">FULL STACK DEVELOPER</Typography>
        </header>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </Container>
    </>
  );
}

export default Home