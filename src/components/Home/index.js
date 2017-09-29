/** 
 * @file manages the landing page of the website. Consists of all code related to the canvas.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import './style.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToSection = this.scrollToSection.bind(this);
    }

    /**
    * We use jQuery to scroll to an element by id
    * @param linkName - the id of the element we want to scroll to
    */
    scrollToSection(linkName) {
        $('html, body').animate({
            scrollTop: $("#" + linkName).offset().top
        }, 850);
    }


    /** Contains all canvas drawing code */
    componentDidMount() {
        // Get the canvas from the DOM
        let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
        var c = canvas.getContext('2d');
        // Make canvas take up entire browser
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Declare variables used for canvas
        var mouse = {
            x: undefined,
            y: undefined
        }
        var circleArr = [];
        var colorArr = ['#FFF2AD', '#FFED93', '#F6FF84', '##fffc95', '#FFE556', '#C8F8FF', '#AFF5FF', '#86F0FF', '#67ECFF', '#3BE4FC', '#FABCF5', '#E5ADFF', '#F18BE8', '#FF71E9', '#E362D8'];
        var maxRadius = 40;
        var minRadius = 3;

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

        // Returns the position of the mouse
        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        // Define circle class
        function Circle(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.minRadius = radius;
            this.color = colorArr[Math.floor(Math.random() * colorArr.length)];

            // Draws the circle on the canvas based on the Circle's properties
            this.draw = function () {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.stroke();
                c.fillStyle = this.color;
                c.fill();
                c.closePath();
            }

            // Updates the position and radius of the Circle
            this.update = function () {
                // Reverse x (and y) velocity if it runs into the edge of screen
                if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }
                if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }
                this.x += this.dx;
                this.y += this.dy;

                // Interactivity with mouse
                // Increase the circle size when mouse is within 50px, unless it's hovering over a link
                if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && (mouse.y > 100 || mouse.x < window.innerWidth - 500) && (mouse.y < window.innerHeight - 90 || mouse.x < window.innerWidth / 2 - 65 || mouse.x > window.innerWidth / 2 + 65)) {
                    // Increase circle size until it reaches max radius. Disable for mobile
                    if (this.radius < maxRadius && window.innerWidth > 770) {
                        this.radius += 1.66;
                    }
                }
                else if (this.radius > minRadius) {
                    this.radius -= 1;
                }

                // Redraw the circle after properties have been updated
                this.draw();
            }
        }

        // Generate all circles on canvas
        function init() {
            circleArr = [];
            for (var i = 0; i < 200; i++) {
                var radius = Math.random() * 3 + 2;
                var x = Math.random() * (window.innerWidth - radius * 2) + radius;
                var y = Math.random() * (window.innerHeight - radius * 2) + radius;
                var dx = (Math.random() - 0.5);
                var dy = (Math.random() - 0.5);
                circleArr.push(new Circle(x, y, dx, dy, radius));
            }
        }

        // Continuously called, clears canvas and redraws all circles with updated properties
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (var i = 0; i < circleArr.length; i++) {
                circleArr[i].update();
            }

            // Draw text in center of canvas
            c.fillStyle = "#eaeaea";
            c.font = "bold 28px 'Helvetica'";
            var textString = "Hi, I'm Jon. I design and build web applications from scratch.",
                textWidth = c.measureText(textString).width;
            // Draw different text for mobile width
            if (canvas.width < 800) {
                c.font = "bold 15px 'Helvetica'";
                textString = "Hi, I'm Jon. I design and build web applications.";
                textWidth = c.measureText(textString).width;
            }
            c.save();
            c.translate((canvas.width / 2) - (textWidth / 2), canvas.height / 2);
            c.shadowColor = "black";
            c.shadowOffsetX = 0;
            c.shadowOffsetY = 0;
            c.shadowBlur = 10;
            c.fillText(textString, 0, 0);
            c.restore();
        }

        init();
        animate();
    }

    render() {
        return (
            <div className="text-center">
                <canvas ref="myCanvas" />
                <div id="learnBtn">
                    <a onClick={() => this.scrollToSection("Skills")}>
                        Learn more<br />
                        <i className="glyphicon glyphicon-chevron-down"></i>
                    </a>
                </div>
            </div>
        );
    }
}