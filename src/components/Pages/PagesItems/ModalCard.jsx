// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import s from "../../Card/Card.module.css";
//
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 700,
//     bgcolor: 'background.paper',
//     border: 'none',
//     boxShadow: 24,
//     p: 4,
//     borderRadius:2
// };
//
//
//
// export default function BasicModal({children,date,episodeSeason,episodeCount,characters}) {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//
//     return (
//         <div>
//             <div onClick={handleOpen} className={s.infoContent}>{children}</div>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                         {children}
//                         {episodeCount && <span> (Season - {episodeSeason}, Episode - {episodeCount}) </span> }
//                     </Typography>
//                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                         {date}
//                     </Typography>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }
