function validateLocationBranchForm() {
    var fields = ["location", "office_name"];
    var n = fields.length;
    var errors = [];
    for (var i = 0; i < n; i++) {
        var fieldname = fields[i];
        if (document.forms["myForm0"][fieldname].value == "") {
            errors.push(fieldname);
        }
    }
    if (errors.length) {
        alert(errors.join() + " must be filled out");
        return false;
    }
}