


$(document).ready(function () {
    $.ajax({
        url: "http://192.168.1.65:8000/api/user/collectproperties/",
        type: 'GET',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token '+localStorage.getItem('token'));},
        success: function (response) {
            window.location.href = "http://192.168.1.65:8000/home"
        },
        error: function (jqXHR) {
            if (jqXHR.status == 404) { 
            } else {
                $('#username').html("<a href='http://192.168.1.65:8000/signup/' class='get-started-btnn'>Sign Up</a>");
            }
        }
    }); 




});