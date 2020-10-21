// @ts-check
import ProjectGridItem from 'components/project-grid/project-grid-item'

export const ProjectGrid = ({ projects }) => (
  <div className='grid md:grid-cols-2 gap-12'>
    {projects.map((project, i) => (
      <ProjectGridItem project={project} key={`project-${i}`} />
    ))}
  </div>
)

export default ProjectGrid
