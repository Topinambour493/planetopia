# Generated by Django 5.1.3 on 2024-11-26 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('étoile', 'Star'), ('planète', 'Planet'), ('satellite', 'Satellite'), ('asteroïde', 'Asteroid')], max_length=30),
        ),
    ]
