import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/slices/slice';
import Card from './cardComponent';
import Pagination from '@mui/material/Pagination';

import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Main = () => {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);

    const state = useSelector((state) => state.coreReducer);
    const load = useSelector((state) => state.load.load);

    const handleChange = (e) => {
        setOffset((e.target.innerText - 1) * 9);
    };

    useEffect(() => {
        dispatch(
            getData({
                limit: 9,
                offset: offset,
            })
        );
    }, [offset]);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}>
                {load
                    ? 'Загрузка...'
                    : state?.data.map((item) => (
                        <Link to={'/char/' + item?.char_id} state={{ item: item }}>
                            <Card item={item} />{' '}
                        </Link>
                    ))}

                <Pagination count={10} color="primary" onChange={handleChange}/>
            </Box>
        </>
    );
};

export default Main;