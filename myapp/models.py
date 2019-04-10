from django.db import models

# Create your models here.

class Message(models.Model):
    nom = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=255, null=False)
    message = models.CharField(max_length=255, null=False)


class Animation(models.Model):
    nom = models.CharField(max_length=255, null=False)
    animation = models.CharField(max_length=255, null=False)
    zip = models.CharField(max_length=255, null=False)
