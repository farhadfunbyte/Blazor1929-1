function sweet_alert(title, text, icon) {
    
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
     
}

function test_confirm(text) {
    return confirm(text);
}