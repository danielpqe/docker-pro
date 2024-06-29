FROM centos:7

RUN yum -y update

COPY src /var/www/html

RUN yum -y install httpd

# This is the command that will be executed when the container starts
CMD ["apachectl", "-D", "FOREGROUND"] 