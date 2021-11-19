# Este repositorio contiene algunos ejemplos sobre como se estructura un dockerfile así como una aplicación multicontenedor con docker-compose

* dockerfile_nginx_from_scratch: ejemplo básico sobre como establecer la configuración de una imagen que haga uso del sistema de archivos de ubuntu como base y se instale un servidor nginx
* Dockerfile: contiene un concepto similar al ejemplo anterior solo que reutilizando la imagen existente de nginx, por lo tanto la configuración se puede lograr en menos pasos.
* node_project/Dockerfile_node_project: contiene la configuracion para ejecutar una aplicacion de nodejs utilizando la imagen de node como base.
* node_project/docker-compose.yml: contiene la configuración básica para ejecutar una aplicación multi-contenedor compuesta de un backend en nodejs y un gestor de bases de datos no relacional (mongodb). Los datos persisten sin importar que se borre la aplicación ya que se hace uso de volumenes.
