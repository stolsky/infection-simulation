import type { JSX } from "solid-js/jsx-runtime"

import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

import "./Panel.css"

export default (props: {
    title: string,
    width: number,
    height: number,
    children: JSX.Element
}) => {
    return (
        <div class="Panel" style={{ width: `${props.width}px`, height: `${props.height}px` }}>
            <Header title={props.title} />
            <Content>
                { props?.children }
            </Content>
            <Footer />
        </div>
    )
}