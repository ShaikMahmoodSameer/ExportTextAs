console.log(document.title);

const txtArea = document.querySelector("#txtArea");
const docTitle = document.querySelector("#savingTitle");
const docType = document.querySelector("#savingFileAs");
const saveBtn = document.querySelector("#saveBtn");





saveBtn.addEventListener('click', ()=>{
    const blob = new Blob([txtArea.value], {type: docType.value});
    console.log(blob);
    const fileURL = URL.createObjectURL(blob);
    console.log(fileURL);
    
    let createdLink = document.createElement('a');
    createdLink.href = fileURL;
    createdLink.setAttribute("download", docTitle.value);
    createdLink.innerText = "download";
    console.log(createdLink);
    document.body.appendChild(createdLink);
    createdLink.style.display = "none";
    createdLink.style.display = "block";
    createdLink.click();
    createdLink.style.display = "none";
});


