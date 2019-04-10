from django import forms


class MessageForm(forms.Form):
    nom = forms.CharField(label="Nom", max_length=50)
    email = forms.CharField(label="Email", max_length=255)
    message = forms.CharField(label="Message", max_length=255, widget=forms.Textarea)
