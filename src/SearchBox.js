import React from 'react';

const SearchBox = ({searchfield, searchchange}) => {
    return (
        <>
            <input type='search' placeholder='search robots' onChange={searchchange} />
        </>
    );
}

export default SearchBox;