import { useState, useEffect } from "react";

function Hyeonjaeboyo() {
  return (
    <div className="App">
      <div className="hyeonjaeboyu-con">
        <h1 id="hyeonjaeboyu-title">
          <span id="back">π° νμ¬λ³΄μ </span>
          <span>
            (μ΄λ―Έ μΆκ°λ§€μλ₯Ό ν κ²½μ°λ μ¦κΆμ¬ μμλ£λ‘ μΈν΄ λ§€μκΈμ‘μ΄ λ€μ λ€λ₯Ό
            μ μμ΅λλ€.)
          </span>
        </h1>
        <div id="hyeonjaeboyu-input">
          <div id="meipga">
            <input type="text" placeholder="λ§€μκ°"></input>
            <span>μ</span>
          </div>
          <div id="boyusurang">
            <input type="text" placeholder="λ³΄μ μλ"></input>
            <span id="surang-1">μλ</span>
          </div>
          <div id="maipgeumak">
            <input type="text" placeholder="λ§€μκΈμ‘" readonly=""></input>
            <span id="won-1">μ</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hyeonjaeboyo;
