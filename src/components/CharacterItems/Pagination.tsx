import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
    setPage:  React.Dispatch<React.SetStateAction<number>>
}

export default function BasicPagination({setPage}:Props) {

    const onPageChanged = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        window.scroll(0,0)
    }

    return (
        <Stack spacing={2}>
            <Pagination style={{display:"flex", justifyContent:"center"}} onChange={onPageChanged} count={10} />
        </Stack>
    );
}
