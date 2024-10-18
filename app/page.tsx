import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <><main className="flex-grow bg-blue-100 p-8">
      <header className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold">
      <span className="text-blue-500">Ayusmart</span>
      <span className="text-green-500"> HealthCare</span></h1><button className="text-xl font-bold text-blue-400 rounded hover:bg-gray-300">+Let's Connect </button> </header></main>
      <div className="h-full w-20 text-black flex-grow">
      <div className="p-4">
        <h2 className="text-lg font-bold">Category</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block p-2 hover:bg-gray-700 rounded">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="block p-2 hover:bg-gray-700 rounded">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block p-2 hover:bg-gray-700 rounded">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div></>
   
  );
}
