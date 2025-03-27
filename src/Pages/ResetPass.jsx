import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Utils/urlconfig";
import pet from "../assets/login/pet 1.svg";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleGetOtp = async () => {
    try {
      await axios.post(`${BASE_URL}/auth/forgetPassword`, { email: email.trim() });
      setStep(2);
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await axios.post(`${BASE_URL}/auth/resetPassword`, {
        email: email.trim(),
        otp: otp.trim(),
        newPassword: newPassword.trim(),
      });
      alert("Password reset successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 md:w-[60%] mx-auto w-[90%]">
      <div className="flex flex-col justify-center items-center bg-orange-200 p-8 md:p-16 md:rounded-[0px] rounded-xl md:rounded-l-3xl">
        <h1 className="text-3xl font-semibold mb-5">Forgot Password</h1>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded mb-4"
            />
            <button
              onClick={handleGetOtp}
              className="w-full bg-black text-white py-3 rounded"
            >
              Get OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded mb-4"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded mb-4"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded mb-4"
            />
            <button
              onClick={handleResetPassword}
              className="w-full bg-black text-white py-3 rounded"
            >
              Reset Password
            </button>
          </>
        )}
        
        <p className="mt-4 text-sm">
          Remember your password? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>

      <div className="hidden md:block w-full h-full md:rounded-r-3xl">
        <img
          src={pet}
          alt="Dog"
          className="w-full h-full object-cover md:rounded-r-3xl"
        />
      </div>
    </div>
  );
};

export default ResetPass;
