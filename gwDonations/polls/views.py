from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import *
from django.shortcuts import render
from django.template import loader
from .serializers import *
# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render({},request))
class DoadorViewSet(viewsets.ModelViewSet):
    queryset = Doador.objects.all()
    serializer_class = DoadorSerializer
class DoacaoViewSet(viewsets.ModelViewSet):
    queryset = Doacao.objects.all()
    serializer_class = DoacaoSerializer
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
class InstituicaoViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = InstituicaoSerializer