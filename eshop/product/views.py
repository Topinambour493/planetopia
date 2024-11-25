from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from .filters import ProductsFilter

from .serializers import ProductSerializer

from .models import Product

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    filtered = ProductsFilter(request.GET, queryset=products.order_by('id'))
    #Pagination
    resPerPage = 5
    paginator = PageNumberPagination()
    paginator.page_size = resPerPage
    queryset = paginator.paginate_queryset(filtered.qs, request)
    serializer = ProductSerializer(queryset, many=True)
    return Response({"products": serializer.data})

@api_view(['GET'])
def get_product(request, pk):

    product = get_object_or_404(Product, id=pk)

    serializer = ProductSerializer(product, many=False)

    return Response({"product": serializer.data})



