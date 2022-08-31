function StoreData() {
    let title = document.getElementById('Title').value;
    let decription = document.getElementById('DescriptionText').value;
    let Identified = document.getElementById('identifiedBy').value;
    let date = document.getElementById('dateFound').value;
    let projectName = document.getElementById('projectName').value;
    let assignedTo = document.getElementById('assignedTo').value;
    let Status = document.getElementById("Status").value;
  


    let Ticket ={
        title: title,
        decription : decription,
        Identified : Identified,
        date : date,
        projectName : projectName,
        assignedTo : assignedTo,
        Status : Status,
    }

    let arrTicket = new Array();
        if (localStorage.getItem("Tickets") === null){
            arrTicket = new Array();
       } else {
            arrTicket = JSON.parse(localStorage.getItem("Tickets"));
            localStorage.removeItem("Tickets");
       }
        arrTicket.push(Ticket);

        localStorage.setItem('Tickets',JSON.stringify(arrTicket));

        window.location.replace('index.html');
};

