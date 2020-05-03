from django.db import models

# Create your models here.

class Doador(models.Model):
    nome = models.CharField(max_length=200)
    tipo = models.CharField(max_length=1)
    registro= models.CharField(max_length=11) # CNPJ OU CPF *
    telefone = models.CharField(max_length=14)
    email = models.CharField(max_length=200)
    endereco = models.CharField(max_length=256)

    def __str__(self):
        return self.nome
class Doacao(models.Model):
    doador = models.ForeignKey(Doador, on_delete=models.CASCADE)
    data_doacao = models.DateTimeField('data doacao')
    horario_doacao = models.TimeField()
    valor = models.DecimalField(max_digits=6, decimal_places=2)
class Instituicao(models.Model):
    cnpj = models.CharField(max_length=200)
    nome = models.CharField(max_length=200)
    endereco = models.CharField(max_length=256)
    cidade = models.CharField(max_length=200)
    estado = models.CharField(max_length=2)
class Categoria_item(models.Model):
    nome_categoria = models.CharField(max_length=100)
class Item(models.Model):
    nome = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria_item, on_delete=models.CASCADE)


