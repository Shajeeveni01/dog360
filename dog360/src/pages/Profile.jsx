import { useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    breed: "",
    color: "",
  });

  const defaultImage = null; // No default image, use grey placeholder instead
  const [profileImage, setProfileImage] = useState(defaultImage);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hover, setHover] = useState(false); // Track hover state

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(defaultImage);
    setSelectedImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", profileData);
    console.log("Profile Image:", selectedImage);
    alert("Profile updated successfully! 🐶");
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/profile-background.jpg')" }} // ✅ More Visible Background Image
    >
      {/* ✅ Background Overlay for Readability (Reduced Opacity for More Visibility) */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>

      {/* Profile Card */}
      <div className="relative w-full max-w-3xl bg-white bg-opacity-85 p-8 rounded-2xl shadow-xl flex flex-col items-center backdrop-blur-md">
        
        {/* ✅ Profile Image Upload (Hover Options & Persistent Grey Background) */}
        <div 
          className="relative w-44 h-44 rounded-full border-4 border-rose-300 shadow-md flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ backgroundColor: profileImage ? "transparent" : "#d1d5db" }} // ✅ Persistent Grey Background
        >
          {profileImage ? (
            <img src={profileImage} alt="Dog" className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-500 font-semibold">No Photo</span> // ✅ Placeholder Text
          )}

          {/* ✅ Hover Overlay with Edit & Delete Buttons */}
          {hover && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-3">
              {/* Edit Photo Button */}
              <label className="bg-white text-gray-700 px-3 py-1 rounded-lg cursor-pointer text-sm font-semibold shadow-md hover:bg-gray-200 transition">
                Edit Photo
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>

              {/* Delete Photo Button */}
              <button 
                onClick={handleDeleteImage} 
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="mt-6 w-full">
          <div className="bg-rose-100 p-6 rounded-xl shadow-md">
            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter dog's name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-rose-300 mt-1"
                value={profileData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Age:</label>
              <input
                type="number"
                name="age"
                placeholder="Enter dog's age"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-rose-300 mt-1"
                value={profileData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Breed:</label>
              <input
                type="text"
                name="breed"
                placeholder="Enter dog's breed"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-rose-300 mt-1"
                value={profileData.breed}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Color:</label>
              <input
                type="text"
                name="color"
                placeholder="Enter dog's color"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-rose-300 mt-1"
                value={profileData.color}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-lg transition duration-200 font-semibold"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
