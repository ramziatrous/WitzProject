Spaßvogel Projekt
23.08.2023
-angular projekt erstelt und gepusht auf github repository
<!-- create new angular projekt -->
ng new spaßvogel
24.08.2023
-components (home,navbar,footer) erstelt und bearbeitet
<!-- generat components -->
ng g c home
ng g c navbar
ng g c footer
25.08.2023
<!-- service erstelt -->
ng g s services/witz
verbindung zwischen frontend und backend
ramdom witz aus die db abgeholt und auf main page gezeigt
function erstellt da die nächste witz zu holen
28.08.2023
<!-- generat components -->
ng g c login
ng g c register
ng g c profile
ng g c top10
<!-- service erstelt -->
ng g s services/auth
routes configurieren da die link von navbar navigate zu die rechtigen seiten
Html und css von login , register seiten fertig
29.08.2023
-bewertung function und Html erstllt
-top10 function und Html erstellt
-verbundung die update und getall endpoint api mit frontend im service
-testing die bewertungs system
-test die top10 witzen
30.08.2023
-verbindung die authontification request von login und register mit frontend
-test ein user zu erstellen und login
31.08.2023
-witze und user seite erstellen
-configure die user und witze seiten das die sind nur bei admin sichtbar
01.09.2023
-beschprechung mit team uber deployment
-docker file erstellen
-docker image erstellen und auf AWS ECR pushen
04.09.2023
-AWS ECS Cluster und Task Definition erstelt 
-aus AWS Certification Manager ein SSL certificate erstelt und mit domain name in Aws Route 53 bestätig
-Application LoadBalencer und Target Group erstelt
-ein Service mit LB in der ECS Cluster erstelt
05.09.2023
-Domain name mit LB verbinden über DNS
