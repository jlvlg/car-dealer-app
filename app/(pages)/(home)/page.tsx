import Image from "next/image";
import { GetMakesForVehicleType } from "../../api/nhtsa";
import Filters from "./components/filters";

export default async function Home() {
  const makes = await GetMakesForVehicleType();

  return (
    <>
      <div className="flex h-screen">
        <main className="flex h-full w-full max-w-md flex-shrink-0 flex-col justify-center gap-5 bg-slate-200 p-20">
          <Filters makes={makes} />
        </main>
        <div className="relative w-full min-w-0 flex-shrink">
          <Image
            className="min-w-0 object-cover"
            src="https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="White car crossing river"
            fill
          />
        </div>
      </div>
    </>
  );
}
