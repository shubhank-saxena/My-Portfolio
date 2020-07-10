from rest_framework import serializers
from backend.openSource.models import Opensource


class OpensourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opensource
        fields = '__all__'
