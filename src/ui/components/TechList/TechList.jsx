import { useState } from 'react'

export default function TechList() {
  const [techs, setTechs] = useState([])

  function handleAddTech() {
    setTechs([...techs, 'React'])
  }

  return (
    <>
      <ul data-testid='tech-list'>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <button onClick={handleAddTech}>Add</button>
    </>
  )
}
