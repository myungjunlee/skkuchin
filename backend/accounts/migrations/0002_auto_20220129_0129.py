# Generated by Django 3.1.7 on 2022-01-28 16:29

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='student_id',
            field=models.CharField(max_length=10, unique=True, validators=[django.core.validators.MinLengthValidator(10)]),
        ),
    ]