import React, { useState, memo } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, UserPlus, LogIn } from "lucide-react";

/* -------------------- Shared UI + Validators (top-level) -------------------- */

const Logo = ({ size = "w-16 h-16" }) => (
  <div className={`${size} relative`}>
      <img
        src="/logo.png"
        alt="Logo"
        className="w-full h-full object-contain rounded-lg"
      />
  </div>
);

const validateName = (name) => {
  if (name.length < 2) return "Name must be at least 2 characters";
  if (name.length > 50) return "Name cannot exceed 50 characters";
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) return "Name can only contain letters and spaces";
  return "";
};

const validatePassword = (password) => {
  if (password.length < 8) return "Password must be at least 8 characters";
  if (password.length > 20) return "Password cannot exceed 20 characters";
  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  const number = /[0-9]/;
  const symbol = /[^A-Za-z0-9]/;

  if (!upper.test(password)) return "Password must include at least one uppercase letter";
  if (!lower.test(password)) return "Password must include at least one lowercase letter";
  if (!number.test(password)) return "Password must include at least one number";
  if (!symbol.test(password)) return "Password must include at least one symbol";
  if (password.length > 20) return "Password cannot exceed 20 characters";
  return "";
};
const getPasswordStrength = (password) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  // Strength levels
  if (score <= 2) return { label: "Weak", color: "text-red-600" };
  if (score === 3 || score === 4) return { label: "Medium", color: "text-yellow-600" };
  if (score === 5) return { label: "Strong", color: "text-green-600" };

  return { label: "", color: "" };
};


const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return "";
};

/* ----------------------------- Page Components ----------------------------- */

const HomePage = memo(function HomePage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Canteen Management System</h1>
                <p className="text-blue-600 text-sm">Streamline Your Food Service Operations</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setCurrentPage("login")}
                className="px-6 py-2 text-blue-900 border-2 border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <LogIn size={18} />
                <span>Login</span>
              </button>
              <button
                onClick={() => setCurrentPage("signup")}
                className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2"
              >
                <UserPlus size={18} />
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Logo size="w-32 h-32 mx-auto mb-8" />
            <h2 className="text-5xl font-bold text-blue-900 mb-6">
              Welcome to Your
              <span className="block text-blue-700">Canteen Management System</span>
            </h2>
            <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
              Efficiently manage orders, inventory, and customer experiences with our comprehensive canteen management
              solution. Perfect for schools, offices, and institutions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Order Management</h3>
              <p className="text-blue-600">Streamline order processing and track all transactions in real-time</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Inventory Control</h3>
              <p className="text-blue-600">Monitor stock levels and manage supplies efficiently</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Customer Experience</h3>
              <p className="text-blue-600">Enhance satisfaction with seamless ordering and service</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage("signup")}
              className="px-8 py-4 bg-blue-900 text-white text-lg font-semibold rounded-xl hover:bg-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <UserPlus size={20} />
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setCurrentPage("login")}
              className="px-8 py-4 border-2 border-blue-900 text-blue-900 text-lg font-semibold rounded-xl hover:bg-blue-900 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <LogIn size={20} />
              <span>Already Have an Account?</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Logo size="w-8 h-8" />
            <span className="text-blue-900 font-semibold">Canteen Management System</span>
          </div>
          <p className="text-blue-600">© 2025 Canteen Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
});

