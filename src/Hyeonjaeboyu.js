import { useState, useEffect } from "react";

function Hyeonjaeboyo() {
  return (
    <div className="App">
      <div className="hyeonjaeboyu-con">
        <h1 id="hyeonjaeboyu-title">
          <span id="back">💰 현재보유</span>
          <span>
            (이미 추가매수를 한 경우는 증권사 수수료로 인해 매입금액이 다소 다를
            수 있습니다.)
          </span>
        </h1>
        <div id="hyeonjaeboyu-input">
          <div id="meipga">
            <input type="text" placeholder="매입가"></input>
            <span>원</span>
          </div>
          <div id="boyusurang">
            <input type="text" placeholder="보유수량"></input>
            <span id="surang-1">수량</span>
          </div>
          <div id="maipgeumak">
            <input type="text" placeholder="매입금액" readonly=""></input>
            <span id="won-1">원</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hyeonjaeboyo;
