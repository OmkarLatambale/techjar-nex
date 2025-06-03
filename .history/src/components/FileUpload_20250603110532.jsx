import { useLocation } from "react-router-dom";
import { useFileUpload } from "../hooks/useFileUpload";

function FileUpload() {
  const location = useLocation();
  const jobId = location.state?.jobId;

  const { handleUpload, status, loading } = useFileUpload();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onSubmit = async () => {
    if (!jobId) {
      alert("Job ID not found. Please navigate properly.");
      return;
    }
    if (selectedFiles.length === 0) {
      alert("Please select at least one file.");
      return;
    }
    await handleUpload(selectedFiles, jobId); // now sends jobId
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(e) => setSelectedFiles(Array.from(e.target.files))}
      />
      <button onClick={onSubmit} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
