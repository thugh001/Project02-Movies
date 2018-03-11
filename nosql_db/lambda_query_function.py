import boto3
from boto3.dynamodb.conditions import Key, Attr
import decimal
import json

def lambda_handler(event, context):
    # TODO implement
    dynamodb = boto3.resource('dynamodb', region_name='us-west-1', endpoint_url="https://dynamodb.us-west-1.amazonaws.com")
    table = dynamodb.Table('movies_metadata')

    fe = Key('revenue').gt(500000000)
    kce = Key('revenue').gt(100000)
    ke = Key('id').gt(0)
    pe = "id, revenue, info"
    # Expression Attribute Names for Projection Expression only.
    esk = None

    # Helper class to convert a DynamoDB item to JSON.
    class DecimalEncoder(json.JSONEncoder):
        def default(self, o):
            if isinstance(o, decimal.Decimal):
                if o % 1 > 0:
                   return float(o)
                else:
                    return int(o)
            return super(DecimalEncoder, self).default(o)

    response = table.scan(
        FilterExpression=fe,
        ProjectionExpression=pe,
        Limit=50
       )
            
    resultlist=[]
    ids=[]
    titles=[]
    revenues=[]
    infos=[]

    for i in response['Items']:
        info = json.loads(i['info'])
        title = info['original_title']
        myid = int(i['id'])
        revenue = int(i['revenue'])
        ids.append(myid)
        titles.append(title)
        revenues.append(revenue)
        infos.append(info)

    while 'LastEvaluatedKey' in response:
        response = table.scan(
            ProjectionExpression=pe,
            FilterExpression=fe,
            ExclusiveStartKey=response['LastEvaluatedKey'],
            Limit=50
            )

        for i in response['Items']:
            info = json.loads(i['info'])
            title = info['original_title']
            myid = int(i['id'])
            revenue = int(i['revenue'])
            ids.append(myid)
            titles.append(title)
            revenues.append(revenue)
            infos.append(info)
            
    resultlist=[ids, titles, revenues, infos]
    jsonlist=json.dumps(resultlist)        
    return(resultlist)