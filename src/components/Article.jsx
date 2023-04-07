const Article = ({ sectionTitle, unit }) => {
  let render
  let renderAchievements
  if (unit.points) {
    render = unit.points.map((point, i) => (
      <li key={i} className='text-smaller'>
        {point}
      </li>
    ))
  }
  if (unit.responsibilities) {
    render = unit.responsibilities.map((responsibility, ii) => (
      <li key={ii} className='text-smaller'>
        {responsibility}
      </li>
    ))
  }
  if (unit.achievements) {
    renderAchievements = unit.achievements.map((achievement, iii) => (
      <li key={iii} className='text-smaller'>
        {achievement}
      </li>
    ))
  }

  return (
    <div className='do-not-break w-full m-0 p-0 mb-6'>
      <div className='title w-full py-3 m-0 flex flex-row justify-between items-center'>
        <h3 className='title text-base font-medium dark:text-headingForDark text-headingForLite'>
          {unit.name}&nbsp;
          <span className='text-xs dark:text-liteColor text-darkColor italic'>
            {sectionTitle === 'Development Experience & Courses'
              ? 'by'
              : 'with'}{' '}
            {unit.description}
          </span>
        </h3>
        <p className='timeframe text-xs text-right italic'>{unit.timeframe}</p>
      </div>
      {unit.responsibilities && <h4 className='mt-4'>Responsibilities:</h4>}
      <ul className='w-full pl-4 list-disc'>{render}</ul>
      {unit.achievements && <h4 className='mt-2'>Achievements:</h4>}
      {unit.achievements && (
        <ul className='w-full pl-4 list-disc'>{renderAchievements}</ul>
      )}
    </div>
  )
}

export default Article
