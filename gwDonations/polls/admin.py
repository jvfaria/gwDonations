from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Doacao)
admin.site.register(Doador)
admin.site.register(Instituicao)
admin.site.register(Item)
admin.site.register(Categoria_item)