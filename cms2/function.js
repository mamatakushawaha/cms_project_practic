function head(title,theme='style') {
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${theme}.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
    <div class="head">
       <div class="titl">
        <a href="index.html">${title}</a>
        </div>
        <div class="service">
        <ul>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Exercises</a></li>
        <li><a href="#">Certificates</a></li>
        <li><a href="#">Services</a></li>
        </ul>
        </div>
        <div class="serch">
         <input type="text"  placeholder="Search...">
         <i class="fa fa-search" aria-hidden="true"  ></i>
        </div>
        <div class="usr">
        <h4> My Account</h4>
        <i class="fas fa-user-circle"></i>
        </div>
    </div>
    `);
    
}

function nav(navdata='home'){
    home=['Home','Html','CSS','JavaScript','Jquery','JAVA','PHP','Bootstrap','SQL'];
    Html=['Intro','Form','Table','Frame','iframe','List'];
    CSS=['Intro','Color','Box-model','Flex','Background-Images','Text-style','Font-family'];
    JavaScript=['Intro','Event','DOM','Variable','DataType','Function','Loops'];
    Jquery=['Intro','Event','API','Routes'];
    if(navdata=='home'){
        document.write(`<div class="nav" >
        <ul>`);
            for(i=0;i<home.length;i++){
                document.write(`<li><a href="${home[i]}.html" >${home[i]}</li>`);
            }
       document.write(`</ul>
        </div>`);
    }
    else if(navdata=='Html'){
        document.write(`<div class="nav">
        <ul>`);
            for(i=0;i<Html.length;i++){
                document.write(`<li><a href="${Html[i]}.html">${Html[i]}</li>`);
            }
        document.write(`</ul>
        </div>`);
    }
    else if(navdata=='CSS'){
        document.write(`<div class="nav" >
        <ul>`);
            for(i=0;i<CSS.length;i++){
                document.write(`<li><a  href="${CSS[i]}.html">${CSS[i]}</li>`);
            }
        document.write(`</ul>
        </div>`);
    }
    else if(navdata=='JavaScript'){
        document.write(`<div class="nav">
        <ul>`);
            for(i=0;i<JavaScript.length;i++){
                document.write(`<li><a href="${JavaScript[i]}.html">${JavaScript[i]}</li>`);
            }
        document.write(`</ul>
        </div>`);
    }
    else if(navdata=='Jquery'){
        document.write(`<div class="nav">
        <ul>`);
            for(i=0;i<Jquery.length;i++){
                document.write(`<li><a href="${Jquery[i]}.html">${Jquery[i]}</li>`);
            }
        document.write(`</ul>
        </div>`);
    }
}

// function nav() {
//     document.write(`<div class="nav">
//     <ul>
//         <li><a href="index.html">Home</a></li>
//         <li><a href="page1.html">page 1</a></li>
//         <li><a href="page2.html">page 2</a></li>
//         <li><a href="page3.html">page 3</a></li>
//         <li><a href="page4.html">page 4</a></li>
//     </ul>
// </div>`);
// }

function post() {

        document.write(`<div class="post">
    <h1>Learn to Code</h1>
    <h2> with the world's largest web developer site.</h2>
    <div class="srh">
    <input type="text" placeholder="search our tutorials,e.g.HTML">
    <i class="fa fa-search" aria-hidden="true"></i>
    </div>
    <a href="#">Not Sure Where To Begin?.</a>
</div>

`);
 }
 function hlt(){
    document.write(`
        <div class="dt">
        <h1>What is an html File? </h1>
        <p><pre>
HTML is a format that tells a computer how to display a web page. The documents themselves are plain text files 
with special "tags" or codes that a web browser uses to interpret and display information on your computer 
screen. ƒ
❖ HTML stands for Hyper Text Markup Language ƒ
❖ Hypertext is text that contains link for another page or section.
❖ Markup tag is a hidden keywords written in angular brackets which is not show in web-browser. The 
markup tags tell the Web browser how to display the page. 
❖ An HTML file is a text file containing small markup tags ƒ 
❖ The markup tags tell the Web browser how to display the page ƒ 
❖ An HTML file must have an htm or html file extension
❖ HTML is not case sensitive. 
❖ Exa :- <HTML> </HTML> or <html> <html>
❖ Latest Version of HTML is HTML 5.2
<div class="bx" style="padding:10px; width:120px; border-radious:5px;"> Read more..</div>
</pre>
 </p>
<h1>What are HTML tags?</h1>
<p><pre> 
❖ HTML tags are used to mark-up HTML elements.
❖ HTML tags are surrounded by the two characters < and > .
❖ The surrounding characters are called angle brackets ƒ.
❖ HTML tags normally come in pairs like <b> and </b>.
❖ The first tag in a pair is the start tag, the second tag is the end tag.
❖ The text between the start and end tags is the element content
<div class="bx" style="padding:10px; width:120px; border-radious:5px;"> Read more..</div>

</pre></p>
<p><pre>
<h1>Merits of HTML:</h1> 
❖ First advantage it is widely used.
❖ Every browser supports HTML language.
❖ Easy to learn and use.
❖ It is by default in every windows so you don't need to purchase extra software.
<h1>Demerits of HTML: </h1>
❖ It can create only static and plain pages so if we need dynamic pages then HTML is not useful.
❖ Need to write lot of code for making simple webpage.
❖ Security features are not good in HTML.
❖ If we need to write long code for making a webpage then it produces some complexity
</pre></p>
      </div>  `);
 }

function hmlt() {
    document.write(`
        <div class="hml">
        <div class="d1">
        <h1>HTML</h1>
        <h4>The Language for building web pages</h4>
        <div class="c1"> Learn HTML</div>
        <div class="c2"> Video Tutorial</div>
        <div class="c3"> HTML Reference</div>
        <div class="c4"> Get Certified</div>
        </div>
        <div class="cmd">
        <h4>HTML Example :</h4>
        <div class="code">
        <p>
        <pre>
            <!DOCTYPE html>
            <html>
            <head>
            <title>HTML Tutorial</title>
            </head>
           <body>
           <h1>This is a heading</h1>
           <p>This is a paragraph.</p>
           </body>
           </html>
        </pre>
        </p>
        
         </div>
         <div class="bx"> Try it Yourself</div>
        </div>
        </div>
        `);
}
function csl(){
    document.write(`
        <div class="hml" style="background-color:rgba(182, 182, 18,0.4);">
        <div class="d1">
        <h1>CSS</h1>
        <h4>The language for styling web pages</h4>
        <div class="c1"> Learn CSS</div>
        <div class="c3"> CSS Reference</div>
        <div class="c4"> Get Certified</div>
        </div>
        <div class="cmd">
        <h4>CSS Example :</h4>
        <div class="code" style="padding-top:25px;">
        <p>
        <pre>
       body{
          background-color: lightblue;
        }

       h1{
          color: white;
          text-align: center;
        } 

       p{
           font-family: verdana;
        }

       h4{
            color:pink;
       }
        </pre>
        </p>
        
         </div>
         <div class="bx"> Try it Yourself</div>
        </div>
        </div>
        `);
}

function jsl(){
    document.write(`
         <div class="hml" style="background-color:rgb(5, 5, 12,1);">
        <div class="d1">
        <h1 style="color:white; text-decoration:none;">Javascript</h1>
        <h4 style="color:white;">The language for programming web pages</h4>
        <div class="c1"> Learn Javascript</div>
        <div class="c3" style="background-color:rgba(150, 255, 180,0.2);" > javascript Reference</div>
        <div class="c4"> Get Certified</div>
        </div>
        <div class="cmd">
        <h4>Javascript Example :</h4>
        <div class="code" style="padding-top:25px;">
     <p>
     <pre>
       <button onclick="myFunction()">Click Me!</button>
       <script>
       function myFunction() {
       let x = document.getElementById("demo");
       x.style.fontSize = "25px";
       x.style.color = "red";
      }
      </script>
     </pre>
     </p>
        
         </div>
         <div class="bx"> Try it Yourself</div>
        </div>
        </div>
        `);
}
 function lern(){
    document.write(`
        <div class="lrn">
        <h1>My Learning</h1>
        <h2>Track your progress with our free "My Learning" program.</h2>
        <h2 style="margin-left:70px;">Log in to your account, and start earning points!</h2>
        <div class="dtls">
        <div class="d1">
        <h2 style="font-size:40px;">Hii, friends</h2>
        <h3 style="text-align: justify; ">welcome to the the new "My Learning" here at my website.This will be your hub to all the tutorials we offer and your lerning progress.</h3>
        <h3>We hope you will continue to learn with us.</h3>
        </div>
        <div class="d2">
         <img src="./img/rate.png">
        </div>
        </div>
        </div>

        <div class="quiz">
        <h1>Exercises and Quizzes</h1>
        <h3>Test your skills!</h3>
        <div class="section">
        <div class="bx1">Exercises</div>
        <div class="bx2">Quizzes</div>
        </div>
        </div>

        
        `);
 }
 function imga(){
 document.write(`
    <div class="templt">
    <h1>Web Templates</h1>
    <h2>Browse our selection of free responsive HTML Templates</h2>
    <img src="./img/download.jpg" id="banner" alt="image gayb">
<div class="box">
<ul>
    <li onclick="banner('./img/download3.jpg')"></li>
    <li onclick="banner('./img/images.jpg')"></li>
    <li onclick="banner('./img/download1.jpg')"></li>
    <li onclick="banner('./img/download2.jpg')"></li>
</ul>
</div>
</div>
    `);
}
 function banner(idata){
    document.getElementById('banner').src=idata; 
}

function aside() {
    document.write(` <h3>New Course</h3>
    <img src="girls.jpg" alt="aside1">
    <img src="girls.jpg" alt="aside1">`);
}

function footer() {
    document.write(`<div class="footer">
		<div class="row">
			<div class="col-lg-3">
				<div class="widget">
					<h4 class="widgetheading">Our Contact</h4>
					<address>
					<strong>Go Hackathon</strong><br>
					H-87, Sector-63, Noida<br>
					 Pin- 201301  U.P.</address>
					<p>
						<i class="icon-phone"></i> +91 7678476713 <br>
						 +91 9910018925 <br>
						<i class="icon-envelope-alt"></i> info@gohackathon.in
					</p>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="widget">
					<h4 class="widgetheading">Quick Links</h4>
					<ul class="link-list">
						<li><a href="index.html">Home</a></li>
						<li><a href="about.html">About Us</a></li>
						<li><a href="pricing.html">Pricing policy</a></li>
						<li><a href="courses.html">Courses</a></li>
						<li><a href="contact.html">Contact us</a></li>
					</ul>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="widget">
					<h4 class="widgetheading">GO HACKATHON</h4>
					<ul class="link-list">
						<li><a href="#">Go Hackathon comprises eminent Industry professionals</a></li>
						<li><a href="#">Pellentesque et pulvinar enim. Quisque at tempor ligula</a></li>
						<li><a href="#">educators, and students meant to nurture talent among budding tech professionals.</a></li>
					</ul>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="widget">
					<h4 class="widgetheading">Subscribe</h4>
					<ul class="link-list">
						<li><a href="#">Facebook</a></li>
						<li><a href="#">Linkedin</a></li>
                        <li><a href="#">Twitter</a></li>
					</ul>
                    <ul class="icon">
                    <li><i class="fa-brands fa-facebook " style="color:#fff;"></i></li>
                    <li><i class="fa-brands fa-linkedin " style="color: #fff;"></i></li>
                    <li><i class="fa-brands fa-twitter " style="color: #fff;"></i></li>
                    </ul>
				</div>
			</div>
		</div>
	</div>
	<div id="sub-footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="copyright">
						<p>
							<span>&copy; Above Site All right reserved. Template By </span> Go Hackathon.
						</p>
					</div>
				</div>
            </div>
        </div>
        
     
      <h5 style="text-align:center; padding:18px">Copyright &copy; 2023 site name</h5>
    </div>
</body>

</html>`);
}


