from django.urls import path
from .views import check_prime

urlpatterns = [
    path('is-prime/<int:number>/', check_prime),
]
