
    
    let passfield = document.getElementById('password');
    function generate(){
        let strings = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()-=+{}[]\|\|;:,.<>$%@%#^&$#%::;;,./?/`~';

        let password = '';

        for(let i = 0; i < strings.length; i++){
            let randomNum = Math.floor(Math.random() * strings.length);
            password += strings.substr(randomNum,randomNum +1);
            let finalpass = password.substr(0, document.getElementById('length').value);
            passfield.value = finalpass;
        }
    }

   
    let btncopy=document.getElementById("btn2");
    btncopy.onclick=function(){
        passfield.select("password");
        document.execCommand('copy');
    };
