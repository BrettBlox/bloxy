// @ts-check
const ProjectGridItem = ({ project }) => (
  <li className='p-10 shadow-md bg-card rounded-2xl list-none flex flex-col uppercase text-xs transition-all duration-100 transform lg:hover:scale-105'>
    {project.link && (
      <a href={project.link} target='_blank' rel='noreferrer'>
        <h3 className='text-h4'>{project.title}</h3>
      </a>
    )}
    {!project.link && <h3 className='text-h4'>{project.title}</h3>}
    <p className='justify-self-start normal-case'>{project.description}</p>
    <p className='mt-auto mb-3'>
      <strong>My Employer:</strong> {project.employer}
    </p>
    <p className='mb-3'>
      <strong>role:</strong> {project.role}
    </p>
    <ul>
      <p className='mb-0'>
        <strong>Tools used:</strong>
      </p>
      {project.tools.map((tool, i) => (
        <li
          key={`tool-${i}`}
          className={`inline-block ${i !== project.tools.length - 1 && 'mr-2'}`}
        >
          {tool}
          <span className={`${i === project.tools.length - 1 && 'hidden'}`}>
            ,
          </span>
        </li>
      ))}
    </ul>
  </li>
)

export default ProjectGridItem
