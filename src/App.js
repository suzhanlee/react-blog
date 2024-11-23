import "./App.css";
import { useState, useSyncExternalStore } from "react";

function App() {
    let [title, changeTitle] = useState([
        "남자 코트 추천",
        "코트 추천 3",
        "코트 추천 1",
    ]);
    let [like, changeLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState([false, false, false]);
    let [titleOrder, setTitleOrder] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그임</h4>
            </div>
            <button
                onClick={() => {
                    let copy = [...title];
                    copy[0] = "여자 코트 추천";
                    changeTitle(copy);
                }}
            >
                글 수정
            </button>

            <button
                onClick={() => {
                    let copy = [...title];
                    copy.sort();
                    changeTitle(copy);
                }}
            >
                정렬
            </button>

            {title.map((t, idx) => {
                return (
                    <div className="list" key={idx}>
                        <h4
                            onClick={() => {
                                let copy = [...modal];
                                copy[idx] = !copy[idx];
                                setModal(copy);
                                setTitleOrder(idx);
                            }}
                        >
                            {t}{" "}
                            <span
                                onClick={() => {
                                    let copy = [...like];
                                    copy[idx]++;
                                    changeLike(copy);
                                }}
                            >
                                좋아요
                            </span>{" "}
                            {like[idx]}
                        </h4>
                        <p>2월 17일 발행</p>
                    </div>
                );
            })}

            {modal[titleOrder] == true ? (
                <Modal
                    color={"yellow"}
                    title={title}
                    titleOrder={titleOrder}
                    changeTitle={changeTitle}
                ></Modal>
            ) : (
                ""
            )}
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal" style={{ background: props.color }}>
            <h4>{props.title[props.titleOrder]}</h4>
            <p>날짜</p>
            <p>상세 내용</p>
            <button
                onClick={() => {
                    let copy = [...props.title];
                    copy[0] = "여자 코트 추천";
                    props.changeTitle(copy);
                }}
            >
                글 수정
            </button>
        </div>
    );
}

export default App;
