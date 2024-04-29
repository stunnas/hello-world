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

export type FilterOptions = "none" | "inverted" | "greyscale";
interface FilterOptionControllerProps {
  selectedValue: FilterOptions;
  onSelectChange: (value: FilterOptions) => void;
}

export function FilterOptionController({
  selectedValue,
  onSelectChange,
}: FilterOptionControllerProps) {
  return (
    <Select
      value={selectedValue}
      onValueChange={onSelectChange}
      name="filterController"
    >
      <SelectTrigger className="max-w-min px-4 bg-blue-500">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="inverted">Inverted</SelectItem>
          <SelectItem value="greyscale">Greyscale</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
