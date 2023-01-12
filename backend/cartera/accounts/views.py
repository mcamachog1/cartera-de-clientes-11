import json
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import permissions
from rest_framework import views
from rest_framework.response import Response

from .models import User

def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        email = request.POST["email"]
        password = request.POST["password"]
        user = authenticate(request, username=email, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "accounts/login.html", {
                "message": "Invalid email and/or password."
            })
    else:
        return render(request, "accounts/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "accounts/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(email, email, password)
            user.save()
        except IntegrityError as e:
            print(e)
            return render(request, "accounts/register.html", {
                "message": "Email address already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "accounts/register.html")

# Create your views here.
def index(request):
    # Authenticated users view their inbox
    if request.user.is_authenticated:
        return render(request, "accounts/index.html")

    # Everyone else is prompted to sign in
    else:
        return HttpResponseRedirect(reverse("login"))

	
# PREGUNTAR PARA MEJORAR
@csrf_exempt
def saludoApi(request):
    # if request.method == "POST":

    #     # Attempt to sign user in
    #     email = credenciales['username']
    #     password = credenciales['password']
    #     user = authenticate(request, username=email, password=password)

    #     # Check if authentication successful
    #     if user is not None:
    #         login(request, user)
    #         return HttpResponseRedirect(reverse("index"))
    #     else:
    #         return render(request, "accounts/login.html", {
    #             "message": "Invalid email and/or password."
    #         })
    # else:
    #     return render(request, "accounts/login.html")

	if request.method == "POST":
		credenciales = json.loads(request.body)
		# Attempt to sign user in
		email = credenciales['username']
		password = credenciales['password']
		user = authenticate(request, username=email, password=password)

		# Check if authentication successful
		if user is not None:
			login(request, user)
			return JsonResponse({"message": "Se logueó."}, status=201)
		else:
			return JsonResponse({"message": "No se logueó."}, status=440)
	else:
		return JsonResponse({"message": "Se recibió otra cosa que no es POST."}, status=201)
