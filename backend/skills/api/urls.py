from django.urls import path
from .views import SkillListView

urlpatterns = [path('', SkillListView.as_view())]
