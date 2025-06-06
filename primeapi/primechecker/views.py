from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

def is_prime(num):
    if num <= 1:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    for i in range(3, int(num**0.5) + 1, 2):
        if num % i == 0:
            return False
    return True

@api_view(['GET'])
def check_prime(request, number):
    result = is_prime(number)
    message = f"{number} is a prime number." if result else f"{number} is not a prime number."
    return Response({
        "number": number,
        "isPrime": result,
        "message": message
    })
