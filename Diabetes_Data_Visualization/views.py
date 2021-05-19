import json
from django.http import HttpResponse, HttpRequest, JsonResponse
from django.shortcuts import render
from Diabetes_Data_Visualization import data_process


def individual(request):
    ctx = {}
    return render(request, 'individual.html', ctx)


def overall(request):
    ctx = {}
    ctx['num_diabetes_complication'] = data_process.barData()
    ctx['scatterData'] = data_process.scatterData()
    ctx['bloodPressureData'] = data_process.bloodPressureData()
    ctx['diseaseRelationshipData'] = data_process.relationshipData()

    ctx['genderdistributionData'] = data_process.genderdistributionData()
    ctx['complicationDdistributionData'] = data_process.complicationDdistributionData()
    return render(request, 'overall.html', ctx)


def pienest(request):
    ctx = {}
    ctx['num_diabetes_complication'] = data_process.barData()
    ctx['scatterData'] = data_process.scatterData()
    ctx['bloodPressureData'] = data_process.bloodPressureData()
    ctx['diseaseRelationshipData'] = data_process.relationshipData()
    ctx['genderdistributionData'] = data_process.genderdistributionData()
    ctx['complicationDdistributionData'] = data_process.complicationDdistributionData()
    return render(request, 'pie-nest.html', ctx)

def manage(request):
    ctx = {}
    return render(request, 'manage.html', ctx)

def login(request):
    ctx = {}
    return render(request, 'login.html', ctx)

def scatterData(request):
    if request.POST:
        left, right = request.POST['left'], request.POST['right']
        left, right = int(left), int(right)
        ret = data_process.scatterData(left, right)
        # print(ret)
        ret = {'data': ret}
        ret = JsonResponse(ret)
        return ret


def getPatientInfo(request):
    if request.POST:
        id = request.POST['id']
        ret = data_process.getPatientInfo(id)
        ret = {'data': ret}
        ret = JsonResponse(ret)
        return ret


def getAbnormalAttr(request):
    if request.POST:
        id = request.POST['id']
        ret = data_process.getAbnormalAttr(id)
        ret = {'data': ret}
        ret = JsonResponse(ret)
        return ret


def getRadarInfo(request):
    if request.POST:
        id = request.POST['id']
        ret = data_process.getRadarData(id)
        ret = {'data': ret}
        ret = JsonResponse(ret)
        return ret

def abnormalDiseaseIndex(request):
    if request.POST:
        id = request.POST['id']
        ret = data_process.getabnormalDiseaseIndexData(id)
        ret = {'data': ret}
        ret = JsonResponse(ret)
        return ret
