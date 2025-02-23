import '../css/Resume.css'

const Resume = () => {
  const resumeUrl = "/ss.pdf";
  const resumeUrl1 = "/Resume.png";

  return (
    <div className="resume-container">
      <h1>My Resume</h1>

      
      <div>
        <img src={resumeUrl1} title="Resume" width="100%" height="100%"></img>
      </div>
      <a href={resumeUrl} download="Saabika_Roshni_Resume.pdf" className="download-button">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
