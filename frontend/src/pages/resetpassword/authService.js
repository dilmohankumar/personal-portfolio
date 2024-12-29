import axios from "axios";

const authService = {
  sendOtp: async (identifier) => {
    return await axios.post("http://localhost:5000/api/auth/sendotp", {
      identifier,
    });
  },
  verifyOtp: async (identifier, otp) => {
    return await axios.post("http://localhost:5000/api/auth/verifyotp", {
      identifier,
      otp,
    });
  },
};

export default authService;
