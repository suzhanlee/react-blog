import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    let post = "강남";
    let [title, changeCloth] = useState(["남자 코트 추천", "코드2", "코드3"]);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그임</h4>
            </div>
            {title.map((t) => {
                return (
                    <div className="list">
                        <h4>{t}</h4>
                        <p>2월 17일 발행</p>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
