import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Post from "../components/Post";
import RightPanel from "../components/RightPanel";

const Dashboard = () => {
    const posts = [
        {
            user: { name: "Lara Leones", username: "@thewallart", avatar: "./post_dp_1.png" },
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "./post_1.png",
            likes: 9.8,
            comments: 8.6,
            shares: 7.2,
        },
        {
            user: { name: "Thomas J.", username: "@thecustomcreator", avatar: "./post_dp_2.png" },
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "./post_2.png",
            likes: 9.8,
            comments: 8.6,
            shares: 7.2,
        },
    ];

    return (
        <>
            <div className="flex mx-auto container">
                <Sidebar />
                <div className="flex-1  flex flex-col">
                    <Header />
                    <div className="pt-4">
                        {posts.map((post, index) => (
                            <Post key={index} {...post} />
                        ))}
                    </div>
                </div>
                <RightPanel />
            </div></>
    );
};

export default Dashboard;
