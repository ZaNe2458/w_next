import Link from 'next/link';

export default function Page() {
  return (
    <div className="">
        <div className="h-screen flex flex-col items-center justify-center bg-white">
            <div className="w-80 h-40 bg-gray-300 rounded">
         
            </div>
            <div className="flex flex-row space-x-4 mt-4">
                <Link 
                href="/dashboard"
                className="w-20 h-7 bg-blue-600 text-white rounded flex items-center justify-center">
                    <p>Login</p>
                </Link>
                <div className="w-20 h-7 bg-gray-300 text-black rounded flex items-center justify-center">
                    <p>Sign up</p>
                </div>
            </div>
        </div>
    </div>
  );
}
