import { Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './components/Course/Course';
import data from './data/data.json';
import { useEffect, useState } from 'react';
import Card from './components/Course/Card/Card';

function App() {
  const [courses, setCourse] = useState([]);
  const [addCourse, setAddCourse] = useState([]);

  useEffect(() => {
    setCourse(data);
  } ,[])

  const enrollCourse = (course) => {
    const newCourse = [...addCourse, course];
    setAddCourse(newCourse);
  };


  return (
    <Container>
      <Card addCourse={addCourse}></Card>
      {/* <h1>Course Enrolled: {addCourse.length}</h1> */}
      <ul>
        {
          courses.map(course => <Course course={course} enrollCourse={enrollCourse}></Course> )
        }
      </ul>
      
    </Container>
    
  );
}

export default App;
