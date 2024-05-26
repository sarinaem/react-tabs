
const courseStatus = ["All", "Active", "Upcoming", "Completed"];


function Header() {
  return (
    <div>
         <h1>My Courses (3)</h1>
         <div className="course-status">
         {courseStatus.map((s) => {
           return <div key={s}>{s}</div>
         })}
         </div>
         
    </div>
  );
}

export default Header