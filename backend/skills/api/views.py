from rest_framework.generics import ListAPIView
from backend.skills.models import Skill
from .serializers import SkillSerializer


class SkillListView(ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
