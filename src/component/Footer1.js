import React from "react";
export default function Footer1({data}) {
    return (
        <>
            <footer className={data? "footer-area-hidden" : "footer-area"}>
                        <div className="grid gird-cols-12 ">
                <div className="col-span-12 p-2 copyright flex">
                <span className="text-sm text-gray-200">2023 © MAQ | Developed by CodetentaclesTechnologies</span>
                </div>
            </div>
            </footer>
        </>
    )
}