import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Markbass
          </h1>
          <p className="text-lg text-gray-600">
            Your homepage content goes here
          </p>
        </div>
      </main>
    </div>
  );
}
