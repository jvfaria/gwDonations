from django.db import models
# Create your models here.

class Doador(models.Model):
    nome = models.CharField(max_length=200)
    tipo = models.CharField(max_length=1)
    registro= models.CharField(max_length=15) # CNPJ OU CPF *
    telefone = models.CharField(max_length=14)
    email = models.CharField(max_length=200)
    endereco = models.CharField(max_length=256)
    senha = models.CharField(max_length=128)
    def __str__(self):
        return self.nome


class Instituicao(models.Model):
    cnpj = models.CharField(max_length=200)
    img = models.CharField(max_length=200,default='')
    nome = models.CharField(max_length=200)
    endereco = models.CharField(max_length=256)
    cidade = models.CharField(max_length=200)
    estado = models.CharField(max_length=2)
    def __str__(self):
        return self.nome
        
class Doacao(models.Model):
    doador = models.ForeignKey(Doador, on_delete=models.CASCADE)
    instituicao = models.ForeignKey(Instituicao, on_delete=models.CASCADE, default=1) 
    data_doacao = models.CharField(max_length=20)
    horario_doacao = models.CharField(max_length=20)
    valor = models.DecimalField(max_digits=6, decimal_places=2)

class Categoria_item(models.Model):
    nome_categoria = models.CharField(max_length=100)
    def __str__(self):
        return self.nome_categoria
class Item(models.Model):
    nome = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria_item, on_delete=models.CASCADE)
    def __str__(self):
        return self.nome
class Items_doacao(models.Model):
    items_id = models.ForeignKey(Item, on_delete=models.CASCADE)
    doacao_id = models.ForeignKey(Doacao,on_delete=models.CASCADE)




