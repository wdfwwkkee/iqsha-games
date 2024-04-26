import React, { useEffect, useState } from 'react'
import { iqshaService } from 'service/iqsha.service'
import { useQuery } from "@tanstack/react-query";

const GamesList = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["data"],
        queryFn: () => {
            return iqshaService.getAllGames();
        },
    });

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (isError) {
        return (
            <div>Error</div>
        )
    }

    return (
        <div>
            {data.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
    )
}

export default GamesList