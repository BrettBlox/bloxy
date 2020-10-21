// @ts-check
import ProjectGridItem from 'components/project-grid/project-grid-item'

export const ProjectGrid = ({ projects }) => (
  <>
    <h2 className='text-center text-h3'>
      A list of projects I have had the joy of contributing to in my development
      career thus far.
    </h2>
    <div className='grid md:grid-cols-2 gap-12'>
      {projects.map((project, i) => (
        <ProjectGridItem project={project} key={`project-${i}`} />
      ))}
    </div>
  </>
)

export default ProjectGrid
