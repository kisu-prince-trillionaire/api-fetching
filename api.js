// XML METHOD

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send();
request.onload = ()=>{
    console.log(JSON.parse(request.response));
}

// AJAX METHOD

// $(document).ready(function(){
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/todos",
//         type: "GET",
//         success: function(result){
//             console.log(result);
//         }
//     })
// })

// FETCH METHOD

// fetch('https://jsonplaceholder.typicode.com/todos').then(response =>{
//     return response.json();
// }).then(data =>{
//     console.log(data);
// })

// AXIOS METHOD

/*<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

axios.get("https://jsonplaceholder.typicode.com/todos")
.then(response =>{
    console.log(response.data)
})*/