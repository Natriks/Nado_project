from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('digital', views.digital, name='digital'),
    path('strategy', views.strategy, name='strategy'),
    path('design', views.design, name='design'),
    path('production', views.production, name='production'),
    path('marketing', views.marketing, name='marketing'),
    path('event', views.event, name='event'),
    path('about', views.about, name='about'),
    path('clients', views.clients, name='clients'),
    path('contacts', views.contacts, name='contacts'),
]
