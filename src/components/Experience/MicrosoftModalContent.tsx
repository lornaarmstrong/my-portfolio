// Importing images
import telephone from "../../assets/images/telephone.jpg";

export const MicrosoftModalContent = () => (
  <>
    <div className="modal-header-container">
      <div className="modal-header">Microsoft - Software Engineer</div>
      <div className="modal-date">Date: Sep 2022 - Aug 2024</div>
    </div>
    <div className="modal-two-columns">
      <div className="left-column">
        <p className="team-descriptor">
          <strong>Team:</strong> Perimeta, Azure for Operators
        </p>
        <p className="experience-description">
          For two years, I worked on a SIP SBC product within Azure for
          Operators - a telecommunications devision within Microsoft. The team I
          worked in was previously part of Metaswitch, prior to their
          acquisition. I took on a range of different work, including working on
          key features for the SBC. I also took sole ownership of the licensing
          area of the product. This role required a thorough understanding of
          security protocols, cloud technologies, and open-source integration,
          which I executed while managing technical leadership responsibilities.
          Outside of my technical role, I was also involved in several Diversity
          and Inclusion initiatives - most notably, leading a global mentoring
          initiative for a women and minority gender ERG.
        </p>
        <img src={telephone} alt="Illustration of Old-Fashioned Telephone" />
      </div>
      <div className="right-column">
        <h2>Tech Stack</h2>
        <ul>
          <li>C Programming</li>
          <li>Python Programming</li>
          <li>Bash Scripting</li>
          <li>XML</li>
          <li>Docker</li>
          <li>Linux</li>
          <li>Microsoft Azure</li>
        </ul>
        <h2>Skills</h2>
        <ul>
          <li>Leadership</li>
          <li>Ownership</li>
          <li>Collaboration</li>
          <li>Communication</li>
        </ul>
      </div>
    </div>
  </>
);
