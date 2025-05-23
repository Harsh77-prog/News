import React from 'react';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className=" bg-white text-white text-center py-5">
        <div className="container py-5" style={{ backgroundColor: 'rgb(224, 195, 255)', borderRadius: '10px' }}>
          <h1 className="display-4 fw-bold">About Taza-Khabar</h1>
          
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4">Our Mission</h2>
          <p className="lead">At <strong>Taza-Khabar</strong>, we believe in fast, fair, and fact-checked news. We’re here to cut through the noise and deliver what's important — to keep you informed and aware every day.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Taza-Khabar?</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4>⚡ Instant Updates</h4>
                <p>Real-time coverage on trending events so you're always in the loop.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4>✔️ Verified Sources</h4>
                <p>We partner with trusted sources and journalists to ensure accurate reporting.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4>🌐 Global & Local</h4>
                <p>We cover everything — from international headlines to local happenings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5">Meet the Team</h2>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img src="https://static.vecteezy.com/system/resources/previews/028/597/534/large_2x/young-cartoon-female-avatar-student-character-wearing-eyeglasses-file-no-background-ai-generated-png.png" className="card-img-top" alt="Editor" style={{objectFit: 'cover', height: '300px'}} />
                <div className="card-body">
                  <h5 className="card-title">Rihana jobels</h5>
                  <p className="card-text">Chief Editor</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg?w=2000" className="card-img-top" alt="Reporter" style={{objectFit: 'cover', height: '300px'}}/>
                <div className="card-body">
                  <h5 className="card-title">Richerd</h5>
                  <p className="card-text">Senior Reporter</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img src="https://img.freepik.com/premium-photo/3d-avatar-gaming-website-nice-guy-avatar-wearing-headphone-made-with-ai_744422-10901.jpg?w=2000" className="card-img-top" alt="Developer"style={{objectFit: 'cover', height: '300px'}} />
                <div className="card-body">
                  <h5 className="card-title">stelon </h5>
                  <p className="card-text">Tech Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-5">Technology We Use</h2>
          <div className="row justify-content-center">
            <div className="col-6 col-md-2 mb-3">
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="img-fluid" />
              <p>React.js</p>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="Bootstrap" className="img-fluid" />
              <p>Bootstrap 5</p>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" className="img-fluid" />
              <p>Node.js</p>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="MongoDB" className="img-fluid" />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-5 bg-secondary text-white text-center">
        <div className="container">
          <h2 className="mb-4">Stay Informed with Taza-Khabar</h2>
          <p className="mb-4">Join our newsletter to get breaking news alerts directly in your inbox.</p>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-dark text-white">
        <div className="container">
          <p className="mb-0">© {new Date().getFullYear()} Taza-Khabar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default About;
