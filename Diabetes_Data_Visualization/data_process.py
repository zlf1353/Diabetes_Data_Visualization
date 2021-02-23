from collections import defaultdict, OrderedDict

import pandas as pd
import numpy as np

from pathlib import Path
from sklearn.metrics.pairwise import cosine_similarity

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent
# csv = 'data/data1.csv'
csv = 'data/DataDispersed.csv'
df = pd.read_csv(BASE_DIR / csv)
data = df.to_numpy()

fs = [
    lambda x: x <= 20,
    lambda x: 21 <= x <= 30,
    lambda x: 31 <= x <= 40,
    lambda x: 41 <= x <= 50,
    lambda x: 51 <= x <= 60,
    lambda x: 61 <= x <= 70,
    lambda x: x >= 71,
]

lefts = [0, 21, 31, 41, 51, 61, 71, ]
rights = [20, 30, 40, 50, 60, 70, 1000]


def barData(left=0, right=len(fs) - 1):
    xAxis = [
        '20岁以下',
        '21-30',
        '31-40',
        '41-50',
        '51-60',
        '61-70',
        '70岁以上',
    ]
    '''
    女性0 男性1
    无并发症0 患并发症1
    Case_ID	 label AGE	SEX
    0       1           2           3           4           5       6       7
    年龄段 n女性无并发症 n女性患并发症 n男性无并发症 n男性患并发症 患病比例 女性患病比例 男性患病比例
    '''
    res = [[xAxis[i], 0, 0, 0, 0, 0, 0, 0] for i in range(len(fs))]
    for x in data:
        for i in range(left, right + 1):
            if fs[i](x[2]):
                res[i][1 + int(x[3]) * 2 + int(x[1])] += 1
                res[i][5] += 1
                res[i][6 + int(x[3])] += 1
                break
    sum_total, sum_female, sum_male = 0, 0, 0
    for x in res:
        sum_total += x[5]
        sum_female += x[6]
        sum_male += x[7]
    for x in res:
        x[5] = x[5] * 100 / sum_total
        x[6] = x[6] * 100 / sum_female
        x[7] = x[7] * 100 / sum_male
    # print(res)
    return res


# [weight, height,sex,label,bmi]
def scatterData(left=0, right=len(fs) - 1):
    '''
    女性0 男性1
    无并发症0 患并发症1
    Case_ID	 label AGE	SEX
    '''
    res = [[] for _ in range(4)]
    for index, row in df.iterrows():
        age = int(row['AGE'])
        if lefts[left] <= age <= rights[right]:
            data = [row['WEIGHT'] if not pd.isnull(row['WEIGHT']) else 0,
                    row['HEIGHT'] if not pd.isnull(row['HEIGHT']) else 0,
                    int(row['SEX']) if not pd.isnull(row['SEX']) else 0,
                    int(row['label']) if not pd.isnull(row['label']) else 0,
                    row['BMI'] if not pd.isnull(row['BMI']) else 0, ]

            # res[int(data[2]) * 2 + int(data[3])].append(data)
            res[int(data[2])].append(data)
    return res


def bloodPressureData():
    res = []
    for index, row in df.iterrows():
        Case_ID = int(row['Case_ID'])
        BP_LOW = int(row['BP_LOW'])
        BP_HIGH = int(row['BP_HIGH'])
        res.append([Case_ID, BP_LOW, BP_HIGH, BP_HIGH - BP_LOW])
    # print(res)
    return res


def relationshipData():
    infos = ['A_S',
             'ARRHYTHMIAS',
             'BILIARY_TRACT_DISEASE',
             'BREAST_TUMOR',
             'CAROTID_ARTERY_STENOSIS',
             'CEREBRAL_APOPLEXTY',
             'CHD',
             'CHF',
             'CIRRHOSIS',
             'CLD',
             'DIGESTIVE_CARCINOMA',
             'ENDOCRINE_DISEASE',
             'FLD',
             'GYNECOLGICAL_TUMOR',
             'HEMATONOSIS',
             'HYPERLIPIDEMIA',
             'HYPERTENTION',
             'INTRACRANIAL_TUMOR',
             'label',
             'LEADDP',
             'LUNG_TUMOR',
             'MEN',
             'MI',
             'NEPHROPATHY',
             'NERVOUS_SYSTEM_DISEASE',
             'OTHER_TUMOR',
             'PANCREATIC_DISEASE',
             'PCOS',
             'PREGNANT',
             'RENAL_FALIURE',
             'RESPIRATORY_SYSTEM_DISEASE',
             'RHEUMATIC_IMMUNITY',
             'UROLOGIC_NEOPLASMS', ]
    points = defaultdict(int)
    for index, row in df.iterrows():
        for info in infos:
            if int(row[info]):
                points[info] += 1
    points = dict(points)
    # res = defaultdict(lambda: defaultdict(int))
    res = {}
    for index, row in df.iterrows():
        for i1 in range(len(infos)):
            s1 = infos[i1]
            if s1 not in res:
                res[s1] = {}
            for i2 in range(i1 + 1, len(infos)):
                s2 = infos[i2]
                if s2 not in res[s1]:
                    res[s1][s2] = 0
                d1 = int(row[s1])
                d2 = int(row[s2])
                if d1 and d2:
                    res[s1][s2] += 1

    print([infos, res, points])
    return [infos, res, points]


