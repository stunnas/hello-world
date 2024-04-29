"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type TypeOptions =
  | "flash"
  | "snap"
  | "stripes"
  | "run"
  | "pow"
  | "morisawa";

interface TypeOptionControllerProps {
  selectedValue: TypeOptions;
  onSelectChange: (value: TypeOptions) => void;
}

export function TypeOptionController({
  selectedValue,
  onSelectChange,
}: TypeOptionControllerProps) {
  return (
    <Select
      value={selectedValue}
      onValueChange={onSelectChange}
      name="typeController"
    >
      <SelectTrigger className="max-w-min px-4 bg-blue-500 text-white">
        <SelectValue placeholder="Select a type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Types</SelectLabel>
          <SelectItem value="flash">Flash</SelectItem>
          <SelectItem value="snap">Snap</SelectItem>
          <SelectItem value="stripes">Stripes</SelectItem>
          <SelectItem value="run">Run</SelectItem>
          <SelectItem value="pow">Pow</SelectItem>
          <SelectItem value="morisawa">Morisawa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
