# Generated by Django 3.0.8 on 2020-07-04 16:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('awards', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Awards',
            new_name='Award',
        ),
    ]