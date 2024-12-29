import axios from "axios";

const authService = {
  sendOtp: async (identifier) => {
    return await axios.post("https://personal-portfolio-4rrr.onrender.com/api/auth/sendotp", {
      identifier,
    });
  },
  verifyOtp: async (identifier, otp) => {
    return await axios.post("https://personal-portfolio-4rrr.onrender.com/api/auth/verifyotp", {
      identifier,
      otp,
    });
  },
};

export default authService;
