from django.shortcuts import render
from django.contrib import messages

from .forms import MessageForm
from .models import Message

# Create your views here.

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def drone(request):
    return render(request, 'drone.html')

def animation(request):
    return render(request, 'animation.html')

def python(request):
    return render(request, 'coding.html')

def contact(request):
    if request.method == 'POST':
        form = MessageForm(request.POST)
        if form.is_valid():
            nom = form.cleaned_data['nom']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            insert = Message(nom=nom, email=email, message=message)
            insert.save()
        else:
            messages.error('Formulaire invalide.')
    else:
        form = MessageForm()

    return render(request, 'contact.html', {'form': form})
