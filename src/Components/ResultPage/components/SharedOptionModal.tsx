import {Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, styled, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {deepOrange} from "@mui/material/colors";

interface SharedOptionModalProps {
    isSharedOptionOpen: boolean;
    setIsSharedOptionOpen: (value: boolean) => void;
    beatsPercentage: number;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function SharedOptionModal({isSharedOptionOpen, setIsSharedOptionOpen, beatsPercentage}: SharedOptionModalProps) {
    const handleClose = () => {
        setIsSharedOptionOpen(false);
    };
    return (
        <div className="w-96 h-96">
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={isSharedOptionOpen}
              >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                  Easy Tax
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>

                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                        <Avatar sx={{bgcolor: deepOrange[500], marginRight: '8px'}}>U</Avatar>
                        <Typography variant="h6">Username</Typography>
                    </div>
                    <Typography variant="body1">I am using {<strong>"Easy Tax"</strong>} to find out how
                        much money I paid in taxes this year. I have beats {beatsPercentage}% users among Australia! It is a great tool to calculate your taxes!
                    </Typography>
                    <Typography variant="body1">You can also use it by clicking the link below:</Typography>
                    <a className="text-blue-300">https://easytax.com/username</a>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    Share
                  </Button>
                </DialogActions>
              </BootstrapDialog>
        </div>
    );
}