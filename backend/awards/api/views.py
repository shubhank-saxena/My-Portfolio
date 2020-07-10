from rest_framework.generics import ListAPIView
from backend.awards.models import Award
from .serializers import AwardSerializer


class OpensourceListView(ListAPIView):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer
