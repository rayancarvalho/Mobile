. document.addEventListener("deviceready", onDeviceReady, false); 2. 3. function onDeviceReady() { 4. $("#btOk").click(function(){ 5. var nome = $("#txtNome").val(); 6. if(nome.length == 0) 7. { 8. alert("preencha seu nome no campo apresentado na tela."); 9. } 10. else 11. { 12. alert("Boas Vindas "+nome+"!!"); 13. } 14. }); 15.}

