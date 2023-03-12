let penDown = false; // A59 true: 0, false:
    let penColor = "black"; 
    let penSize = 2;
    let gX = 0; //
    let gy = 0; // 座標

    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d"); //‡ƒ
    ctx.lineWidth = penSize; //
    ctx.strokeStyle = penColor; //

    // キャンパスにマウスイベントを付ける
    canvas.addEventListener("mousedown", startDraw, false);
    canvas.addEventListener("mousemove", Draw, false);
    canvas.addEventListener("mouseup", endDraw, false);

    // マウスのボタンを押した (描画開始)
    function startDraw(e) {
      penDown = true;
      gX = e.offsetX;
      gY = e.offsetY;
    }
    // マウスのボタンを押したまま動かす(描画)
    function Draw(e) {
      if (penDown == false) return;
      // 現在のマウスの位置
      let x = e.offsetX;
      let y = e.offsetY;

      ctx.strokeStyle = penColor;
      ctx.lineWidth = penSize;
      ctx.beginPath();
      ctx.moveTo(gX, gY);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();

      // 次の描画開始点

      gX = x;
      gY = y;
    }
    // マウスのボタンを離した (描画終了)
    function endDraw() {
      penDown = false;
    }
    // ペンの色を変える
    function changePenColor() {
      penColor = document.getElementById("penColor").value;
    }

    // ペンの太さを変える
    function changePenSize() {
      penSize = document.getElementById("penSize").value;
    }
    //画面消去
    function erase() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }