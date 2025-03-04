import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import ProjectItemWrapper from "./projectSection.style";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../reusecore/Button";
import CatalogLogo from "../../../assets/images/catalog-icon/catalog";

const Projects = () => {
  const projectsIcon = "./images/projects.svg";

  const projectImage2 = "../../../assets/images/app/projects/smp.png";
  const projectImage3 = "../../../assets/images/app/projects/meshery-logo-light.png";
  const projectImage4 = "../../../assets/images/app/projects/nighthawk-logo.png";
  const meshmapLogo = "../../../assets/images/meshmap/icon-only/meshmap-icon.svg";

  return (
    <ProjectItemWrapper id="projects">
      <Container>
        <Row>
          <div className="project-title">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="75%"
            >
              <h2>
                Operate cloud native infrastructure <span>with confidence</span>.
              </h2>
            </SectionTitle>
          </div>
        </Row>
        <Row>
          <div className="project__block__wrap">
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/cloud-native-management/meshmap">
                <div className="project__block__inner">
                  <StaticImage loading="lazy" src={meshmapLogo} alt="MeshMap Logo" width={50} height={80} imgStyle={{ width: "24px", height: "39px" }} />
                  <p>MeshMap</p>
                  <h3>Collaborative GitOps</h3>
                  {/* <h3>Multiplayer Kubernetes by Design</h3> */}
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/cloud-native-management/meshery">
                <div className="project__block__inner">
                  <StaticImage loading="lazy" src={projectImage3} alt="Meshery Logo"  width={80} height={80} imgStyle={{ width: "40px", height: "40px" }} />
                  <p>Meshery</p>
                  <h3>Cloud Native Management and Governance</h3>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/projects/service-mesh-performance">
                <div className="project__block__inner">
                  <StaticImage loading="lazy" src={projectImage2} alt="SMP Logo" width={294} height={120} imgStyle={{ width: "98px", height: "40px" }} />
                  <p>Cloud Native Performance</p>
                  <h3>Infrastructure Value Measurement</h3>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/projects/nighthawk">
                <div className="project__block__inner">
                  <StaticImage loading="lazy" src={projectImage4} alt="Nighthawk Logo" width={100} height={80} imgStyle={{ width: "50px", height: "40px" }}/>
                  <p>Nighthawk</p>
                  <h3>Distributed Performance Management for Microservices</h3>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Link className="project-card" to="/service-mesh-landscape">
                <div className="project__block__inner">
                  {/* <StaticImage src={catalogLogo} alt="Meshery Catalog" height={40} /> */}
                  <CatalogLogo height="40px" width="auto" style={{ margin: "10px auto", minHeight: "40px" }} />
                  <p>Meshery Catalog</p>
                  <h3>Patterns and Templates</h3>
                </div>
              </Link>
            </Col>
          </div>
        </Row>
        {/* <div className="button">
          <Button secondary url="/projects" title="Learn More" />
        </div> */}
        <Row>
          <Col xs={12}>
            <div className="description">
              <div className="button">
                <Button secondary className="banner-btn" title="All Projects" url="/projects">
                  <StaticImage loading="lazy" src={projectsIcon} alt="All Layer5 Projects" height={18} />&nbsp;
                </Button>
              </div>
              <p><span>We are enablers.</span> At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration. We help organizations look at their infrastructure differently, asking it "what have you done for me lately?". Our suite of multi-mesh, multi-cloud infrastructure management products — all with open source projects at their core — underpin each of our offerings.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </ProjectItemWrapper>
  );
};

export default Projects;
