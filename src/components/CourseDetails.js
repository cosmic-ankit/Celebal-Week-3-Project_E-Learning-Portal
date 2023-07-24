// CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();

  // Fetch the course details from your API or use dummy data
  // const course = fetchCourseDetails(id);

  return (
    <div>
      {/* Display the course details here */}
      <h2>Course Details for Course {id}</h2>
    </div>
  );
};

export default CourseDetails;
