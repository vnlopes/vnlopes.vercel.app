const moon = document.querySelector("#moon");
    const sun = document.querySelector("#sun");
    const body = document.querySelector("body");
    const span = document.querySelector(".span");
    const font = document.querySelector("span");
    const github = document.querySelector(".github")
    const tt = document.querySelector(".tt")
    const lin = document.querySelector(".lin")
    const a = document.querySelector("a")
    const vndark = document.querySelector('.vndark')

    const light = () => {
      document.body.classList.toggle("light");
      moon.style = "display: flex;";
      if (body.classList.contains("light")) {
        tt.style = "fill: black;"
        lin.style = "fill: black;"
        github.style = "fill: black;"
        font.style = "color: black;";
        sun.style = "display: none;";
        span.style = "opacity: 0;";
        vndark.style = "opacity: 100%;"
      } else {
        tt.style = "fill: white;"
        lin.style = "fill: white;"
        github.style = "fill: white;"
        font.style = "color: white;";
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        sun.style = "display: flex;";
        moon.style = "display: none;";
        span.style = "opacity: 100%;";
        vndark.style = "opacity: 0;"
      }
    };