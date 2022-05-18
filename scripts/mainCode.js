function cpfValid(number){
    if(number.length != 11){
        return false;
    } else {
        var numbers = number.substring(0,9);
        var digits = number.substring(9);
        var sum = 0;
        for(let i = 10; i > 1; i--){
            sum+=numbers.charAt(10-i)*i;
        }

        var restOf = (sum%11) < 2 ? 0 : 11 - (sum%11);
        
        //validação do primeiro dígito
        if(restOf != digits.charAt(0)){
            return false;
        } else {            
            sum = 0;
            numbers = number.substring(0,10);
            for(let i = 11; i > 1; i--){
                sum += numbers.charAt(11-i)*i;
            }

            restOf = (sum%11) < 2 ? 0 : 11 - (sum%11);

            //validação do segundo dígito
            if(restOf != digits.charAt(1)){
                return false;
            } else {
                return true;
            }
        }

    }
}
function validate(){
    console.log("Efetuando validação...")

    var cpfNumber = document.getElementById("cpf-number").value;
    var validateResult = cpfValid(cpfNumber);

    if(validateResult){
        document.getElementById("success").style.display = "block";
    } else{
        document.getElementById("fail").style.display = "block";
    }
}
