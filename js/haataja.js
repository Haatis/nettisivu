$(document).ready(function(){

function getBmi(height, weight) {
    let pituusm = height/100
    let pituuskaava = Math.pow(pituusm, 2.5)
    let vastaus = weight/pituuskaava * 1.3
    return vastaus.toFixed(1);
}

function getWeightLimit (value, factor) {
    let limit = (factor/1.3) * Math.pow(value/100, 2.5)
    limit = limit.toFixed(0)
    return limit
}

$("#bmi").click(function(){
    if (validateInput() === false){
        return;
    }
    let paino = Number($("#exampleFormControlInput2").val())
    let pituus = Number($("#exampleFormControlInput3").val())
    let vastaus = getBmi(pituus, paino)
    $("#pmi").html(vastaus)
    let ali = getWeightLimit(pituus, 18.5)
    let yli = getWeightLimit(pituus, 24,9) 
    if ($('#exampleCheck1').is(':checked')) {
        $("#limit").html(ali + " - " + yli)
    } else {
        $("#limit").html("")
    }
    if (vastaus < 17){
        $("#eka").addClass("valittu")
    } else if (vastaus < 18.5){
        $("#toka").addClass("valittu")
    } else if (vastaus < 25){
        $("#kolmas").addClass("valittu")
    } else if (vastaus < 30){
        $("#neljäs").addClass("valittu")
    } else if (vastaus < 35){
        $("#viides").addClass("valittu")
    } else if (vastaus < 40){
        $("#kuudes").addClass("valittu")
    } else{
        $("#seitsemäs").addClass("valittu")
    }
  
});

$("[name=exampleRadios]").click(function(){
    $("#exampleFormControlInput4").focus()
})

$("#waist").click(function(){
    let vyötärö = Number($("#exampleFormControlInput4").val())
    let sukupuoli = Number($('[name=exampleRadios]:checked').val())
    
    if(sukupuoli === 1) {
        if (vyötärö <90) {
            $("#eriski").addClass("valittu")
        } else if (vyötärö <= 100){
            $("#priski").addClass("valittu")
        } else {
            $("#iriski").addClass("valittu")
        }
    } else {
        if (vyötärö <80) {
            $("#eriski").addClass("valittu")
        } else if (vyötärö <= 90){
            $("#priski").addClass("valittu")
        } else {
            $("#iriski").addClass("valittu")
        }
    }
    $("#exampleFormControlInput4").val("")
});

$("#sarake1").focusin(function(){
    $("#pmi").html("")
    $("#limit").html("")
    $("#eka").removeClass("valittu")
    $("#toka").removeClass("valittu")
    $("#kolmas").removeClass("valittu")
    $("#neljäs").removeClass("valittu")
    $("#viides").removeClass("valittu")
    $("#kuudes").removeClass("valittu")
    $("#seitsemäs").removeClass("valittu")

})

$("#sarake2").focusin(function(){
    $("#eriski").removeClass("valittu")
    $("#priski").removeClass("valittu")
    $("#iriski").removeClass("valittu")

})


 $("[data-toggle=tooltip]").tooltip({trigger:"click"});

$("[data-toggle=popover]").popover();

function validateInput(){
    let today = new Date()
     let current_year = today.getFullYear()
     let syntymävuosi = Number($("#exampleFormControlInput").val())
     let ikä = current_year - syntymävuosi
    
    if(Number($("#exampleFormControlInput").val()) === 0){
        $("#modal-title").html("Missing input")
        $("#modal-body").html("You need to write all input data")
        $("#error_message").modal("show");
        return false
    } else if(Number($("#exampleFormControlInput2").val()) === 0){
        $("#modal-title").html("Missing input")
        $("#modal-body").html("You need to write all input data")
        $("#error_message").modal("show");
        return false
    } else if(Number($("#exampleFormControlInput3").val()) === 0){
        $("#modal-title").html("Missing input")
        $("#modal-body").html("You need to write all input data")
        $("#error_message").modal("show");
        return false
    } else if (ikä<20) {
        $("#modal-title").html("Note the age")
        $("#modal-body").html("BMI results are for person aged 20-60")
        $("#error_message").modal("show");
        return true
    } else if (ikä>60) {
        $("#modal-title").html("Note the age")
        $("#modal-body").html("BMI results are for person aged 20-60")
        $("#error_message").modal("show");
        return true
    } else {
        return true
    }
  
   
    
    
}


   



   

});