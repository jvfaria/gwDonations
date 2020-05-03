from rest_framework import serializers
from .models import *

class DoadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doador
        fields = ['id', 'nome', 'registro', 'telefone', 'email', 'endereco']
class DoacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doacao
        fields = ['id','data_doacao', 'horario_doacao', 'valor']

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id','nome', 'categoria']
class InstituicaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instituicao
        fields = ['id','nome', 'endereco', 'cidade', 'estado']