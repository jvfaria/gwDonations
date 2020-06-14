from . import views
from django.urls import path,include
from rest_framework import routers, serializers, viewsets
from .views import *
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
router = routers.DefaultRouter()
router.register(r'doadores',DoadorViewSet)
router.register(r'doacoes',DoacaoViewSet)
router.register(r'items',ItemViewSet)
router.register(r'instituicoes',InstituicaoViewSet)
router.register(r'categorias',CategoriaViewSet)
urlpatterns = [
    path('', include(router.urls)),

]