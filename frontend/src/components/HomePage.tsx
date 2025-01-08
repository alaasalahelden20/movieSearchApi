import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="favorites">Favorites</Nav.Link>
            <Nav.Link href="signup">Sign Up</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Welcome Section */}
      <Container className="text-center my-5">
        <h1>Welcome to the Movie App!</h1>
        <p>Search for your favorite movies and manage your favorites!</p>
        <Button variant="primary" href="signup">Get Started</Button>
      </Container>

      {/* Footer */}
      <footer className="text-center py-4">
        <p>&copy; {new Date().getFullYear()} Movie App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
