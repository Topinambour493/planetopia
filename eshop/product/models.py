from django.contrib.auth.models import User
from django.db import models

class Category(models.TextChoices):
        STAR = 'étoile'
        PLANET = 'planète'
        SATELLITE = 'satellite'
        ASTEROID = 'asteroïde'

class Product(models.Model):
    name = models.CharField(max_length=200, default="", blank=False)
    description = models.TextField(max_length=1000, default="", blank=False)
    price = models.DecimalField(max_digits=7, decimal_places=2, default=0)
    category = models.CharField(max_length=30, choices=Category.choices)
    image = models.ImageField(upload_to ='uploads/')
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
