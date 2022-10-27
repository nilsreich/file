import { DocumentTextIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const EditorTabs = () => {
  return (
    <div className="flex text-sm">
      <div className="flex items-center border-b border-r border-teal-500 border-r-neutral-800 p-2 pl-4 italic">
        <div className="flex items-center gap-2 pr-6">
          <div>
            <DocumentTextIcon className="w-4" />
          </div>
          <div>Klassenarbeit.md</div>
        </div>
        <div>
          <XMarkIcon className="w-4" />
        </div>
      </div>
      <div className="grow border-b border-neutral-800"></div>
    </div>
  );
};
