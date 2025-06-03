import { useParams } from "react-router-dom";
import StudentList from "./StudentList";

const StudentListWrapper = () => {
  const { jobId } = useParams();
  return <StudentList jobId={jobId} />;
};

export default StudentListWrapper;
