const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const enterAdm = confirm("Увійти як адміністратор?");
console.log(enterAdm);
if(enterAdm == true){const enterpass = prompt("Уведіть пароль: ");
let yes;
yes = ADMIN_PASSWORD == enterpass;
console.log(yes);
if(yes == true){message == alert("Лакскаво просимо!");}
else{
    message == alert("Доступ заборонений, невірний пароль!")
};}
else{
    message == alert("Відказано.")
}

