"""Diabetes_Data_Visualization URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    url(r'^$', views.overall),
    url(r'^login$', views.login),
    url(r'^index$', views.overall),
    url(r'^individual$', views.individual),
    url(r'^overall$', views.pienest),
    url(r'^pie-nest$', views.pienest),
    url(r'^manage$', views.manage),
    url(r'^num_diabetes_complication$', views.scatterData,
        name='num_diabetes_complication'),
    url(r'^get_patient_info$', views.getPatientInfo, name='get_patient_info'),
    url(r'^get_abnormal_attr$', views.getAbnormalAttr, name='get_abnormal_attr'),
    url(r'^get_radar_info$', views.getRadarInfo, name='get_radar_info'),
    url(r'^get_abnormal_disease_index_data$', views.abnormalDiseaseIndex, name='get_abnormal_disease_index_data'),
]
