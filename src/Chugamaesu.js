import { useState, useEffect } from "react";

function Chugamaesu() {
  return (
    <div className="App">
      <div id="chugamaesu-con">
        <h2 id="chugamaesu-title">
          <span>π° μΆκ°λ§€μ</span>
          <span>(νλ¨κ³Ό κΈμ‘ μλ ₯μΌλ‘ μλ κ³μ°μλ μ©μ΄ν©λλ€.)</span>
        </h2>

        <div id="chugamaesu-input">
          <div id="pyeongdan">
            <input type="text" placeholder="νλ¨"></input>
            <span>μ</span>
          </div>
          <div id="surang">
            <input type="text" placeholder="μλ"></input>
            <span id="surang-2">μλ</span>
          </div>
          <div id="geumak">
            <input type="text" placeholder="κΈμ‘" readonly=""></input>
            <span id="won-2">μ</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chugamaesu;
