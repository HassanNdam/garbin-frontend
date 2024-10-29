import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

interface IModal {
  buttonIcon: string;
  buttonText: string;
  title: string;
  subtitle?: string;
  modalOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({
  buttonIcon,
  buttonText,
  title,
  subtitle,
  modalOpen,
  children,
}: IModal) => {
  return (
    <Dialog open={modalOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-3">
          <i className={`fa ${buttonIcon}`}></i>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white max-w-2xl">
        <DialogHeader className="sm:text-center my-6">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subtitle || ''}</DialogDescription>
        </DialogHeader>
        <div className="my-5">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
