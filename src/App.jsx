import './App.scss';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <Container >
        <Typography 
          variant='h1'
          sx={{ my: 4, textAlign: "center", color: "primary.main"}}
        > 
          Services
        </Typography>

        <Typography variant='h2' sx={{ py: 2}}> 
          Overview
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: {xs: "column", md: "row"}, 
            justifyContent: 'space-between', 
            gap: 4,
          }}
        >
          {serviceList.map((service) => (
            <Paper elevation={3} sx={{ width: {xs: 1, md:320} }}>
              <Box sx={{ m: 3 }}>
                <Typography 
                  variant='h3'
                >
                  {service}
                </Typography>

                <Typography sx={{mt: 2}}> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit nihil laboriosam est labore veritatis modi sapiente itaque error, harum, maxime iusto dicta porro praesentium ratione quis molestias excepturi fugit alias. Aliquam iste eveniet aperiam quas illo non sequi molestias, dolorem omnis nihil. Natus facere dolor ipsam quod odit eveniet, incidunt enim blanditiis fugit iste laudantium similique non quasi reprehenderit quaerat, nam cumque eius dignissimos animi? Ducimus, laborum sunt ipsa dicta mollitia itaque tenetur eligendi aspernatur sapiente nesciunt consequatur blanditiis!
                </Typography>

                <Button variant='contained' color="secondary"sx={{ mt: 2 }} >Learn More</Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container> */}
    </>
  )
}

export default App
