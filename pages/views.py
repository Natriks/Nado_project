from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'pages/index.html')


def digital(request):
    return render(request, 'pages/page-digital.html')


def design(request):
    return render(request, 'pages/page-design.html')


def strategy(request):
    return render(request, 'pages/page-strategy.html')


def production(request):
    return render(request, 'pages/page-production.html')


def marketing(request):
    return render(request, 'pages/page-marketing.html')


def event(request):
    return render(request, 'pages/page-event.html')


def about(request):
    return render(request, 'pages/page-about.html')


def clients(request):
    return render(request, 'pages/page-clients.html')


def contacts(request):
    return render(request, 'pages/page-contacts.html')
