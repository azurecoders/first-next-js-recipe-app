import Link from "next/link";

export default function Home() {
  return (
    <div className="m-5">
      <h1 className="text-2xl mb-3">Welcome to Recipe App</h1>
      <Link href="/recipe-list">
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
          Go to Recipe List
        </button>
      </Link>
    </div>
  );
}
