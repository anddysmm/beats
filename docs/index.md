# beatS
· Kevin Gabriel Gonzalez Trujillo.

· Anddy Machicela Maldonado.

· Maria Danniella Constanino Noche.

## Execució del projecte
>```
>git clone https://gitlab.inf.edt.cat/a221879am/beats.git
>
>cd/beats/beats
>
>docker run --rm \
>    -u "$(id -u):$(id -g)" \
>    -v ./:/var/www/html \
>    -w /var/www/html \
>    laravelsail/php81-composer:latest \
>    composer install --ignore-platform-reqs
>    composer require laravel/breeze --dev
>
>./actualizar_ip.sh
>./vendor/bin/sail composer install
>./vendor/bin/sail php artisan storage:link
>./vendor/bin/sail npm install react-dom@18.2.0
>./vendor/bin/sail npm install @reduxjs/toolkit@2.2.3
>./vendor/bin/sail npm install
>./vendor/bin/sail php artisan migrate:fresh --seed
>./vendor/bin/sail npm run dev
>```

## Descripcio del projecte (ABSTRACT)

 *Català*
```
El nostre projecte és una aplicació reproductora de música per què els usuaris puguin gaudir de la música que els agrada. La plataforma requereix que els usuaris es registrin i iniciïn sessió. Després d'iniciar sessió, els usuaris poden explorar moltes cançons, artistes i àlbums amb funcionalitats de cerca avançades. A més, hem integrat l'API de Ticketmaster, per proporcionar informació sobre concerts en viu.
```

 *English*
```
Our project is a music player application designed for users to enjoy the music they love. The platform requires users to register and log in. After logging in, users can explore a wide range of songs, artists, and albums with advanced search features. Additionally, we have integrated the Ticketmaster API to provide information about live concerts.
```

## Diagrames

Diagrama de Gantt:
Mostra la distribució de la nostra feina a més de definir uns objectius clars.
![imagen!](/doc/capturas/gantt.png)


Diagrama de casos d'ús:
Mostra les accions posibles per part de l'usuari resaltant cadascuna de les funcionalitats treballades.
![imagen!](/doc/capturas/useCases.jpg)


Model Relacional: 
Seria la representació visual de la estructura de la base de dades.
![imagen!](/doc/capturas/beatss.drawio.png)


## Wireframes
Son els esborranys de com voldríem que quedi les pàgines. La majoría d'elles si es semblen al producte final. També les hem comprovat amb el móvil, i no és el mateix que els wireframes.
![imagen!](/doc/capturas/wireframe1.png)
![imagen!](/doc/capturas/wireframe2.png)




## Tecnologies Utilitzades
La majoria de eines utilitzades en aquest projecte son:
```
- Laravel
- React
- Inertia
- MySql
- Api de Ticketmaster
- Gitlab
- Docker
- Redux
- Bootsrap
- Vite
```

## Funcionalitats a futur (no implementades)
Teníem dos funcionalitats planejades, però no les hem pogut implementar per drets d'autor i temps:

-Volíem permetre als usuaris escanejar codis com el de Spotify amb la càmera per redirigir-los a una cancçó..

-Teníem la idea d'utilitzar la IA de Gèminis per mostrar la lletra de les cançons en temps real.

## Conclusions
Degut al fet d'apendre com juntar Laravel i React, intentar fer que l'aplicació tingués un bon aspecte, al poc temps d'aquest últim projecte i a algunes complicacións més que ens van sorgir creiem que finalment tenim un projecte que està bastant decent.

Personalment creiem que el producte final que el que es l'aplicació que hem fet fins ara s'apropa bastant al que volíem presentar finalment.


Tot i aixó tenim la sensació qué hem fet un bon projecte i bastant interessant.