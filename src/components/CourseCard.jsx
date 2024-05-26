

function CourseCard({course}) {
    // console.log(course);
  return (
    <div className="course-item">
    <div className="course-item__img">
      <img src={course.imageUrl} alt={course.title} />
    </div>
    <div className="course-item__detail">
      <CourseCardBody title={course.title} description={course.description} rate={course.rate}/>
      <CourseCardFooter course={course}/>
     
    </div>
    </div>) 
}

export default CourseCard


// rfce write




function CourseCardBody({title, description, rate}) {
  return (<div className="course-item__body">
  <div>
    <p className='title'>{title}</p>
    <p className='desc'>{description}</p>
  </div>
  <span className='rate'>⭐{rate}</span>
</div>)
}


function CourseCardFooter({course}) {
  const startedAt = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year:"numeric",
    day:"numeric"
    
  })
  // console.log(course);
  return(
  <div className="course-item__footer">
  <div className='tags'>
    {course.tags.map((t, index) =>{
      // we can write index becuase it is not change
        return <span key={index} className='badge badge--secondary '>{t}</span>
    })} 
  </div>
  <div className="caption">
    <div className="date">‍
      {startedAt}
      </div>
    <span className={`badge ${course.status === "Active" ? "badge--primary" : course.status === "Upcoming" ? "badge--danger" : "badge--secondary"}`}>{course.status}</span>

  </div>
</div>)
}