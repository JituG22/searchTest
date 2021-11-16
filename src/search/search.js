import React, { useState, useCallback } from 'react';
import lodash from 'lodash';
import axios from 'axios'
import './search.css';
export default function Search() {
const [searchData,setSearchData] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const searchNow = lodash.debounce((val)=>{
    let url = `https://demo.dataverse.org/api/search?q=${val}`;
    setIsLoading(true)
    axios.get(url).then((res)=>{
        setIsLoading(false)
        setSearchData(res.data.data.items)
    }).catch((err)=>{
        setIsLoading(false)
    })
},500)

const onSelectItem = (item)=>{
    alert("selected: "+item)
}

    return (
    <div className="wrapper">
        <div className="control" className={isLoading === true ? 'control isLoading':'control'}>
        <div className="loding">Loding... </div>
            <input type="text" type="text" name="search" onKeyPress={(event)=>searchNow(event.target.value)}/>
        </div>
        {
            searchData.length > 0 ? (
                <div className="list is-hoverable">
                    {
                    searchData.map((item,idx)=>{
                        return <a className="list-item" key={idx} onClick={()=>onSelectItem(item.name)}>{item.name}</a>
                    }) 
                    }
                </div>
            ):null
        }
    </div>
    )
}
