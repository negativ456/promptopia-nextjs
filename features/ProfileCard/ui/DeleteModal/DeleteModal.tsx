import { Modal } from "@/shared/ui/Modal/Modal";
import { Loader } from "@/shared/ui/Loader/Loader";

interface DeleteModalProps {
  isLoading?: boolean;
  isOpen: boolean;
  onDelete: () => void;
  onClose: () => void;
}

export const DeleteModal = ({
  isLoading,
  isOpen,
  onDelete,
  onClose,
}: DeleteModalProps) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className={"flex flex-col gap-2 items-center font-medium"}>
        <p className="text-3xl">Are you sure ?</p>
        <div className={"flex gap-4"}>
          <button
            onClick={onDelete}
            className={
              "h-[38px] px-4 py-2 bg-green-400 rounded font-medium text-white"
            }
          >
            {isLoading ? <Loader /> : "Yes"}
          </button>
          <button
            className={"px-4 py-2 bg-red-400 rounded font-medium text-white"}
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};
