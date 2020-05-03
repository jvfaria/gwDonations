# Generated by Django 3.0.4 on 2020-04-08 20:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria_item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_categoria', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Doacao',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_doacao', models.DateTimeField(verbose_name='data doacao')),
                ('horario_doacao', models.TimeField()),
                ('valor', models.DecimalField(decimal_places=2, max_digits=6)),
            ],
        ),
        migrations.CreateModel(
            name='Doador',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('tipo', models.CharField(max_length=1)),
                ('registro', models.CharField(max_length=11)),
                ('telefone', models.CharField(max_length=14)),
                ('email', models.CharField(max_length=200)),
                ('endereco', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='polls.Categoria_item')),
            ],
        ),
        migrations.CreateModel(
            name='Itens_doacao',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quant_itens', models.IntegerField()),
                ('doacao_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='polls.Doacao')),
                ('doador_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='polls.Doador')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='polls.Item')),
            ],
        ),
        migrations.AddField(
            model_name='doacao',
            name='doador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='polls.Doador'),
        ),
    ]