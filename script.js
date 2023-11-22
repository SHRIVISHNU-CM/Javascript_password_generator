const generatebtn = document.getElementById('generatepassword')
const passlength = document.getElementById('passlength')
const upper = document.getElementById('upper')
const nums = document.getElementById('nums')
const lower = document.getElementById('lower')
const symbols = document.getElementById('symbols');
const text = document.getElementById('text');
const copypassword = document.getElementById('copy password')

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const sym = "~!@#$%^&*()_+/"
const numbercase = "1234567890" ;
const generate = (i)=>{
            return 
        }
randompassword= ( )=>{
    let password = ""
    let data = "";
    if(upper.checked){data += uppercase}
    if(nums.checked){data += numbercase}
    if(lower.checked){data += lowercase}
    if(symbols.checked){data += sym}
    for(let i=1;i<=passlength.value;i++){
         password +=data.charAt(Math.floor(Math.random() * data.length));
    }
    
    text.value= password
    return password;

}
randompassword()
generatebtn.addEventListener('click',()=>{
    randompassword()
})
copypassword.addEventListener("click", () => {
    if(text.value !="" || text.value.length >=1){
         navigator.clipboard.writeText(text.value);
    copypassword.title = "Copied";
    }
   
});
