from django.contrib import admin
from django.urls import path, include
from django.conf import settings

urlpatterns = [
    path("api-auth/", include("rest_framework.urls")),
    path("admin/", admin.site.urls),
    path("api/", include("backend.projects.api.urls")),
]
