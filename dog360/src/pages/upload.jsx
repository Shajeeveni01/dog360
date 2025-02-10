import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // Track upload progress

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show preview before upload
    }
  };

  // Handle file upload to Firebase Storage
  const handleUpload = async () => {
    if (!image) {
      toast.error("Please select an image first!");
      return;
    }

    setLoading(true);
    const storageRef = ref(storage, `dog-skin-images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Calculate and update upload progress
        const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercent);
      },
      (error) => {
        toast.error("Upload failed: " + error.message);
        setLoading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        toast.success("Image uploaded successfully!");
        console.log("Download URL:", downloadURL);
        setImage(null);
        setPreview(null);
        setProgress(0); // Reset progress bar
        setLoading(false);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Upload Dog Skin Image</h2>

        {/* Image Preview */}
        {preview && (
          <img src={preview} alt="Preview" className="mb-4 w-full h-48 object-cover rounded-md" />
        )}

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer p-2 mb-4"
          onChange={handleImageChange}
        />

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded-md h-2 mt-2">
            <div className="bg-blue-500 h-2 rounded-md" style={{ width: `${progress}%` }}></div>
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </div>
    </div>
  );
};

export default Upload;
