import Head from 'next/head'
import { getAllProjects } from 'lib/api'
import styles from 'styles/project.module.css'

const Home = ({ allProjects }) => {
  console.log(allProjects)
  return (
    <>
      <Head>
        <title>Brett Bloxom's Portfolio for GitLab</title>
      </Head>
      {allProjects.map((project) => (
        <>
          {project.title}
          {project.description}
          {project.role}
          {/* {[...project.tags]} */}
        </>
      ))}
    </>
  )
}

export default Home

export async function getStaticProps() {
  const allProjects = getAllProjects(['title', 'slug', 'description'])

  return {
    props: { allProjects },
  }
}
