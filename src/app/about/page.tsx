import Aside from "@/components/sections/aside";

export default function Page() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center space-y-0 gap-0">
      <div className="flex flex-col justify-center items-center p-8 space-y-8 rounded shadow-xl ring-2">
        <div className="loader" />
        <p className="text-blue-500">Coming soon. Stay tuned!</p>
      </div>

      <Aside />
    </main>
  );
}
