import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({pagesCount,setCurrentPage}) {

    const onPageChange =(pageNumber) =>{
        setCurrentPage(pageNumber)
        window.scroll(0,0)
    }

    return (
        <Stack spacing={2}>
            <Pagination style={{display:"flex", justifyContent:"center"}} onChange={(e) => onPageChange(e.target.textContent) } count={pagesCount} />
        </Stack>
    );
}
