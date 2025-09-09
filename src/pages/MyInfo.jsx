export default function MyInfo() {
  // Mock data
  const user = {
    name: "John Doe",
    email: "johndoe@email.com",
    phone: "9876543210",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg", // replace with your own if needed
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-blue-50 rounded-lg shadow">
      <div className="flex flex-col items-center">
        <img
          src={user.profilePic}
          alt="profile"
          className="w-24 h-24 rounded-full mb-4 shadow-lg ring-4 ring-blue-800"
        />
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">{user.name}</h2>
        <p className="text-blue-700 mb-1 font-medium">{user.email}</p>
        <p className="text-blue-700">{user.phone}</p>
      </div>
    </div>
  );
}
