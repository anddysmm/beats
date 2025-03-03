#!/bin/bash

# Obtenemos la dirección IP del servidor
mi_ip=$(hostname -I | cut -d' ' -f1)

# Ruta al archivo .env
env_file=".env"

# Reemplazamos el valor de MI_IP con la dirección IP obtenida
sed -i "s/^MI_IP=.*/MI_IP=$mi_ip/" "$env_file"

# Reemplazamos el valor de APP_URL con la dirección IP obtenida
sed -i "s|^APP_URL=.*|APP_URL=http://$mi_ip/|" "$env_file"

echo "Dirección IP y APP_URL actualizados en el archivo .env."
