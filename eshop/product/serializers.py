from rest_framework import serializers

from django.conf import settings
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ["id", "name", "price", "description", "category", "image"]

    def get_image(self, obj):
        # Retourner l'URL absolue pour l'image
        return settings.MEDIA_URL + str(obj.image)
