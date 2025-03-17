"use client";

import { useState } from "react";
import TabSection from "./_components/TabSection";


export default function Dashboard() {
    const [data, setData] = useState(null); // Supports any response or null

    const getData = (result) => {
        setData(result);
        console.log(data)
    };

    return (
        <>
            <TabSection getData={getData} />
        </>
    );
}
