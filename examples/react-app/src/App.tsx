function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-sm bg-white shadow-lg rounded-xl px-8 pt-8 pb-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="username">
            Username
          </label>
          <wc-text-input
            className="w-full rounded-md text-gray-800"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <wc-text-input
            className="w-full rounded-md text-gray-800"
            id="password"
            type="password"
            placeholder="********"
          />
          <p className="text-red-500 text-xs italic mt-1">Please enter a valid password.</p>
        </div>

        <div className="flex items-center justify-between">
          <wc-button
            label="Sign In"
            className="bg-[#4299e1] hover:bg-[#2b6cb0] text-white font-semibold py-1 px-1.5 rounded-md transition-colors duration-200"
          />
          <a
            className="text-sm text-[#4299e1] hover:underline font-medium"
            href="#"
          >
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default App
