import React from 'react';
import './css/SearchForm.css';

const SearchForm = ({ handleSubmit=f=>f, handleChange=f=>f, value }) => {
    return <form onSubmit={handleSubmit}>
        <div className="input_div">
            <h1 id="search-head">영화 검색</h1>
            <div className="search_bar">
                <input className="input_search" type="text" value={value} onChange={handleChange} placeholder="찾고 싶은 영화 제목을 입력하세요" />
                <input className="input_submit_button" type='submit' style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/icons8-search-52.png'})`
                }} value=""></input>
            </div>
        </div>
    </form>
}

export default SearchForm