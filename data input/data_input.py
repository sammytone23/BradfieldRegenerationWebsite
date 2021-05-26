#fuck it python time
import json

def adddata(data,inputobj):
	dic={}
	dic['title']=inputobj['title']
	dic['img']=inputobj['img']
	dic['body']=inputobj['body']
	dic['people']=inputobj['people']
	dic['room']=inputobj['room']
	dic['pos']=len(data)
	data.append(dic)
	return data

with open('../data/data.json','r') as file:
	datalis=[x for x in file]
	jsonstr=''.join(datalis)
	data=json.loads(jsonstr)
	x='1'
	while x:
		with open('input.json') as inputFile:
			inputlis=[x for x in inputFile]
			inputstr=''.join(inputlis)
			inputobj=json.loads(inputstr)
			print(inputobj,data)
			data=adddata(data,inputobj)
			# if inputobj['title'] in data:
			# 	print('that entry already exists, do you want to overwrite? (y/n)')
			# 	flag=input('> ')
			# 	while flag and flag !='y' and flag !='n':
			# 		print('invalid input')
			# 		flag = input('> ')
			# 	if flag=='y':
			# 		data= adddata(data,inputobj)
			# else:
			# 	data= adddata(data,inputobj)
		print('leave input blank to exit, else check input again')
		x=input('> ')
	out=json.dumps(data)
	print(out)
	# file.write(out)
with open('../data/data.json','w') as file:
	file.write(out)