import './App.css';

function App() {
  return (
    <div className="App">
      <div id="Page">
        <div id="Background"></div>
        <div class="mask" id="Mask">
          <div class="mask_top"></div>
          <div class="mask_bottom"></div>
        </div>

        <div class="frame" id="Frame">
          <div class="frame_line frame_line-left"></div>
          <div class="frame_line frame_line-right"></div>
          <div class="frame_line frame_line-top"></div>
          <div class="frame_line frame_line-bottom"></div>
        </div>

        <nav class="navbar" id="mainNav">
            <a class="nav_left" href="#landing">Home</a>
            <div class="nav_right">
              <a class="nav_link" href="#about">About</a>
              <a class="nav_link" href="#experience">Experience</a>
              <a class="nav_link" href="#projects">Projects</a>
              <a class="nav_link" href="#contact">Contact</a>
            </div>
        </nav>

        <div class="landing_page" id="home">
          <h1 class="landing_page_text">hi. my name is</h1>
          <br></br>
          <h1 class="landing_page_name">Adora Wu</h1>
          <br></br>
          <h1 class="landing_page_text">Aspiring Software Engineer</h1>
        </div>

        {/* <div class="about_page" id="about">
            <div class="about_blurb">
                <h2 class="about_header">about me</h2>
                <p class="about_text">I'm a student currently attending the 
                    University of Texas at Austin pursuing chemistry and computer science. I'm passionate about technology, natural sciences, and design. In my free time I enjoy digital art, video games, and trying new recipies! 
                </p>
            </div>
            <div class="about_pic">
                <img class="headshot" src="headshot.jpg" alt="A picture of me"></img>
            </div>
        </div> */}


      </div>
    </div>
  );
}

export default App;
