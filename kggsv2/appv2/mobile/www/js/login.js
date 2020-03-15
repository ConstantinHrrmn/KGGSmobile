$$('.form-to-data').on('click', function(){
    var formData = myApp.formToData('#my-form');
    alert(JSON.stringify(formData));
  }); 