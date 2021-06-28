
    function xRequ() {
        var i = document.getElementById('in1').value;
        var prevPromt = document.getElementById('prompt').innerText +' '+i;

        var xReq = new XMLHttpRequest();
        xReq.open("GET", "../cgi-bin/term?cmd="+i, true); 

        xReq.send();
        //Output of the request

        xReq.onload= function() {
            var cmdOutput = xReq.responseText;
            var output = prevPromt+'\n'+cmdOutput;

        document.getElementById('d1').innerHTML += output;
        }
        document.getElementById('in1').value=null;
       
    }

    var input = document.getElementById("in1");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById("submitt").click();
      }
    });
  
        function theming() {
        var i = document.body;
      
        i.classList.toggle("Day");
    }

        function openNav(enter) {
           
            if (enter === "syscmd") {
                var side= "<h2 style='color: #ffee02;'>System commands</h2> <p>Here you can run ordinary linux commands such as :"
                +" <code>    $ ls <br> </code> <code>  $ cal <br> </code> <code>   $ date <br> </code></p>";
document.getElementById("side").innerHTML = side;
            }
            else if (enter === "DImg") {
                var side=  "<h2 style='color: #ffee02;'>Docker images </h2>"+
                "<p>Docker images are OS used to launch containers. "+
             "  <br> To see locally availaible docker images, issue the following command:"+
             "  <code>$docker images</code> ";
                document.getElementById("side").innerHTML = side;
            }
            else if (enter === "DPs") {
                var side=  " <h2 style='color: #ffee02;'>Docker ps command</h2>" +
                "<p>To see the containers launched, you can use one of the following commands :" +
                  " <code>$docker ps</code> To see currently running containers" +
                "<code>$docker ps -a</code> To see all the created containers including running and stopped</p>" ;
                document.getElementById("side").innerHTML = side;
}
else if (enter === "DRun") {
    var side= "<h2 style='color: #ffee02;'>Docker run command </h2>" +
    " <p>To launch a new container, issue the following command wiht this syntax:<code>" +
    " $docker run -dit --name ContName imageName  </code> for more help issue<code>  $Docker commands help</code> </p>" ;
    document.getElementById("side").innerHTML = side;
}
else if (enter === "DRm") {
    var side= " <h2 style='color: #ffee02;'>Docker rm command</h2>" +
    " <p> Docker rm allows you to delete a container. to remove follow this syntax: <code>" +
    " $docker rm containerName</code> use the  '-f' option to use forcefull manner</p>" ;
    document.getElementById("side").innerHTML = side;
            }
            else if (enter === "DEx") {
                var side= " <h2 style='color: #ffee02;'>Docker exec command</h2>" +
                " <p>This command allows you to run a command inside the container by passing the command to be executed as argument. follow this syntax:" +
                " <code> $docker exec containerName dockerOSCommand</code></p>" ;
                document.getElementById("side").innerHTML = side;
}
else if (enter === "MHelp") {
    var side= " <h2 style='color: #ffee02;'>More help </h2>"+
  "<p>Run the following command to get help, but keep in mind this command is not a docker command:"+
    "    <code>$Docker commands help</code> <br / > Or you should refer to the official documentation of docker </p>";
    document.getElementById("side").innerHTML = side;
}
else if (enter === "DHelp") {
    var side= "<h2>Docker help </h2>"+
    "<p>To get get help on docker, you can issue one of the following commands:<code>    $docker --help</code> "
    "   To get help on docker commands options usage<code>    $man docker</code>To get user manuals</p> ";
    document.getElementById("side").innerHTML = side;
}
else  {
    var side= " <h2 style='color: #ffee02;'>Virtual practice lab </h2>" +
    " <p>This virtual system is temporary and launched containers are deleted at the end of each session  </p>" ;
    document.getElementById("side").innerHTML = side;
}
        
var wiDth = window.matchMedia("(max-width: 600px)");
if (wiDth.matches) {
  document.getElementById("mySidenav").style.width = "100vw";
}  
else {
  document.getElementById("mySidenav").style.width = "25vw";
}  
          document.getElementById("mySidenav").style.height = "100%";
          document.getElementById("mySidenav").style.paddingLeft="25px"
          document.getElementById("mySidenav").style.zIndex = "200";
        
        }
        
        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }
        
  