def biochemicalIndexesData():
    infos = [
        'ALB',
        'ALP',
        'ALT',
        'AST',
        'DBILI',
        'GGT',
        'GLO',
        'IBILI',
        'LDH_L',
        'TBILI',
        'TP',
        'APTT',
        'FBG',
        'FIBRIN',
        'PT',
        'PTA',
        'CA199',
        'ESR',
        'LPS',
        'ALB_CR',
        'BU',
        'BUN',
        'SCR',
        'SUA',
        'UCR',
        'UPR_24',
        'HDL_C',
        'LDL_C',
        'LP_A',
        'TC',
        'TG',
        'HB',
        'PCV',
        'PLT',
        'GLU_2H',
        'GSP',
        'HBA1C',
        'INS',
    ]
    res = defaultdict(int)
    for index, row in df.iterrows():
        for info in infos:
            x = f'{info}1'
            if x in row and int(row[x]) == 1:
                res[info] += 1

    res = dict(res)
    # print(res)
    return res
    # return [infos, res]


def getPatientInfo(id):
    infos = [
        "Case_ID",
        "NAME",
        "AGE",
        "SEX",
        "NATION",
        "MARITAL_STATUS",
        "HEIGHT",
        "WEIGHT",
        "BP_HIGH",
        "BP_LOW",
        "BMI",
    ]
    infos_dict = OrderedDict()
    for info in infos:
        infos_dict[info] = ''
    for index, row in df.iterrows():
        if int(row['Case_ID']) == int(id):
            for info in infos:
                if info in row:
                    infos_dict[info] = int(row[info])
            break
    # print(infos_dict)
    res = ''
    for k, v in infos_dict.items():
        res += f'{k}: {v}\n'
    # print(res)
    return res


attr = {
    '肝功能': [
        'ALB',
        'ALP',
        'ALT',
        'AST',
        'DBILI',
        'GGT',
        'GLO',
        'IBILI',
        'LDH_L',
        'TBILI',
        'TP',
    ],
    '基本信息': [
        'AGE',
        'BMI',
        'BP_HIGH',
        'BP_LOW',
        'Case_ID',
        'HEART_RATE',
        'HEIGHT',
        'MARITAL_STATUS',
        'NATION',
        'SEX',
        'WEIGHT',
    ],
    '疾病信息': [
        'A_S',
        'ARRHYTHMIAS',
        'BILIARY_TRACT_DISEASE',
        'BREAST_TUMOR',
        'CAROTID_ARTERY_STENOSIS',
        'CEREBRAL_APOPLEXTY',
        'CHD',
        'CHF',
        'CIRRHOSIS',
        'CLD',
        'DIGESTIVE_CARCINOMA',
        'ENDOCRINE_DISEASE',
        'FLD',
        'GYNECOLGICAL_TUMOR',
        'HEMATONOSIS',
        'HYPERLIPIDEMIA',
        'HYPERTENTION',
        'INTRACRANIAL_TUMOR',
        'label',
        'LEADDP',
        'LUNG_TUMOR',
        'MEN',
        'MI',
        'NEPHROPATHY',
        'NERVOUS_SYSTEM_DISEASE',
        'OTHER_TUMOR',
        'PANCREATIC_DISEASE',
        'PCOS',
        'PREGNANT',
        'RENAL_FALIURE',
        'RESPIRATORY_SYSTEM_DISEASE',
        'RHEUMATIC_IMMUNITY',
        'UROLOGIC_NEOPLASMS',
    ],
    '凝血相关': [
        'APTT',
        'FBG',
        'FIBRIN',
        'PT',
        'PTA',
    ],
    '其他': [
        'CA199',
        'ESR',
        'LPS',
    ],
    '肾功能': [
        'ALB_CR',
        'BU',
        'BUN',
        'SCR',
        'SUA',
        'UCR',
        'UPR_24',
    ],
    '生化': [
        'HDL_C',
        'LDL_C',
        'LP_A',
        'TC',
        'TG',
    ],
    '血常规': [
        'HB',
        'PCV',
        'PLT',
    ],
    '血糖相关': [
        'GLU_2H',
        'GSP',
        'HBA1C',
        'INS',
    ],
}
re_attr = {}
for k, v in attr.items():
    for x in v:
        re_attr[x] = k


