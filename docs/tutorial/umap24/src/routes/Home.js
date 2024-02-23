import { useEffect } from "react";
import "./Home.css";

function Home() {
  let offsets = [];
  useEffect(() => {
    window.addEventListener("load", onWindowLoaded);
    window.addEventListener("scroll", onWindowScroll);
  }, []);

  const onWindowLoaded = () => {
    const ids = [
      "abstract",
      "audience",
      "prereq",
      "outline",
      "presenters",
      "download",
    ];
    const topMargin =
      parseInt(getComputedStyle(window.document.body).fontSize) * 6;
    offsets = ids.map((id) => {
      const offset =
        document.getElementById("section-title-" + id)?.offsetTop -
        topMargin -
        15;
      return {
        id,
        offset,
        endOffset:
          offset + document.getElementById(`section-${id}`).offsetHeight - 20,
      };
    });
  };

  const activeMenuItem = (id) => {
    document.querySelector(".side-menu li.active")?.classList?.remove("active");
    document.getElementById(id).classList.add("active");
  };

  const activeSection = (id) => {
    document
      .querySelector(".home-content section.active")
      ?.classList?.remove("active");
    document.getElementById(`section-${id}`).classList.add("active");
  };

  const onWindowScroll = (e) => {
    e.preventDefault();
    const currentPosition = window.pageYOffset;
    for (let index = 0; index < offsets.length; index++) {
      const section = offsets[index];
      if (
        section.offset <= currentPosition &&
        section.endOffset > currentPosition
      ) {
        activeMenuItem(section.id);
        activeSection(section.id);
        break;
      }
    }
  };

  return (
    <div className="home-content">
      <section id="section-abstract">
        <span id="section-title-abstract" className="section-title">
          Abstract
        </span>
        <div className="section-body">
          Collaborative team recommendation involves selecting users with
          certain skills to form a team who will, more likely than not,
          accomplish a complex task successfully. To automate the traditionally
          tedious and error-prone manual process of team formation, researchers
          from several scientific spheres have proposed methods to tackle the
          problem. In this tutorial, while providing a taxonomy of team
          recommendation works based on their algorithmic approaches to model
          skilled users in collaborative teams, we perform a comprehensive and
          hands-on study of the graph-based approaches that comprise the
          mainstream in this field, then cover the neural team recommenders as
          the cutting-edge class of approaches. Further, we provide unifying
          definitions, formulations, and evaluation schema. Last, we introduce
          details of training strategies, benchmarking datasets, and open-source
          tools, along with directions for future works.
        </div>
      </section>
      <section id="section-audience">
        <span id="section-title-audience" className="section-title">
          Target Audience
        </span>
        <div className="section-body">
          Team recommendation problem falls under social information retrieval
          (Social IR) where we seek to find the right group of skillful users to
          solve the tasks at hand or only with the assistance of social
          resources. In this tutorial, i) we target beginner or intermediate
          researchers, industry technologists and practitioners with a broad
          interest in user modeling and recommender systems who are willing to
          have a whole picture of team recommendation techniques. ii)
          Furthermore, this tutorial targets audiences from the graph neural
          network (GNN) community for a comprehensive review of subgraph
          optimization objectives and calls them for further development of
          effective yet efficient graph neural networks with a special focus on
          team recommendation. Last, having regard to the unified comparative
          analysis, this tutorial enables iii) organizations and practitioners
          to compare different models and readily pick the most suitable one for
          their application to form collaborative teams of skilled users whose
          success is almost surely guaranteed.
        </div>
      </section>
      <section id="section-prereq">
        <span id="section-title-prereq" className="section-title">
          Prerequisite Knowledge
        </span>
        <div className="section-body">
          The target audience needs to be familiar with graph theory and machine
          learning. Where appropriate, the tutorial will not make any
          assumptions about the audience’s knowledge on more advanced
          techniques. As such, sufficient details will be provided as
          appropriate so that the content will be accessible and understandable
          to those with a fundamental understanding of such principles.
        </div>
      </section>
      <section id="section-outline">
        <span id="section-title-outline" className="section-title">
          Outline
        </span>
        <div className="section-body">
          <span className="d-block w-100">
            From Figure 1 (below), we begin to introduce intuitive definitions
            of a team and some representative, historical to modern and
            state-of-the-art methods for solving the team recommendation
            problem, motivating the importance of the problem, followed by a
            novel taxonomy of computational methods, as explained hereafter.
          </span>
          <img
            src={require("../img/taxonomy.jpg")}
            alt="Figure 1. Categories of team recommendation methods."
            height="300"
          />
          <p>
            {" "}
            Figure 1. Categories of team recommendation methods.
          </p>
          <div className="outline-topic">
            <span className="section-date">35 minutes</span>
            <span className="fw-bold text-uppercase h5">
              Search-based Heuristics
            </span>
            <span className="d-block w-100">
              This section provides an overview of the graph-based approaches in
              team formation methods. Operations Research-based methods,
              although conceiving the foremost computational models, overlooked
              the organizational and social ties among users and are hence
              excluded in our tutorial.
            </span>
            <div className="topic-item">
              <ul>
                <li>
                  <span className="fw-bold">
                    Subgraph Optimization Objectives:
                  </span>
                  &nbsp;In our tutorial, we formalized more than 13 objectives
                  in a unified framework with integrated notations for better
                  readability and fostering conventions in this realm.
                </li>
                <li>
                  <span className="fw-bold">
                    Subgraph Optimization Techniques:
                  </span>
                  &nbsp;We describe the seminal heuristics that have been
                  followed by the majority of researchers, as well as the groups
                  that optimization techniques can be studied in.
                </li>
                <li>
                  <span className="fw-bold">Evaluation Methodology:</span>
                  &nbsp;Finally, we lay out the methodologies, benchmark
                  datasets, and quantitative and qualitative metrics that are
                  used to evaluate the performance of the graph-based
                  approaches.
                </li>
              </ul>
            </div>
          </div>
          <div className="outline-topic">
            <span className="section-date">35 minutes</span>
            <span className="fw-bold text-uppercase h5">
              Learning-based Heuristics
            </span>
            <span className="d-block w-100">
              We will then explain the learning-based methods, which has been
              mostly based on neural models. Learning-based methods bring
              efficiency while enhancing efficacy due to the inherently
              iterative and online learning procedure, and can address the
              limitations of search-based solutions with respect to scalability,
              as well as dynamic expert networks [10, 11].
            </span>
            <div className="topic-item">
              <ul>
                <li>
                  <span className="fw-bold">Neural Architectures:</span>
                  &nbsp;We will lay out the details of different neural
                  architecture and their applications in team recommendation,
                  from autoencoder to graph neural networks.
                </li>
                <li>
                  <span className="fw-bold">Training Strategies:</span>
                  &nbsp;In our tutorial, we will discuss the details of
                  different negative sampling heuristics to draw virtually
                  unsuccessful teams and streaming training strategy that put a
                  chronological order on teams during training.
                </li>
                <li>
                  <span className="fw-bold">
                    Hands-On <i>OpeNTF</i>:
                  </span>
                  &nbsp;In our tutorial, we introduce publicly available
                  libraries and tools for the task of team recommendation.
                  Notably, we provide hands-on experience with{" "}
                  <a href="https://github.com/fani-lab/OpeNTF">
                    <i>OpeNTF</i>
                  </a>
                  , an open-source benchmark library for neural models.​
                </li>
              </ul>
              <img
                src={require("../img/bnn.png")}
                alt="Figure 2. Bayesian bnn, one of OpeNTF's supported neural models."
                height="300"
              />
              <p>
                {" "}
                Figure 2. Bayesian <i>bnn</i>, one of <i>OpeNTF</i>'s supported neural
                models.
              </p>
            </div>
            <div className="topic-item">
              <span className="fw-bold expand-button"></span>
              <span className="d-block w-100"></span>
            </div>
          </div>
          <div className="outline-topic">
            <span className="section-date">15 minutes</span>
            <span className="fw-bold text-uppercase h5">
              Challenges and New Perspectives
            </span>
            <div className="topic-item">
              <span className="fw-bold">
                Adila: Fair and Diverse Team Recommendation
              </span>
              <span className="d-block w-100">
                The primary focus of existing team recommendation methods is the
                maximization of the success rate for the recommended teams,
                largely ignoring diversity in the recommended users. In our
                tutorial, we introduce notions of fairness and{" "}
                <a href="https://github.com/fani-lab/Adila">
                  <i>Adila</i>
                </a>
                , that enables further post-processing reranking refinements to
                reassure the desired fair outcome and explore the synergistic
                trade-offs between notions of fairness and success rate for the
                proposed solutions.
              </span>
              <img
                src={require("../img/flow.png")}
                alt="Figure 3. Adila's pipeline architecture."
                height="300"
              />
              <p>
                {" "}
                Figure 3. <i>Adila</i>'s pipeline architecture.
              </p>
            </div>
            <div className="topic-item">
              <span className="fw-bold">Spatial Team Recommendation</span>
              <span className="d-block w-100">
                In search of an optimal team, companies further look for skilled
                users in a region where the organization is geographically
                based, which leads to new challenges as it requires drilling
                down on the skills of users while maintaining the condition of a
                given geolocation. We conclude our tutorial by bringing forth
                the spatial team recommendation problem; that is, given a set of
                users, skills and geolocations, the goal is to determine whether
                the combination of skills and geolocations in forming teams has
                synergistic effects.
              </span>
            </div>
          </div>
          <div className="outline-topic">
            <span className="section-date">5 minutes</span>
            <span className="fw-bold text-uppercase h5">
              Questions and Discussions
            </span>
          </div>
        </div>
      </section>
      <section id="section-presenters">
        <span id="section-title-presenters" className="section-title">
          Presenters
        </span>
        <div className="section-body d-flex p-3 direction-row justify-content-between">
          <div className="presenter">
            <span className="ref-name fs-5">Mahdis Saeedi</span>
            <span className="text-muted fs-6 fst-italic">
              Ershad Damavand University | University of Windsor
            </span>
            Email:{" "}
            <a href="mailto:msaeedi@uwindsor.ca" className="email-link">
              msaeedi@uwindsor.ca
            </a>
          </div>
          <div className="presenter">
            <span className="ref-name fs-5">Christine Wong</span>
            <span className="text-muted fs-6 fst-italic">
              University of Windsor
            </span>
            Email:{" "}
            <a href="mailto:wong93@uwindsor.ca" className="email-link">
              wong93@uwindsor.ca
            </a>
          </div>
          <div className="presenter">
            <span className="ref-name fs-5">Hossein Fani</span>
            <span className="text-muted fs-6 fst-italic">
              University of Windsor
            </span>
            Email:{" "}
            <a href="mailto:hfani@uwindsor.ca" className="email-link">
              hfani@uwindsor.ca
            </a>
          </div>
        </div>
      </section>
      <section id="section-download">
        <span id="section-title-download" className="section-title">
          Materials
        </span>
        <div className="section-body">
          <div>
            <span className="fw-bold text-uppercase">
              View the Full Outline
            </span>
            <div>
              <a
                className="btn btn-outline-primary btn-lg"
                target="_blank"
                href="https://hosseinfani.github.io/res/papers/2024_UMAP_Collaborative_Team_Recommendation_for_Skilled_Users_Objectives_Techniques_and_New_Perspectives.pdf"
              >
                <i className="bi bi-filetype-pdf pe-3"></i>Download
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
