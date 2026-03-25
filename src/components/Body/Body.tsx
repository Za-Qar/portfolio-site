import cn from 'classnames';
import styles from './body.module.scss';
import goldenSphere from '../../imgs/goldenSphere.png';
import projects from '../../data/projects';

function Body() {
  return (
    <div className={cn(styles.body)}>
      <div className="container">
        <div className={cn(styles.grid)}>
          {projects.map((project) => (
            <div key={project.title} className={cn(styles.sec)}>
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <img className={cn(styles.image)} src={project.image} alt={project.imageAlt} />
              <p>{project.description}</p>
              {project.links?.map((link, i) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  <button className={cn('button', styles.button, i > 0 && styles.buttonRight)}>
                    {link.label}
                  </button>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={cn(styles.goldenSphere)}>
        {Array.from({ length: 7 }).map((_, i) => (
          <img key={i} alt="golden sphere" src={goldenSphere} />
        ))}
      </div>
    </div>
  );
}

export default Body;
