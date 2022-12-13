const table = document.getElementById("userTable");
/*Kullanıcı oluşturuken hata alındı ve table fonksiyon dışına aktarıldı bu sayede hata ortadan kalktı*/
function getUserlist(){

    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        for(user of data.data){
            // console.log(user);
            table.innerHTML += `
            <tr>
            <td>
              <input type="text" class="form-control" id="" value="${user.first_name}">
            </td>
            <td>
              <input type="text" class="form-control" id="" value="${user.last_name}">
            </td>
            <td>
              <input type="text" class="form-control" id="" value="${user.email}">
            </td>
            <td>
              <a href="" class="btn btn-warning" onclick="updateUser(${user.id})">Güncelle</a>
              <a href="" class="btn btn-danger" onclick="deleteUser(${user.id})">Sil</a>
            </td>

          </tr>`
        }
    })
}

getUserlist()

function refreshData(){
    getUserlist();
}

/* Kullanıcı oluştur */

function createUser(){
    let data={
            first_name:document.getElementById("first_name").value || "Değer Yok",
            last_name:document.getElementById("last_name").value || "Değer Yok",
            email:document.getElementById("email").value || "Değer Yok"
    }
    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })

    .then(response => response.json())
    .then(data =>{  

        console.log(data);
        table.innerHTML += `
            <tr>
            <td>
              <input type="text" class="form-control" id="" value="${data.first_name}">
            </td>
            <td>
              <input type="text" class="form-control" id="" value="${data.last_name}">
            </td>
            <td>
              <input type="text" class="form-control" id="" value="${data.email}">
            </td>
            <td>
              <a href="" class="btn btn-warning" onclick="updateUser(${data.id})">Güncelle</a>
              <a href="" class="btn btn-danger" onclick="deleteUser(${data.id})">Sil</a>
            </td>

          </tr>`
    })
    .catch((error)=>{
        console.log("Hata :",error)
    })
}
