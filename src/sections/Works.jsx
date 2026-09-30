import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";

const Works = () => (
  <section id="work" className="flex flex-col min-h-screen">
    <AnimatedHeaderSection
      subTitle="Logic meets Aesthetics, Seamlessly"
      title="Works"
      text={`Eight projects across web, mobile and native apps.\nExplore the features, the code\nand the thinking behind them.`}
      textColor="text-black"
      withScrollTrigger
    />
    <div className="project-list">
      {projects.map((project, index) => (
        <article key={project.id} className="project-card" aria-labelledby={`project-${project.id}`}>
          <div className="project-copy">
            <p className="project-number">{String(index + 1).padStart(2, "0")} / {project.tagline}</p>
            <h2 id={`project-${project.id}`}>{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <ul className="project-stack" aria-label={`${project.name} technologies`}>
              {project.frameworks.map((framework) => <li key={framework.id}>{framework.name}</li>)}
            </ul>
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${project.linkLabel} for ${project.name} (opens in a new tab)`}>
              {project.linkLabel} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="project-visual">
            <img src={project.image} alt={project.name === "Unavo" ? "Unavo's live meal-delivery homepage" : `${project.name} feature flow illustration`} width="960" height="600" loading="lazy" decoding="async" />
            <figcaption>{project.visualLabel}</figcaption>
          </figure>
        </article>
      ))}
    </div>
  </section>
);
export default Works;
