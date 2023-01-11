export const login = (username: string, password: string) =>
  fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

//1.Te fetch ku bojim te pjesa e body-t kemi mi bo pass te
//dhenat qe i pranon API
//2. .env ruhen cka kemi variablat ose vlerat shka jon
//specifike per environmente
//3. Kur dojim mi kriju ni vler ose ni variabel qe na vyn mu
//kon specifike e perdorim permes VITE_
//4. .MODE na trregon qe environmenti osht development psh
//5.Te environmenti variablat ose te filet cka ruhen edhe dishka
//tjeter osht qe nuk ruhen vetem si URL po edhe si key-s
//6.Filet .env duhet mi shtu ne gitignore qe mes me u shtu ne
//git hub se duhet mu siguru qe njerzt qe sduhet me pas
//qasej ne to, mes me pas dmth
//7.React Query osht qe na mundeson pjesen per me i lexu te dhenat
// ne menyre me te lehte.
//8. Te dhenat me React Query ose requestat qe bohen, bohen ne dy menyra,
//me UseQuery ose me UseMutation
//9. Query sht si Get, qe lexon veq te dhena,Dmth kur dojim me lexu te
//dhena prej API e perdorim UseQuery. Po kur dojim me modifiku
//ose me dergu te dhena e perdorim Mutations
//10.UseQuery osht si ni costumehook, qe shka kthej prej ksej jon
//qato states isLoading, error, data
//11.Shka osht e rendesishme qe prej React Queryt me pranu UseQuery
//osht e para duhet mi pas ni key ose ni emer unik qe me qata kan mu
//bo cache te dhenat ne memorie, edhe e dyta osht funksioni qe ka
//me na kthy Promise
//12.Cashing osht qe kur ta bojim ni request kjo e run en
//memorie te vet edhe kur na vyn kjo e kthen prej memories.
//13.Axios mundson ni sintaks ma te lehte se qysh mi bo requestat,
//plus mrena vetit e ka nifar fetchi. I bon ma tlehta edhe ma
// tkuptueshme API Requestat.
