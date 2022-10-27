import {
  ChevronDownIcon,
  ArrowLongUpIcon,
  DocumentTextIcon,
  FolderIcon,
  ArrowLongDownIcon,
} from "@heroicons/react/24/outline";

export const Filemanager = () => {
  return (
    <div className="w-60 border-r border-neutral-800">
      <div className="flex items-center gap-2 border-b border-neutral-800 p-2 text-sm font-medium text-neutral-500">
        <div>
          <ChevronDownIcon className="w-4" />
        </div>
        <div className="grow text-neutral-300">Dateien</div>
        <div>
          <ArrowLongDownIcon className="w-4" />
        </div>
        <div>
          <ArrowLongUpIcon className="w-4" />
        </div>
        <div>
          <DocumentTextIcon className="w-4" />
        </div>
        <div>
          <FolderIcon className="w-4" />
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 text-xs">
        <div className="text-blue-400">
          <FolderIcon className="w-4" />
        </div>
        <div className="text-neutral-400">Klassenarbeiten</div>
      </div>
      <div className="flex items-center gap-2 border-r-2 border-blue-500 bg-neutral-800 px-2 py-2 pl-6 text-xs">
        <div className="text-teal-400">
          <DocumentTextIcon className="w-4" />
        </div>
        <div>Klassenarbeit.md</div>
      </div>
    </div>
  );
};
