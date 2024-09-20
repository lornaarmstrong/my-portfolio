// Importing images
import grad_hat from "../../assets/images/grad-hat.jpg";

export const EdinburghModalContent = () => (
  <>
    <div className="modal-header-container">
      <div className="modal-header">University of Edinburgh</div>
      <div className="modal-date">Date: 2018 - 2022</div>
    </div>
    <div className="modal-main-edu">
      <img src={grad_hat} alt="Image of Graduation Hat" />
      <p className="modal-paragraph">
        I obtained a <b>BSc in Computer Science</b> from the University of
        Edinburgh, from September 2018 to May 2022. This was the start of my
        Software Engineering journey. I was able to take advantage of the
        quality academic teaching, opportunity to explore topics independently,
        and to sign up to various societies to enrichen my experience. I also
        took part in various tech societies - Women in STEM Society, HOPPERS
        Society, and CompSoc Society - and additional societies for new skills,
        including Linguistics, Swing Dance and Ballroom societies.
      </p>
    </div>
    <div className="modal-header">Modules Taken</div>
    <div className="modal-body-edu">
      <div className="column">
        <p>
          <b>Year 1</b>
        </p>
        <ul>
          <li>Linear Algebra</li>
          <li>Object-Oriented Programming</li>
          <li>Data & Analysis</li>
          <li>Calculus & Applications</li>
          <li>Foundation Arabic</li>
          <li>Spanish Language 1</li>
        </ul>
        <p>
          <b>Year 2</b>
        </p>
        <ul>
          <li>Software Engineering</li>
          <li>Discrete Maths</li>
          <li>Computer Systems</li>
          <li>Machine Learning</li>
          <li>Algorithms & DS</li>
          <li>Spanish Language 2</li>
        </ul>
      </div>
      <div className="column">
        <p>
          <b>Year 3</b>
        </p>
        <ul>
          <li>Inf Large Practical</li>
          <li>Software Testing</li>
          <li>System Design Project</li>
          <li>Computer Security</li>
          <li>Operating Systems</li>
          <li>Intro to Databases</li>
          <li>Professional Issues</li>
        </ul>
        <p>
          <b>Year 4</b>
        </p>
        <ul>
          <li>Honours Project</li>
          <li>Applied Machine Learning</li>
          <li>Human Computer Interaction</li>
          <li>The Human Factor</li>
          <li>Computing in Classrooms</li>
        </ul>
      </div>
      <div className="column">
        <div className="callout">
          <p>
            <b>Degree Classification:</b>
          </p>
          <p>First Class</p>
          <p>
            <b>Awards & Scholarships:</b>
          </p>
          <ul>
            <li className="award_list_item">
              KAL First Prize for System Design
            </li>
            <li className="award_list_item">
              Edinburgh Award for Industry Experience
            </li>
            <li className="award_list_item">RBS Informatics Scholar</li>
            <li className="award_list_item">DHL UK Undergrad Scholar</li>
          </ul>
          <h1>🏆</h1>
        </div>
      </div>
    </div>
  </>
);
