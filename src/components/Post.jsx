import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Post() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["Posts"],
        queryFn: async () => {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            {
                isError && console.log(isError);
            }
            if (isLoading) {
                <p>Loading...</p>;
            }
            return res.data;
        },
    });

    console.log(data);
    return (
        <div>
            {data &&
                data.map(({ id, title, body }) => (
                    <div key={id}>
                        <h1>{title}</h1>
                        <p>{body}</p>
                    </div>
                ))}
        </div>
    );
}

export default Post;
