// Courses.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from your API or use dummy data here
    axios.get('/api/courses').then((response) => {
      setCourses(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <span>{course.name}</span>
            <span>${course.price}</span>
            <button>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
