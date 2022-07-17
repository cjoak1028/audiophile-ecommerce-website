import React, { useState } from "react";

const useFetchLocalData = (url) => {
    const [data, setData] = useState(null);

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

    return { data };
};

export default useFetchLocalData;