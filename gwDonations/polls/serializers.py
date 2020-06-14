from rest_framework import serializers
from .models import *

class DoadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doador
        fields = ['id', 'nome', 'tipo', 'registro', 'telefone', 'email', 'endereco','senha']
class DoacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doacao
        fields = ['id','doador','instituicao', 'data_doacao', 'horario_doacao', 'valor']

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id','nome', 'categoria']
class InstituicaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instituicao
        fields = ['id','img','nome', 'endereco', 'cidade', 'estado']
class Categoria_itemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria_item
        fields = ['id', 'nome']
class ItemsDoacaoSerializer:
    class Meta:
        model = Items_doacao
        fields = ['id','item_id','doacao_id']
