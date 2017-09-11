import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToSection = this.props.scrollToSection.bind(this);
  }

  componentDidMount() {
    let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
    // Make canvas take up entire browser
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');
    var mouse = {
      x: undefined,
      y: undefined
    }
    var circleArr = [];
    var colorArr = ['#FFF2AD', '#FFED93', '#F6FF84', '##fffc95', '#FFE556', '#C8F8FF', '#AFF5FF', '#86F0FF', '#67ECFF', '#3BE4FC', '#FABCF5', '#E5ADFF', '#F18BE8', '#FF71E9', '#E362D8'];
    var maxRadius = 40;
    var minRadius = 2;

    // Update mouse position when it's moved
    window.addEventListener('mousemove', function (event) {
      mouse = getMousePos(canvas, event);
    });

    //Adjust canvas size when browser size changes
    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      //re-initialize circles
      init();
    });

    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colorArr[Math.floor(Math.random() * colorArr.length)];

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
        c.closePath();

      }

      this.update = function () {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity with mouse
        //increase the circle size when mouse is within 50px, unless it's hovering over a link
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && (mouse.y > 100 || mouse.x < window.innerWidth - 500) && (mouse.y < window.innerHeight - 90 || mouse.x < window.innerWidth/2-65 || mouse.x > window.innerWidth/2+65)) {
          //only increase circle size until it reaches max radius
          if (this.radius < maxRadius) {
            this.radius += 1.66;
          }
        }
        else if (this.radius > minRadius) {
          this.radius -= 1;
        }

        this.draw();
      }
    }

    // Regenerate all circles on canvas (whenever browser size changes)
    function init() {
      circleArr = [];
      for (var i = 0; i < 1000; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (window.innerWidth - radius * 2) + radius;
        var y = Math.random() * (window.innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);

        circleArr.push(new Circle(x, y, dx, dy, radius));
      }


    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (var i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
      }

      c.fillStyle = "#eaeaea";
      c.font = "bold 28px 'Helvetica'";
      if(canvas.width < 900){
        c.font = "bold 20px 'Helvetica'";
      }
      var textString = "Hi, I'm Jon. I design and build web applications from scratch.",
        textWidth = c.measureText(textString).width;
      c.save();
      c.translate((canvas.width / 2) - (textWidth / 2), canvas.height / 2);
      c.shadowColor = "black";
      c.shadowOffsetX = 0;
      c.shadowOffsetY = 0;
      c.shadowBlur = 10;
      c.fillText(textString, 0, 0);
      c.restore();

    }

    function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }

    init();
    animate();
  }


  render() {
    return (
      <div className="text-center">
        <canvas ref="myCanvas" />
        <a id="learnBtn" onClick={() => this.scrollToSection("Skills")}>
        Learn more<br />
        <i className="glyphicon glyphicon-chevron-down"></i>
      </a>
      </div>
    );
  }
}

