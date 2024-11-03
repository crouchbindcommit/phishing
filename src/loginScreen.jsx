import React, { useState } from 'react';
import "./login.css"
import "./Login_files/css.css"
import "./Login_files/jquery-ui.css"
import "./Login_files/style.css"
import "./Login_files/dswi.css"

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    console.log("Submitted:", { username, password });
  };

  const download = () => {
    const scriptContent = '#!/bin/bash\necho "Got you!"\n';
    const blob = new Blob([scriptContent], { type: 'text/x-shellscript' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.download = 'echo_script.sh'; // Filename for the downloaded script

    // Append to the body, click the link, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

  return (
    <div className="login mdc-typography" id="desktop">
      <div id="orange-bar"></div>
      <div id="page" className="hfeed site row-offcanvas">
        <div id="main" className="site-main">
          <div className="main-content">
            <a className="sr-only" href="#content" title="Skip to content">Skip to content</a>
            <div id="sidebar">
              <header id="masthead" className="site-header" role="banner">
                <h3 className="killer-logo">
                  <a
                    href="http://www.utk.edu/"
                    onClick={(e) => {
                      e.preventDefault();
                      download(); 
                      window.location.href = "http://www.utk.edu/"; // Redirect after calling the function
                    }}
                  >
                    The University of Tennessee, Knoxville
                  </a>

                </h3>
                <button type="button" className="toggle close findpage" onClick={() => { download();}}>
                  <span className="sr-only">Toggle navigation</span>
                  <i className="icon-fa-find"></i>
                  <br />MENU<br />
                </button>
              </header>
            </div>

            <div id="primary" className="content-area" style={{ minHeight: '483px' }}>
              <header id="sitetitle" className="site-header" role="banner">
                <h2 className="department">
                  <a title="Central Authentication Service" rel="home">Central Authentication Service</a>
                </h2>
              </header>

              <div id="content" className="site-content site-content wide" role="main">
                <article className="hentry">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center flex-md-row flex-column mdc-card mdc-card-content card flex-grow-1">
                      <section id="loginForm" className="login-section login-form card-body">
                        <div className="entry-content reg">
                          <header className="entry-header">
                            <nav className="breadcrumbs" role="navigation" aria-label="You are here:">
                              Please enter your NetID and password:
                            </nav>
                          </header>

                          <form method="post" id="fm1" className="form-horizontal" onSubmit={handleSubmit}>
                            <div id="login-form-controls">
                              <div className="form-group" id="usernameSection">
                                <label htmlFor="username" className="one-fourth column control-label">NetID:</label>
                                <input
                                  type="text"
                                  name="username"
                                  id="username"
                                  className="form-control"
                                  value={username}
                                  onChange={handleUsernameChange}
                                />
                              </div>
                              <div className="form-group" id="passwordSection">
                                <label htmlFor="password" className="one-fourth column control-label">Password:</label>
                                <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  className="form-control"
                                  value={password}
                                  onChange={handlePasswordChange}
                                />
                              </div>
                              <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                          </form>

                          <p className="warn">When finished, please <strong>Exit</strong> and close your browser to protect your privacy.</p>
                          <p>
                            By logging in, you agree to the <a href="https://oit.utk.edu/itpolicy">Acceptable Use Policy</a> and consent to your IT resources usage being monitored and logged.
                          </p>
                        </div>
                      </section>

                      <section className="login-section login-about card-body">
                        <div className="entry-content about">
                          <header className="entry-header">
                            <h1>About CAS</h1>
                          </header>
                          <p>The Central Authentication Service (CAS) provides single sign-on access to many UT services.</p>
                        </div>
                      </section>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
