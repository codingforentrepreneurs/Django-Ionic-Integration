# Django + Ionic Integration

[![Django + Angular + Ionic Logo](https://cfe2-static.s3-us-west-2.amazonaws.com/media/courses/django-angular-ionic/images/Django_Angular_Ionic.jpg)
](https://www.codingforentrepreneurs.com/courses/django-angular-ionic/)

Building on top of [Section 2 Angular Integration](https://www.codingforentrepreneurs.com/courses/django-angular-ionic/angular-integration/)([repo](https://github.com/codingforentrepreneurs/Django-Angular-Ionic)), we learn how to integrate a Django project with the Ionic Framework.

- [Course](https://www.codingforentrepreneurs.com/courses/django-angular-ionic/)
- [Section](https://www.codingforentrepreneurs.com/courses/django-angular-ionic/ionic-integration/)


## Pulling this project?

#### Install node packages
```
$ mkdir tryIonic
$ cd try Ionic
$ mkdir cfeApp
$ cd cfeApp
$ git clone https://github.com/codingforentrepreneurs/Django-Ionic-Integration .
$ npm install
$ ionic serve
```

#### A Fresh Install of the Django Backend (For Lesson 17)
This backend was built in our [Rest API](https://www.codingforentrepreneurs.com/courses/rest-api/) course.
```
$ mkdir dev
$ cd dev
$ mkdir backend
$ cd backend
$ git clone https://github.com/codingforentrepreneurs/Django-Angular-Ionic/ .
$ git reset 65f74b19ea8e43a5b001a100a0fb151c8265892f --hard
$ rm -rf .git
$ pipenv install --python python3.6
$ pipenv install -r requirements.txt
$ pipenv install django-cors-headers
$ pipenv install coreapi
$ pipenv shell
$ cd src
$ python manage.py runserver
```