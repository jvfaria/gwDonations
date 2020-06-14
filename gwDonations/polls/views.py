from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import *
from django.shortcuts import render
from django.template import loader
from .serializers import *
# Create your views here.


class DoadorViewSet(viewsets.ModelViewSet):
    queryset = Doador.objects.all()
    serializer_class = DoadorSerializer
class DoacaoViewSet(viewsets.ModelViewSet):
    queryset = Doacao.objects.all()
    serializer_class = DoacaoSerializer
    def __str__():
        print(queryset.doador)
        return f'{queryset.doador}'
       
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
class InstituicaoViewSet(viewsets.ModelViewSet):
    queryset = Instituicao.objects.all()
    serializer_class = InstituicaoSerializer
class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria_item.objects.all()
    serializer_class = Categoria_itemSerializer
class ItemsDoacaoViewSet(viewsets.ModelViewSet):
    queryset = Items_doacao.objects.all()
    serializer_class = ItemsDoacaoSerializer