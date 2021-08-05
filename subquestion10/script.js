let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome':  // welcome is added
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);