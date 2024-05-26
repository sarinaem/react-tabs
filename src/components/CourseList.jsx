
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lessons with the most popular teachers",
    imageUrl: "../public/img/img1.jpg",
    rate: "4.5",
    tags: ["langauges", "english", "course online"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description:
      "lesson on planning design concept and proper planning of work",
    imageUrl: "../public/img/img2.jpg",
    rate: "4",
    tags: ["UI/UX design", "web design"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Business Lecture",
    description:
      "lectures on how to build your buisness safely without fare of new projects",
    imageUrl: "../public/img/img3.jpg",
    rate: "3.9",
    tags: ["Marketing", "Finance"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Active",
  },
  {
    id: 4,
    title: "React Course",
    description:
      "this course is diffrent with others and you can work by new tools and...",
    imageUrl: "../public/img/image1.png",
    rate: "2.9",
    tags: ["Marketing", "Finance"],
    start: "2024-07-01T20:46:30.615Z",
    status: "Upcoming",
  },
];





function CourseList(){
    return (<div className=" course-list">
      {/* {courses.map((course)=> {
        return  <CourseCard key={course.id}  course={course}/>
      })} */
      courses.map((course)=> <CourseCard key={course.id} course={course}/>
      )}
  </div>);
  }


  export default CourseList