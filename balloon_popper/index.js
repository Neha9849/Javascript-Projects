var colors = ["#8569c9", "#e9b4b4", "#cb98b5"];
const audio=document.getElementById('audio');

    var numberOfSquares = 50;
    var squares = [];
    for (var i = 0; i < numberOfSquares; i++) {
        var square = document.createElement("div");
        square.classList.add("float-square");
        square.style.background = colors[Math.floor(Math.random() * colors.length)];
        square.style.left = `${Math.floor(Math.random() * 100)}vw`;
        square.style.top = `${Math.floor(Math.random() * 100)}vh`;
        square.style.transform = `scale(${Math.random()})`;
        square.style.width='2.5rem';
        square.style.height='2.5rem';
        squares.push(square);
        document.body.append(square);
    }

    squares.forEach((el, i, ra) => {
        var to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };

        var anim = el.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
                duration: (Math.random() + 1) * 2000, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
        el.addEventListener('mouseover',()=>{
            el.classList.add('blast');
            audio.currentTime = 0
            audio.play();
        })
    });
