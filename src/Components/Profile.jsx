import React, { useState, useEffect } from "react";
import profilepic from "../assets/Rectangle 2441.svg";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import axios from "axios";
import { logOut } from "../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../Utils/urlconfig";

const Profile = ({ setShowProfile }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const [file, setFile] = useState(null);
  const [userData, setUserData] = useState(null);

  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
    setShowProfile(false);
  };

  const handleClose = () => {
    setShowProfile(false);
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/getUser`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setUserData(response.data.userData);
      setUpdatedData(response.data.userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [token]);

  const handleInputChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const updateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("name", updatedData.name || "");
      formData.append("email", updatedData.email || "");
      formData.append("phoneNo", updatedData.phoneNumber || "");
      formData.append("address", updatedData.address || "");

      if (file) {
        formData.append("photo", file);
      }

      await axios.put(`${BASE_URL}/api/updateProfile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });

      alert("Profile updated successfully!");
      setEditMode(false);
      fetchUserData();
    } catch (error) {
      console.error("Profile Update Failed:", error);
      alert("Profile update failed!");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center m-5">
      <div className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden w-full max-w-[800px]">
        <div className="w-full md:w-1/2 bg-gray-200 flex justify-center items-center relative">
          <img
            src={updatedData?.photo || profilepic}
            alt="Profile"
            className="w-full object-cover h-[300px] md:h-[500px]"
          />
          {editMode && (
            <label className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer">
              <PhotoCameraIcon className="text-gray-700" />
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          )}
          <div className="cursor-pointer absolute top-2 right-2 block md:hidden">
            <CloseIcon onClick={handleClose} />
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#B6A5F2] p-6 relative">
          <div className="cursor-pointer absolute top-2 right-2 hidden md:flex">
            <CloseIcon onClick={handleClose} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">PROFILE</h2>

          <div className="mb-2">
            <p className="text-sm font-semibold">Name</p>
            {editMode ? (
              <input
                type="text"
                name="name"
                value={updatedData.name || ""}
                onChange={handleInputChange}
                className="w-full p-1 rounded"
              />
            ) : (
              <p className="text-white">{userData?.firstName || "none"}</p>
            )}
          </div>

          <div className="mb-2">
            <p className="text-sm font-semibold">Email ID</p>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={updatedData.email || ""}
                onChange={handleInputChange}
                className="w-full p-1 rounded"
              />
            ) : (
              <p className="text-white">{userData?.email || "none"}</p>
            )}
          </div>

          <div className="mb-2">
            <p className="text-sm font-semibold">Phone No</p>
            {editMode ? (
              <input
                type="text"
                name="phoneNumber"
                value={updatedData.phoneNumber || ""}
                onChange={handleInputChange}
                className="w-full p-1 rounded"
              />
            ) : (
              <p className="text-white">{userData?.phoneNumber || "none"}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold">Address</p>
            {editMode ? (
              <input
                type="text"
                name="address"
                value={updatedData.address || ""}
                onChange={handleInputChange}
                className="w-full p-1 rounded"
              />
            ) : (
              <p className="text-white">{userData?.address || "none"}</p>
            )}
          </div>

          <div className="w-full md:w-auto md:absolute md:bottom-4 md:right-4 flex">
            {!editMode && (
              <button
                className="bg-black text-white px-4 py-2 rounded-lg mt-4 hidden md:flex cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            <button
              className="bg-black text-white px-4 py-2 rounded-lg mt-4 ml-4 cursor-pointer"
              onClick={editMode ? updateProfile : () => setEditMode(true)}
            >
              {editMode ? "Save" : "Update"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;