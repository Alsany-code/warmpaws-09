import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md space-y-4">
        <div className="flex flex-col items-center">
          <img src={photoURL || "https://i.pinimg.com/736x/65/20/35/65203587f7796ba4abaac5f6e899bfa4.jpg"} alt="avatar" className="w-24 h-24 rounded-full mb-4" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full mb-2"
            placeholder="Name"
          />
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full mb-2"
            placeholder="Photo URL"
          />
        </div>
        <div>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <button onClick={handleUpdate} className="btn btn-primary w-full">Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
