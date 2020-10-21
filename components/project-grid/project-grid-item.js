// @ts-check
const ProjectGridItem = ({ project }) => (
  <li className='p-10 shadow-md rounded-2xl list-none'>
    <a href={project.link}>
      <h3 className='text-h4'>{project.title}</h3>
    </a>
    <p>{project.description}</p>
    <p>
      <strong>Role:</strong> {project.role}
    </p>
    <ul>
      <h4 className='text-h6 mb-0'>Tools used:</h4>
      {project.tools.map((tool, i) => (
        <li
          key={`tool-${i}`}
          className={`inline-block ${i !== project.tools.length - 1 && 'mr-4'}`}
        >
          {tool}
        </li>
      ))}
    </ul>
  </li>
)

export default ProjectGridItem
