from . import views
from django.urls import path,include
from rest_framework import routers, serializers, viewsets
from .views import *
router = routers.DefaultRouter()
router.register(r'doador',DoadorViewSet)
router.register(r'doacao',DoacaoViewSet)
router.register(r'item',ItemViewSet)
router.register(r'instituicao',InstituicaoViewSet)


urlpatterns = [
    path('', include(router.urls)),

]
