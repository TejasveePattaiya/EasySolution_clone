import { Alert, Slide, Snackbar } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAlert } from "../Redux/alertSlice";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}
const AlertTost = () => {
  const { alerts } = useSelector((state) => ({
    ...state.isAlert,
  }));
  const dispatch = useDispatch();

  // console.log(alerts);
  //
  //   const { enqueueSnackbar } = useSnackbar();

  //   const handleClickVariant = (variant) => () => {
  //     // variant could be success, error, warning, info, or default
  //     enqueueSnackbar("This is a success message!", { variant });
  //   };
  useEffect(() => {
    if (alerts?.isOpen) {
      setTimeout(() => {
        dispatch(handleAlert({ ...alerts, isOpen: false }));
      }, 3000);
    }
  }, [alerts?.isOpen]);

  return (
    <>
      <Snackbar
        sx={{ display: `${alerts.isOpen ? "block" : "none"}`, zIndex: 10 }}
        open={alerts?.isOpen}
        onClose={() => dispatch(handleAlert({ ...alerts, isOpen: false }))}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        TransitionComponent={TransitionLeft}
      >
        <Alert
          variant="filled"
          severity={alerts.type}
          sx={{ width: "100%" }}
          onClose={() => dispatch(handleAlert({ ...alerts, isOpen: false }))}
        >
          {alerts.msg}
        </Alert>
      </Snackbar>

      {/* <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant('error')}>Show success snackbar</Button> */}

      {/* 
    <SnackbarProvider maxSnack={5}  autoHideDuration={4000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        TransitionComponent={'TransitionRight'}>
    
    </SnackbarProvider> */}
    </>
  );
};

export default AlertTost;
