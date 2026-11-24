const API_URL = "http://localhost:5000/api/profile"; //stores API address
// Authorized request
async function getProfile(){     //creating function while function name is getprofile
    const token = document.getElementById("token").value; //html id token
    const result = document.getElementById("result");  //html id result
    result.innerHTML = "Loading..."; //page is loading
//error handling
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token }});
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
   }result.innerHTML = `
            <h5 class="text-success">Success!</h5>
            <p>${data.message}</p>
            <p>Name: ${data.user.name}</p>
            <p>Role: ${data.user.role}</p>
        `;
    } catch (error) {
        result.innerHTML = `
            <p class="text-danger">
                Error: ${error.message}
            </p>
        `;
    }
}
// Unauthorized request
async function testUnauthorized() { //creating a function named testunauthorized 
    document.getElementById("token").value = "wrong-token";
    await getProfile();}

// Unauthorized request
async function testUnauthorized() { //creating a function named testunauthorized 
    document.getElementById("token").value = "wrong-token";
    await getProfile();}
