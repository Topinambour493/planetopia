from django_filters import rest_framework as filters
from .models import Product

class ProductsFilter(filters.FilterSet):
    q = filters.CharFilter(field_name="name", lookup_expr="icontains")
    min_price = filters.NumberFilter(field_name="price" or 1, lookup_expr="gte")
    max_price = filters.NumberFilter(field_name="price" or 1000000, lookup_expr="lte")

    class Meta:
        model = Product
        fields = ['category']
