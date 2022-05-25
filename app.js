	function init() {
		isGameOn = false;
		for (let i=0; i<1000; i++) move((Math.floor(Math.random()*size*size)));
		document.getElementById("message").innerHTML = "0";
		isGameOn = true;
	}
	function move(n) {
		if (n>size-1) tryMove(n, n-size);
		if (n%size!=0)  tryMove(n, n-1);
		if (n%size!=(size-1))  tryMove(n, n+1);
		if (n<size*(size-1))  tryMove(n, n+size);
		if (!isGameOn) return;

		let cc = parseInt(document.getElementById("message").innerHTML);
		document.getElementById("message").innerHTML = cc+1;
		let m = size*size-1;
		let i;
		for (i=0; i<m; i++) {
			if (document.getElementById("cell" + i).value!=(i+1)) break;
		}
		if (i==m) GameOver();
	}
	function tryMove(from, to) {
		let s = document.getElementById("cell"+from);
		let d = document.getElementById("cell"+to);
		if (d.value==" ") {
			d.value = s.value;
			s.value = " ";
		}
	}
	function GameOver(size) {
		isGameOn = false;
		document.getElementById("message").innerHTML += " Solved!!";
	}
	function drawBoard(size) {
		let str = "";
		for(let i=0; i<size; i++) {
			for (let j=0; j<size; j++) {
				const id = i*size+j;
				const val = id+1
				str += "<input type=button id='cell" + id + "' ";
				str += "class='cbutton' ";
				str += "value='" + (val<size*size ? val : " ") + "' ";
				str += "onclick='move(" + id + ");'>";
			}
			str += "<br/>";
		}
		document.getElementById("board").innerHTML = str;
	}
	function setSize(_size) {
		size = parseInt(_size);
		drawBoard(size);
		init();
	}
	function solve() {
	}