def getAbnormalAttr(id):
    # myGraphData = [
    #     {"parentNode": "张三", "childNodes": ["小明", "小华", "小杰", "小婷", "小妍", "小飞"]},
    #     {"parentNode": "小明", "childNodes": ["小王", "小赵", "小钱"]},
    #     {"parentNode": "小华", "childNodes": ["小孙", "小李", "小周"]},
    #     {"parentNode": "小杰", "childNodes": ["小吴", "小郑"]},
    #     {"parentNode": "小婷", "childNodes": ["小谢", "小潘"]},
    #     {"parentNode": "小妍", "childNodes": ["小苏", "小陈"]},
    #     {"parentNode": "小飞", "childNodes": ["小郭", "小彭"]}
    # ]
    data = defaultdict(list)
    for index, row in df.iterrows():
        if int(row['Case_ID']) == int(id):
            for x in re_attr:
                if f'{x}1' not in row:
                    print(f'no {x}1')
                else:
                    if int(row[f'{x}1']) == 1:
                        data[re_attr[x]].append(x)
            break
    data = dict(data)
    # print(data)

    return id, data


diseaseInfo = [
    'A_S',
    'ARRHYTHMIAS',
    'BILIARY_TRACT_DISEASE',
    'BREAST_TUMOR',
    'CAROTID_ARTERY_STENOSIS',
    'CEREBRAL_APOPLEXTY',
    'CHD',
    'CHF',
    'CIRRHOSIS',
    'CLD',
    'DIGESTIVE_CARCINOMA',
    'ENDOCRINE_DISEASE',
    'FLD',
    'GYNECOLGICAL_TUMOR',
    'HEMATONOSIS',
    'HYPERLIPIDEMIA',
    'HYPERTENTION',
    'INTRACRANIAL_TUMOR',
    'label',
    'LEADDP',
    'LUNG_TUMOR',
    'MEN',
    'MI',
    'NEPHROPATHY',
    'NERVOUS_SYSTEM_DISEASE',
    'OTHER_TUMOR',
    'PANCREATIC_DISEASE',
    'PCOS',
    'PREGNANT',
    'RENAL_FALIURE',
    'RESPIRATORY_SYSTEM_DISEASE',
    'RHEUMATIC_IMMUNITY',
    'UROLOGIC_NEOPLASMS',
]
liverFunction = [
    'ALB',
    'ALP',
    'ALT',
    'AST',
    'DBILI',
    'GGT',
    'GLO',
    'IBILI',
    'LDH_L',
    'TBILI',
    'TP',
    'APTT',
    'FBG',
    'PT',
    'PTA',
    'BU',
    'SCR',
    'SUA',
    'HDL_C',
    'LDL_C',
    'TC',
    'TG',
    'HB',
    'PCV',
    'PLT',
    'GLU',
    'HBA1C',
]
# kidneyFunction = [
#     'BU',
#     'SCR',
#     'SUA',
# ]
# bloodSugarRelated = [
#     'GLU',
#     'HBA1C',
# ]
# biochemistryInfo = [
#     'HDL_C',
#     'LDL_C',
#     'TC',
#     'TG',
# ]
others = [
    'AGE',
    'BMI',
    'BP_HIGH',
    'BP_LOW',
    'HEIGHT',
    'MARITAL_STATUS',
    'NATION',
    'SEX',
    'WEIGHT',
]


# allInfo = diseaseInfo + liverFunction + kidneyFunction + bloodSugarRelated + biochemistryInfo + others


def getRadarData(id):
    data = []
    id_row = None
    for index, row in df.iterrows():
        if int(row['Case_ID']) == int(id):
            id_row = row
            break
    features = [diseaseInfo, liverFunction, others]
    features_str = ['diseaseInfo',
                    'liverFunction', 'others']
    dimsSimilarityData = []
    for i, feature in enumerate(features):
        try:
            rows = df[feature]
            cosineSimilarity = cosine_similarity(id_row[feature].to_numpy().reshape(1, -1),
                                                 rows.to_numpy())[0]
            dimsSimilarityData.append(cosineSimilarity)
        except Exception as e:
            print(e)
    dimsSimilarityData = np.array(dimsSimilarityData).T
    a = np.argsort(-np.sum(dimsSimilarityData, axis=1))
    for i in range(1, 4):
        Case_ID = df.iloc[a[i]]['Case_ID']
        data.append(list(dimsSimilarityData[a[i]] * 10000 // 1 / 100))
        data.append(Case_ID)
        # print( 'sdssa',list(dimsSimilarityData[a[i]] * 10000 // 1 / 100),type( list(dimsSimilarityData[a[i]] * 10000 // 1 / 100)),)
        # print('datasd',Case_ID, dimsSimilarityData[a[i]])
    print('datasss', data)
    return data


if __name__ == '__main__':
    getRadarData(1)
    # getAbnormalAttr(21)
    # print(scatterData())
    # res = num_diabetes_complication()
    # res = np.array(res)
    # print(np.sum(res))
