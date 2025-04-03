// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white flex flex-col p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Logo</h2>
      </div>

      <ul className="space-y-4">
        <li>
          <Link href="/">
            <a className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <a className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/messages">
            <a className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Messages</a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Settings</a>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <a className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300">Logout</a>
          </Link>
        </li>
      </ul>

      <div className="mt-auto flex justify-center">
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition duration-300">
          Action Button
        </button>
      </div>
    </nav>
  );
};

export default Sidebar; 