const LoginPage = memo(function LoginPage({
  setCurrentPage,
  loginForm,
  setLoginForm,
  errors,
  setErrors,
  showPassword,
  setShowPassword,
  handleLogin,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
          {/* Header */}
          <div className="text-center mb-8">
            <Logo size="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Welcome Back</h2>
            <p className="text-blue-600">Sign in to your canteen account</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">Login As</label>
              <select
                name="role"
                value={loginForm.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
              >
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-blue-400" />
                <input
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? "border-red-300 bg-red-50" : "border-blue-200"
                  }`}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-blue-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginForm.password}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.password ? "border-red-300 bg-red-50" : "border-blue-200"
                  }`}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  maxlength={20}
                  required
                />
                <ul className="text-xs mt-1 text-gray-500 list-disc list-inside">
                  <li className={(loginForm.password.length >= 8) ? "text-green-600" : "text-red-600"}>Password,must be 8-20 characters long</li>
                  <li className={(/[0-9]/.test(loginForm.password)) ? "text-green-600" : "text-red-600"}>At least 1 number</li>
                  <li className={(/[!@#$%^&*(),.?":{}|<>]/.test(loginForm.password)) ? "text-green-600" : "text-red-600"}>At least 1 symbol</li>
                  <li className={(/(?=.*[a-z])(?=.*[A-Z])/.test(loginForm.password)) ? "text-green-600" : "text-red-600"}>Combination of uppercase and lowercase</li>
                </ul>
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-3 h-5 w-5 text-blue-400 hover:text-blue-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-blue-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-blue-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              onClick={handleLogin}
              type="button"
              className="w-full bg-blue-900 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
            >
              <LogIn size={20} />
              <span>Sign In</span>
            </button>
          </div>

          {/* Links */}
          <div className="mt-6 text-center space-y-4">
            <p className="text-blue-600">
              Don't have an account?{" "}
              <button onClick={() => setCurrentPage("signup")} className="text-blue-900 font-semibold hover:text-blue-700">
                Sign up here
              </button>
            </p>
            <button onClick={() => setCurrentPage("home")} className="text-blue-600 hover:text-blue-800 flex items-center justify-center mx-auto space-x-1">
              <span>← Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

const SignupPage = memo(function SignupPage({
  setCurrentPage,
  signupForm,
  setSignupForm,
  errors,
  setErrors,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  handleSignup,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
          {/* Header */}
          <div className="text-center mb-8">
            <Logo size="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Join Us Today</h2>
            <p className="text-blue-600">Create your canteen account</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-blue-400" />
                <input
                  type="text"
                  name="name"
                  value={signupForm.name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.name ? "border-red-300 bg-red-50" : "border-blue-200"
                  }`}
                  placeholder="Enter your complete name (2-50 characters)"
                  autoComplete="name"
                  maxLength={50}
                  required
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              <p className="mt-1 text-sm text-blue-500">Enter your complete name (2-50 characters)</p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-blue-400" />
                <input
                  type="email"
                  name="email"
                  value={signupForm.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? "border-red-300 bg-red-50" : "border-blue-200"
                  }`}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-blue-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={signupForm.password}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.password ? "border-red-300 bg-red-50" : "border-blue-200"
                  }`}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  maxLength={20}
                  required
                />
                <ul className="text-xs mt-1 text-gray-500 list-disc list-inside">
                  <li className={(signupForm.password.length >= 8) ? "text-green-600" : "text-red-600"}>Password must be 8-20 characters long</li>
                  <li className={(/[0-9]/.test(signupForm.password)) ? "text-green-600" : "text-red-600"}>At least 1 number</li>
                  <li className={(/[!@#$%^&*(),.?":{}|<>]/.test(signupForm.password)) ? "text-green-600" : "text-red-600"}>At least 1 symbol</li>
                  <li className={(/(?=.*[a-z])(?=.*[A-Z])/.test(signupForm.password)) ? "text-green-600" : "text-red-600"}>Combination of uppercase and lowercase</li>
                  </ul>

                {/* Password Strength Meter */}
                {signupForm.password && !errors.password && (<p className={`mt-1 text-sm font-semibold ${getPasswordStrength(signupForm.password).color}`}>Strength: {getPasswordStrength(signupForm.password).label}</p>)}
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-3 h-5 w-5 text-blue-400 hover:text-blue-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-blue-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={signupForm.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.confirmPassword ? "border-red-300 bg-red-50" : "border-blue-200"
                  }`}
                  placeholder="Re-enter your password to confirm"
                  autoComplete="new-password"
                  maxLength={20}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  className="absolute right-3 top-3 h-5 w-5 text-blue-400 hover:text-blue-600"
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              <p className="mt-1 text-sm text-blue-500">Re-enter your password to confirm</p>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">Sign Up As</label>
              <select
                name="role"
                value={signupForm.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900"
              >
                <option value="customer">Customer</option>
                <option value="staff">Staff</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 rounded border-blue-300 text-blue-600 focus:ring-blue-500" required />
                <span className="ml-2 text-sm text-blue-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              onClick={handleSignup}
              type="button"
              className="w-full bg-blue-900 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
            >
              <UserPlus size={20} />
              <span>Create Account</span>
            </button>
          </div>

          {/* Links */}
          <div className="mt-6 text-center space-y-4">
            <p className="text-blue-600">
              Already have an account?{" "}
              <button onClick={() => setCurrentPage("login")} className="text-blue-900 font-semibold hover:text-blue-700">
                Sign in here
              </button>
            </p>
            <button onClick={() => setCurrentPage("home")} className="text-blue-600 hover:text-blue-800 flex items-center justify-center mx-auto space-x-1">
              <span>← Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

/* ------------------------------ Main Component ----------------------------- */

const CanteenManagementSystem = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "", role: "customer" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });

  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    const newErrors = {};
    const emailError = validateEmail(loginForm.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(loginForm.password, true);
    if (passwordError) newErrors.password = passwordError;

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    alert(`Login successful! Redirecting ${loginForm.role} to dashboard...`);
  };

  const handleSignup = () => {
    const newErrors = {};

    const nameError = validateName(signupForm.name);
    if (nameError) newErrors.name = nameError;

    const emailError = validateEmail(signupForm.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(signupForm.password);
    if (passwordError) newErrors.password = passwordError;

    if (signupForm.password !== signupForm.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    alert(`Signup successful! Welcome ${signupForm.name}!`);
  };

  if (currentPage === "home") return <HomePage setCurrentPage={setCurrentPage} />;

  if (currentPage === "login")
    return (
      <LoginPage
        setCurrentPage={setCurrentPage}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        errors={errors}
        setErrors={setErrors}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleLogin={handleLogin}
      />
    );

  if (currentPage === "signup")
    return (
      <SignupPage
        setCurrentPage={setCurrentPage}
        signupForm={signupForm}
        setSignupForm={setSignupForm}
        errors={errors}
        setErrors={setErrors}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
        handleSignup={handleSignup}
      />
    );

  return <HomePage setCurrentPage={setCurrentPage} />;
};

export default CanteenManagementSystem;
