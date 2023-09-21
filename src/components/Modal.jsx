import React from 'react'




export default function Modal(props) {
    return (
        <div className="">
            <div
                className=" mobile-menu-bg min-h-screen min-w-full absolute bg-rafedGray-g1 bg-opacity-70 right-0 top-0 justify-center "
                onClick={props.onClick}
            ></div>
            <section className="mobile-menu right-0 top-1/2 w-64 h-28 rounded-md absolute origin-right transition-all  flex-col text-base   bg-rafedWhite-w1">
                <h1>hi</h1>
            </section>
        </div>
    )
}
