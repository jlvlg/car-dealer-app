import {
  GetMakesForVehicleType,
  GetModelsForMakeIdYear,
} from "@/app/api/nhtsa";
import Card from "@/app/components/card";
import { Suspense } from "react";
import ModelLoading from "./loading";

type Props = { params: Promise<{ make: string; year: string }> };

export default async function ResultPage({ params }: Props) {
  const { make, year } = await params;
  const models = await GetModelsForMakeIdYear(make, year);

  return (
    <main className="container mx-auto h-screen py-5">
      <div className="flex h-full flex-col items-center gap-10 rounded-xl border bg-slate-500 p-10">
        <h1 className="text-5xl font-bold text-white">Result</h1>
        <Suspense fallback={<ModelLoading />}>
          <ul className="relative flex size-full flex-col gap-5 overflow-y-scroll rounded-lg">
            {models.map((model) => (
              <li key={model.Model_ID}>
                <Card className="flex h-16 items-center px-5 text-lg">
                  {model.Model_Name}
                </Card>
              </li>
            ))}
          </ul>
        </Suspense>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const makes = await GetMakesForVehicleType();
  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => ({ value: i + 2015, label: i + 2015 }),
  );

  return makes
    .map((make) =>
      years.map((year) => ({ make: make.toString(), year: year.toString() })),
    )
    .flat();
}
