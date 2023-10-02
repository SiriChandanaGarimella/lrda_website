import Image from "next/image";
import SearchBar from './components/searchBar'; // imports reusable search bar

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="text-blue-500 text-xl">Where's Religion?</h1>
      </div>
    </main>
  );
}