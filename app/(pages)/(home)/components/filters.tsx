"use client";

import { Make } from "@/app/api/nhtsa/types";
import Button from "@/app/components/button";
import Select from "@/app/components/select";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

type Props = { makes: Make[] };
export default function Filters({ makes }: Props) {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const disableNext = !make || !year;

  return (
    <>
      <div className="flex flex-col gap-1">
        <Select
          label="Select a make"
          options={makes.map((make) => ({
            value: make.MakeId.toString(),
            label: make.MakeName,
          }))}
          placeholder="Make"
          value={make}
          onChange={setMake}
        />
        <Select
          label="Select a year"
          options={Array.from(
            { length: new Date().getFullYear() - 2014 },
            (_, i) => ({ value: i + 2015, label: i + 2015 }),
          )}
          placeholder="Year"
          value={year}
          onChange={setYear}
        />
      </div>
      <Button
        real={Link}
        href={`result/${make}/${year}`}
        aria-disabled={disableNext}
        className={classNames(
          { "bg-amber-500": !disableNext, "bg-slate-400": disableNext },
          { "text-white": !disableNext, "text-slate-600": disableNext },
          "font-bold",
          { "pointer-events-none": disableNext },
        )}
        tabIndex={disableNext ? -1 : undefined}
      >
        Next
      </Button>
    </>
  );
}
