import { toast } from "react-toastify";

const toastCase = (message: string, type: string): void => {
  switch (type) {
    case "SUCCESS":
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      break;

    case "ERROR":
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      break;

    case "INFO":
      toast.info(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      break;

    default:
      toast(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      break;
  }
};

class Toast {
  public success(message: string): void {
    toastCase(message, "SUCCESS");
  }

  public error(message: string): void {
    toastCase(message, "ERROR");
  }

  public info(message: string): void {
    toastCase(message, "INFO");
  }
}

export default new Toast();
