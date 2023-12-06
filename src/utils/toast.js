import { useToast } from "vue-toastification";
const toast = useToast();

const options = {
	position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
};
 export const successToast=( msg,options )=>  toast.success(msg,options);
 export const infoToast=( msg,options )=>  toast.info(msg,options);
 export const warningToast=( msg,options )=>  toast.warning(msg,options);
 export const errorToast=( msg,options )=>  toast.error(msg,options);

// export { successToast,infoToast,warningToast,errorToast};
