import {
  DocumentTextIcon,
  PaintBrushIcon,
  TableCellsIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

export const Rail = () => {
  return (
    <div className="flex w-12 flex-col gap-5 border-r border-neutral-800 p-3 pt-5 text-neutral-500">
      <DocumentTextIcon className="w-6 text-neutral-100" />

      <PaintBrushIcon className="w-6" />
      <TableCellsIcon className="w-6" />
      <PresentationChartBarIcon className="w-6" />
    </div>
  );
};
