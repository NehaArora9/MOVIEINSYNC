        let btnAdd= document.getElementById("btnAdd");
        let id=0;
        let name=document.getElementById("name");
        console.log(name.value)
        let city=document.getElementById("as3")
        let degree=document.getElementById("degree")
        var table = document.getElementById("myTable");


        btnAdd.onclick=()=>{
                id++
            var d = new Date();
            var tr = document.createElement('tr');

            tr.appendChild(document.createElement('td'));
            tr.appendChild(document.createElement('td'));
            tr.appendChild(document.createElement('td'));
            tr.appendChild(document.createElement('td'));
            tr.appendChild(document.createElement('td'));
    
            tr.cells[0].appendChild(document.createTextNode(name.value))
            tr.cells[1].appendChild(document.createTextNode(id));
            tr.cells[2].appendChild(document.createTextNode(city.value))
            tr.cells[3].appendChild(document.createTextNode(degree.value))
            tr.cells[4].appendChild(document.createTextNode(d))
    
            table.appendChild(tr);



        }


        // function add() {


        //     num1 = String(document.getElementById("as").value);
        //     num2 = String(document.getElementById("as1").value);
        //     num3 = String(document.getElementById("as3").value);
        //     document.getElementById("qw").value = num1;
        //     document.getElementById("qw1").value = num2;
        //     document.getElementById("qw2").value = num3;
        //     document.getElementById("demo").innerHTML = d;



        //     var i = 1;
        //     for (i = 10; i >= 1; i--) {
        //         document.getElementById("demo1").innerHTML = i;
        //     }

           

        // }

   

   // function myFunction() {
        // var row = table.insertRow(-1);
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // var cell3 = row.insertCell(2);
        // var cell4 = row.insertCell(3);
        // var cell5 = row.insertCell(4);
      

  //  }