import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../components/Home.css'

function Home() {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(2);
    const [pageCount, setPageCount] = useState(0)


    const getData = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        const data = res.data;
        const slice = data.slice(offset, offset + perPage)
        const postData = slice.map(pd => <div key={pd.id}>
            <p>{pd.title}</p>
            <img src={pd.thumbnailUrl} alt="" />
        </div>)
        setData(postData)
        setPageCount(Math.ceil(data.length / perPage))
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        getData()
    }, [offset])

    return (
        <div className="App" id='home'>
            {data}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me, page-item"}
                pageCount={pageCount}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextsClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"} />
        </div>
    );
}

export default Home;