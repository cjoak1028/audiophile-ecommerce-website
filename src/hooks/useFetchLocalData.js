import React, { useState, useEffect } from "react";

const useFetchLocalData = (url) => {
    const [data, setData] = useState(null);

    console.log('fuck!');

    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, [url])

    return { data };
};

export default useFetchLocalData;