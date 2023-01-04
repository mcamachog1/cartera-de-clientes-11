import json
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
	return HttpResponse('Hola!!')
	
# PREGUNTAR PARA MEJORAR
@csrf_exempt
def saludoApi(request):
	print ("El request es: ...")
	print (request.method)
	if request.method == "POST":
		credenciales = json.loads(request.body)
		print('Las credenciales son:')
		print(credenciales)
		return JsonResponse({"message": "Se recibió un POST."}, status=201)
	if request.method == "PUT":
		return JsonResponse({"message": "Se recibió un PUT."}, status=201)		
	return JsonResponse({"message": "Se recibió otra cosa que no es POST."}, status=201)
